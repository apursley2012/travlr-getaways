/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /rooms.js                                                             *
 * Purpose: Owns server-side rendering data for the rooms customer page while  *
 *          keeping request logic out of the view.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const rooms = (req, res) => {
  res.render("rooms", {
    title: "Rooms - Travlr Getaways",
    pageStyle: "rooms",
  });
};

module.exports = { rooms };
