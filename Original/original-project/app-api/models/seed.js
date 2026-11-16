/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /seed.js                                                              *
 * Purpose: Loads the project trip seed dataset into MongoDB for local         *
 *          application setup.                                                 *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const fs = require("fs");
const path = require("path");
const mongoose = require("./db");
const Trip = require("./travlr");

// The seed file is project data, kept separate from database/application logic.
const seedPath = path.join(__dirname, "..", "..", "data", "trips.json");
const trips = JSON.parse(fs.readFileSync(seedPath, "utf8"));

const validateSeedTrips = async () => {
  if (!Array.isArray(trips) || trips.length === 0) {
    throw new Error("Trip seed data must be a non-empty array.");
  }

  const codes = new Set();
  for (const [index, trip] of trips.entries()) {
    const document = new Trip(trip);
    const error = document.validateSync();
    if (error) {
      throw new Error(`Invalid seed trip at index ${index}: ${error.message}`);
    }
    if (codes.has(trip.code)) {
      throw new Error(`Duplicate seed trip code: ${trip.code}`);
    }
    codes.add(trip.code);
  }
};

const seedDatabase = async () => {
  try {
    await validateSeedTrips();
    await mongoose.connection.asPromise();

    // Seeding intentionally replaces the trip collection so local data matches trips.json exactly.
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log(`Seeded ${trips.length} trips.`);
  } finally {
    // The seed script is a one-off process and should not leave a database connection open.
    await mongoose.connection.close();
  }
};

seedDatabase().catch((error) => {
  console.error("Database seed failed:", error);
  process.exitCode = 1;
});
