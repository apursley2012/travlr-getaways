/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /main.js                                                              *
 * Purpose: Owns server-side rendering data for the main customer page while   *
 *          keeping request logic out of the view.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const index = (req, res) => {
  res.render("index", {
    title: "Travlr Getaways",
  });
};

module.exports = { index };
