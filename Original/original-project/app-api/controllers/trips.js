/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trips.js                                                             *
 * Purpose: Owns REST API trip retrieval and authenticated trip-write request  *
 *          handling.                                                          *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const Trip = require("../models/travlr");
const User = require("../models/users");

const sendServerError = (res, message, error) => {
  console.error(message, error);
  return res.status(500).json({ message });
};

/**
 * Resolves the JWT identity to a current database user before a protected write. A valid token alone is not enough if the underlying account no longer exists.
 */
const getAuthenticatedUser = async (req, res) => {
  if (!req.auth?.email) {
    res.status(401).json({ message: "Unauthorized access." });
    return null;
  }

  try {
    const user = await User.findOne({ email: req.auth.email });
    if (!user) {
      res.status(404).json({ message: "User not found." });
      return null;
    }
    return user;
  } catch (error) {
    sendServerError(res, "Unable to verify the authenticated user.", error);
    return null;
  }
};

// Allow-list writable trip fields instead of passing the entire request body to Mongoose.
const buildTripData = (body) => ({
  code: body.code,
  name: body.name,
  length: body.length,
  start: body.start,
  resort: body.resort,
  perPerson: body.perPerson,
  image: body.image,
  description: body.description,
});

const hasObjectBody = (body) =>
  body !== null && typeof body === "object" && !Array.isArray(body);

const sendTripWriteError = (res, error, action) => {
  if (error?.code === 11000) {
    return res.status(409).json({ message: "A trip with this code already exists." });
  }

  if (error?.name === "ValidationError" || error?.name === "CastError") {
    return res.status(400).json({ message: "Please check the trip fields and try again." });
  }

  return sendServerError(res, `Unable to ${action} the trip.`, error);
};

const tripsList = async (req, res) => {
  try {
    // Read-only list responses use plain objects; no document methods are needed here.
    const trips = await Trip.find({}).lean();
    return res.status(200).json(trips);
  } catch (error) {
    return sendServerError(res, "Unable to retrieve trips.", error);
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).lean();

    if (!trip) {
      return res.status(404).json({ message: "Trip not found." });
    }

    return res.status(200).json(trip);
  } catch (error) {
    return sendServerError(res, "Unable to retrieve the trip.", error);
  }
};

const tripsAddTrip = async (req, res) => {
  if (!hasObjectBody(req.body)) {
    return res.status(400).json({ message: "A valid trip payload is required." });
  }

  const user = await getAuthenticatedUser(req, res);
  if (!user) {
    return;
  }

  try {
    const trip = await Trip.create(buildTripData(req.body));
    return res.status(201).json(trip);
  } catch (error) {
    return sendTripWriteError(res, error, "add");
  }
};

const tripsUpdateTrip = async (req, res) => {
  if (!hasObjectBody(req.body)) {
    return res.status(400).json({ message: "A valid trip payload is required." });
  }

  const user = await getAuthenticatedUser(req, res);
  if (!user) {
    return;
  }

  try {
    const trip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      buildTripData(req.body),
      // Return the updated record and enforce the same schema constraints used on create.
      { new: true, runValidators: true }
    );

    if (!trip) {
      return res.status(404).json({
        message: `Trip not found with code ${req.params.tripCode}.`,
      });
    }

    return res.status(200).json(trip);
  } catch (error) {
    return sendTripWriteError(res, error, "update");
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
};
