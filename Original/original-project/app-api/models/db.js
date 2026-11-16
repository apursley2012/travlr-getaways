/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /db.js                                                                *
 * Purpose: Owns MongoDB connection configuration, model registration, and     *
 *          graceful database shutdown behavior.                               *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const mongoose = require("mongoose");

// MONGODB_URI supports hosted deployments; host/name defaults keep local setup simple.
const host = process.env.DB_HOST || "127.0.0.1";
const databaseName = process.env.DB_NAME || "travlr";
if (process.env.NODE_ENV === "production" && !process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI must be configured for production deployments.");
}
const dbUri = process.env.MONGODB_URI || `mongodb://${host}/${databaseName}`;

const connect = async () => {
  try {
    await mongoose.connect(dbUri, { serverSelectionTimeoutMS: 10000 });
  } catch (error) {
    console.error("Initial MongoDB connection failed:", error.message);
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected.");
});

mongoose.connection.on("error", (error) => {
  console.error("Mongoose connection error:", error.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected.");
});

// The HTTP entry point coordinates server drain before closing this connection.
const close = async () => {
  await mongoose.connection.close();
};

const readyPromise = connect();

// Register schemas when the connection module is loaded so all consumers share one model registry.
require("./travlr");
require("./users");

mongoose.readyPromise = readyPromise;
mongoose.closeForShutdown = close;
module.exports = mongoose;
