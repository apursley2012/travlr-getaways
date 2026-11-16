/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /meals.js                                                             *
 * Purpose: Owns server-side rendering data for the meals customer page while  *
 *          keeping request logic out of the view.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const meals = (req, res) => {
  res.render("meals", {
    title: "Meals - Travlr Getaways",
    pageStyle: "meals",
  });
};

module.exports = { meals };
