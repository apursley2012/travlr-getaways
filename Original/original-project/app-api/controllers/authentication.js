/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /authentication.js                                                    *
 * Purpose: Owns registration and login request handling for the REST API      *
 *          authentication boundary.                                           *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const passport = require("passport");
const User = require("../models/users");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MINIMUM_PASSWORD_LENGTH = 8;
const MAXIMUM_PASSWORD_LENGTH = 128;

const isValidPassword = (password) =>
  typeof password === "string" &&
  password.length >= MINIMUM_PASSWORD_LENGTH &&
  password.length <= MAXIMUM_PASSWORD_LENGTH;

/**
 * Creates an administrative account and returns a short-lived JWT. Email is normalized before duplicate checks so account identity stays consistent.
 */
const register = async (req, res) => {
  const { name, email, password } = req.body || {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !isValidPassword(password)
  ) {
    return res.status(400).json({
      message:
        `Name, a valid email, and a password between ${MINIMUM_PASSWORD_LENGTH} and ` +
        `${MAXIMUM_PASSWORD_LENGTH} characters are required.`,
    });
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    return res.status(400).json({ message: "A valid email address is required." });
  }

  try {
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      // Keep registration feedback generic so the endpoint does not confirm account existence.
      return res.status(409).json({
        message: "Unable to register with the supplied credentials.",
      });
    }

    const user = new User({
      name: name.trim(),
      email: normalizedEmail,
    });

    user.setPassword(password);
    await user.save();

    return res.status(201).json({
      token: user.generateJWT(),
    });
  } catch (error) {
    console.error("Registration failed:", error);
    return res.status(500).json({
      message: "Unable to register the account.",
    });
  }
};

/**
 * Authenticates through the configured Passport local strategy and returns a JWT. Credential validation remains in Passport/User so password rules have one owner.
 */
const login = (req, res, next) => {
  const { email, password } = req.body || {};

  if (
    typeof email !== "string" ||
    !EMAIL_PATTERN.test(email.trim().toLowerCase()) ||
    !isValidPassword(password)
  ) {
    return res.status(400).json({
      message: "A valid email and password are required.",
    });
  }

  return passport.authenticate("local", (error, user, info) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    return res.status(200).json({
      token: user.generateJWT(),
    });
  })(req, res, next);
};

module.exports = {
  register,
  login,
};
