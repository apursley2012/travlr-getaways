/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trips.test.js                                                        *
 * Purpose: Regression tests for trip API behavior using isolated model stubs. *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              
const test = require("node:test");
const assert = require("node:assert/strict");
const Module = require("node:module");

const state = { trips: [], user: { email: "admin@example.test" }, failure: null };
const Trip = {
  find: () => ({ lean: async () => {
    if (state.failure) throw state.failure;
    return state.trips;
  }}),
  findOne: ({ code }) => ({ lean: async () => {
    if (state.failure) throw state.failure;
    return state.trips.find((trip) => trip.code === code) || null;
  }}),
  create: async (data) => {
    if (state.failure) throw state.failure;
    if (state.trips.some((trip) => trip.code === data.code)) {
      throw Object.assign(new Error("duplicate"), { code: 11000 });
    }
    state.trips.push({ ...data });
    return { ...data };
  },
  findOneAndUpdate: async ({ code }, data) => {
    if (state.failure) throw state.failure;
    const index = state.trips.findIndex((trip) => trip.code === code);
    if (index === -1) return null;
    state.trips[index] = { ...state.trips[index], ...data };
    return { ...state.trips[index] };
  },
};
const User = { findOne: async () => state.user };
const originalLoad = Module._load;
let controller;
try {
  Module._load = function (name, parent, isMain) {
    if (parent?.filename?.endsWith("/app-api/controllers/trips.js")) {
      if (name === "../models/travlr") return Trip;
      if (name === "../models/users") return User;
    }
    return originalLoad.apply(this, arguments);
  };
  controller = require("../app-api/controllers/trips");
} finally {
  Module._load = originalLoad;
}
function request(body = {}, code = "ABC") {
  return { body, params: { tripCode: code }, auth: { email: "admin@example.test" } };
}
function response() {
  return {
    statusCode: 200, payload: null,
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.payload = payload; return this; },
  };
}
const trip = {
  code: "ABC", name: "Reef", length: "3 nights", start: "2026-05-01",
  resort: "Beach", perPerson: 0, image: "reef.jpg", description: "Trip",
};
test.beforeEach(() => { state.trips = []; state.user = { email: "admin@example.test" }; state.failure = null; });
test("empty list returns a successful empty array", async () => {
  const res = response();
  await controller.tripsList(request(), res);
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.payload, []);
});
test("trip create, read, and update preserve identity and accept zero price", async () => {
  let res = response();
  await controller.tripsAddTrip(request({ ...trip, isAdmin: true }), res);
  assert.equal(res.statusCode, 201);
  assert.equal(res.payload.perPerson, 0);
  assert.equal("isAdmin" in res.payload, false);
  res = response();
  await controller.tripsFindByCode(request({}, "ABC"), res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.payload.name, "Reef");
  res = response();
  await controller.tripsUpdateTrip(request({ ...trip, code: "DEF", name: "Updated" }, "ABC"), res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.payload.code, "DEF");
  assert.equal(state.trips.length, 1);
  assert.equal(state.trips[0].name, "Updated");
});
test("duplicate trip codes return conflict rather than success", async () => {
  await controller.tripsAddTrip(request(trip), response());
  const res = response();
  await controller.tripsAddTrip(request(trip), res);
  assert.equal(res.statusCode, 409);
});
test("missing or malformed trip bodies return validation errors", async () => {
  for (const body of [null, [], "bad"]) {
    const res = response();
    await controller.tripsAddTrip(request(body), res);
    assert.equal(res.statusCode, 400);
  }
});
test("unknown trip reads and writes return not found", async () => {
  for (const handler of [controller.tripsFindByCode, controller.tripsUpdateTrip]) {
    const res = response();
    await handler(request(trip, "MISSING"), res);
    assert.equal(res.statusCode, 404);
  }
});
test("unauthorized writes do not persist records", async () => {
  const req = request(trip);
  delete req.auth;
  const res = response();
  await controller.tripsAddTrip(req, res);
  assert.equal(res.statusCode, 401);
  assert.equal(state.trips.length, 0);
});
test("deleted accounts cannot write records", async () => {
  state.user = null;
  const res = response();
  await controller.tripsAddTrip(request(trip), res);
  assert.equal(res.statusCode, 404);
  assert.equal(state.trips.length, 0);
});
test("database write failures return server error rather than success", async () => {
  state.failure = new Error("database unavailable");
  const originalError = console.error;
  console.error = () => {};
  try {
    const res = response();
    await controller.tripsAddTrip(request(trip), res);
    assert.equal(res.statusCode, 500);
    assert.equal(state.trips.length, 0);
    assert.doesNotMatch(res.payload.message, /database unavailable/);
  } finally { console.error = originalError; }
});
