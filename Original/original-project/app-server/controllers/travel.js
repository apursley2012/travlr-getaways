/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /travel.js                                                            *
 * Purpose: Owns server-side rendering data for the travel customer page while *
 *          keeping request logic out of the view.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const Trip = require("../../app-api/models/travlr");

/**
 * Renders travel directly from the shared Mongoose model. The server does not call its own REST endpoint, which avoids an unnecessary HTTP loop.
 */
const travel = async (req, res, next) => {
  try {
    const trips = await Trip.find({}).lean();
    const message = trips.length ? null : "No trips are currently available.";

    return res.render("travel", {
      title: "Travel - Travlr Getaways",
      trips,
      message,
      pageStyle: "travel",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { travel };
