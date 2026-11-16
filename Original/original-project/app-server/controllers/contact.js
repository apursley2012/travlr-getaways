/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /contact.js                                                           *
 * Purpose: Owns server-side rendering data for the contact customer page      *
 *          while keeping request logic out of the view.                       *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const contact = (req, res) => {
  res.render("contact", {
    title: "Contact - Travlr Getaways",
  });
};

module.exports = { contact };
