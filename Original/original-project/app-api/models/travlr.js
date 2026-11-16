/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /travlr.js                                                            *
 * Purpose: Defines the Mongoose Trip schema used by both the customer site    *
 *          and REST API.                                                      *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const mongoose = require("mongoose");

// The schema is the shared source of truth for API writes and server-rendered trip reads.
const tripSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, trim: true, maxlength: 64, match: /^[A-Za-z0-9_-]+$/ },
    name: { type: String, required: true, trim: true, maxlength: 160 },
    length: { type: String, required: true, trim: true, maxlength: 80 },
    start: { type: Date, required: true },
    resort: { type: String, required: true, trim: true, maxlength: 160 },
    perPerson: { type: Number, required: true, min: 0 },
    image: { type: String, required: true, trim: true, maxlength: 255 },
    description: { type: String, required: true, trim: true, maxlength: 5000 },
  },
  { timestamps: true }
);

// Reuse an existing compiled model when development tooling reloads this module.
module.exports =
  mongoose.models.trips || mongoose.model("trips", tripSchema);
