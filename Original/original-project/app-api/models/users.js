/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /users.js                                                             *
 * Purpose: Defines the User persistence model, password hashing/verification  *
 *          behavior, and JWT creation.                                        *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Password parameters stay centralized so hashing and verification always use the same settings.
const PASSWORD_ITERATIONS = 210_000;
// Earlier project accounts used 100,000 iterations without recording the work factor.
const LEGACY_PASSWORD_ITERATIONS = 100_000;
const PASSWORD_KEY_LENGTH = 64;
const PASSWORD_DIGEST = "sha512";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  passwordIterations: {
    type: Number,
    required: false,
  },
});

/** Generates a unique salt and stores only the derived password hash. */
userSchema.methods.setPassword = function setPassword(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.passwordIterations = PASSWORD_ITERATIONS;
  this.hash = crypto
    .pbkdf2Sync(
      password,
      this.salt,
      PASSWORD_ITERATIONS,
      PASSWORD_KEY_LENGTH,
      PASSWORD_DIGEST
    )
    .toString("hex");
};

/** Recomputes the password hash and compares fixed-length buffers in constant time. */
userSchema.methods.validPassword = function validPassword(password) {
  if (
    typeof password !== "string" ||
    typeof this.hash !== "string" ||
    typeof this.salt !== "string" ||
    !/^[a-f0-9]{128}$/i.test(this.hash) ||
    !/^[a-f0-9]{32}$/i.test(this.salt)
  ) {
    return false;
  }

  const storedHash = Buffer.from(this.hash, "hex");
  // Older records have no work-factor field. Check both historical settings
  // so existing accounts remain usable without weakening newly created hashes.
  // Legacy records omit the work factor; support both historical settings only for those accounts.
  const iterationsToCheck = this.passwordIterations
    ? [this.passwordIterations]
    : [PASSWORD_ITERATIONS, LEGACY_PASSWORD_ITERATIONS];

  // Bound authentication CPU work even when the stored factor is malformed.
  for (const iterations of iterationsToCheck) {
    if (
      !Number.isInteger(iterations) ||
      iterations < LEGACY_PASSWORD_ITERATIONS ||
      iterations > PASSWORD_ITERATIONS
    ) {
      continue;
    }

    const suppliedHash = crypto.pbkdf2Sync(
      password,
      this.salt,
      iterations,
      PASSWORD_KEY_LENGTH,
      PASSWORD_DIGEST
    );

    if (crypto.timingSafeEqual(storedHash, suppliedHash)) {
      return true;
    }
  }

  return false;
};

/**
 * Signs the minimal account identity needed by protected API routes. The secret is supplied at runtime and never falls back to a committed value.
 */
userSchema.methods.generateJWT = function generateJWT() {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is required to generate authentication tokens.");
  }

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Reuse an existing model during development reloads to avoid overwrite errors.
module.exports =
  mongoose.models.users || mongoose.model("users", userSchema);
