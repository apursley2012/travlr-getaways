/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /about.js                                                             *
 * Purpose: Owns server-side rendering data for the about customer page while  *
 *          keeping request logic out of the view.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const about = (req, res) => {
  res.render("about", {
    title: "About - Travlr Getaways",
  });
};

module.exports = { about };
