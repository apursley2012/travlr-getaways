/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /index.js                                                             *
 * Purpose: Defines the REST API endpoint map and applies authentication       *
 *          middleware to protected trip writes.                               *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

const router = express.Router();

const AUTH_WINDOW_MS = 15 * 60 * 1000;
const AUTH_MAX_REQUESTS = 20;
// In-memory counters apply to this process only; distributed deployments need shared limits.
const authenticationAttempts = new Map();
const AUTH_CLEANUP_INTERVAL_MS = AUTH_WINDOW_MS;

/**
 * Applies a small in-memory abuse guard to public authentication endpoints. Production deployments with multiple instances should enforce the same policy at the shared proxy or rate-limit store so limits remain consistent across processes.
 */
function limitAuthenticationRequests(req, res, next) {
  const now = Date.now();
  const key = req.ip;
  // Expired IP entries must not accumulate indefinitely under rotating-source traffic.
  if (now - (limitAuthenticationRequests.lastCleanupAt || 0) >= AUTH_CLEANUP_INTERVAL_MS) {
    for (const [ip, attempt] of authenticationAttempts) {
      if (now - attempt.startedAt >= AUTH_WINDOW_MS) {
        authenticationAttempts.delete(ip);
      }
    }
    limitAuthenticationRequests.lastCleanupAt = now;
  }

  const existing = authenticationAttempts.get(key);

  if (!existing || now - existing.startedAt >= AUTH_WINDOW_MS) {
    authenticationAttempts.set(key, { count: 1, startedAt: now });
    return next();
  }

  existing.count += 1;
  if (existing.count > AUTH_MAX_REQUESTS) {
    res.setHeader("Retry-After", Math.ceil((AUTH_WINDOW_MS - (now - existing.startedAt)) / 1000));
    return res.status(429).json({
      message: "Too many authentication attempts. Please try again later.",
    });
  }

  return next();
}


const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
  throw new Error("JWT_SECRET is required before the API routes can be initialized.");
}

// express-jwt verifies bearer tokens and exposes claims as req.auth for protected writes.
const requireAuthentication = jwt({
  secret: jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth",
});

// Authentication endpoints are public; trip reads are public and writes require a token.
// Creating a JWT-capable account grants trip-write access. Registration therefore
// requires a deliberate operator opt-in, not just knowledge of the public endpoint.
router.post("/register", limitAuthenticationRequests, (req, res, next) => {
  if (process.env.ALLOW_PUBLIC_REGISTRATION !== "true") {
    return res.status(403).json({
      message: "Account registration is not enabled.",
    });
  }

  return next();
}, authController.register);
router.post("/login", limitAuthenticationRequests, authController.login);

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(requireAuthentication, tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(requireAuthentication, tripsController.tripsUpdateTrip);

module.exports = router;
