/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /news.js                                                              *
 * Purpose: Owns server-side rendering data for the news customer page while   *
 *          keeping request logic out of the view.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const news = (req, res) => {
  res.render("news", {
    title: "News - Travlr Getaways",
    pageStyle: "news",
  });
};

module.exports = { news };
