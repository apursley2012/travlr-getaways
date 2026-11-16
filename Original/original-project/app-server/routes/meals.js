/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /meals.js                                                             *
 * Purpose: Defines the Express route boundary for the meals customer page and *
 *          delegates rendering to its controller.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const mealsController = require("../controllers/meals");

const router = express.Router();

router.get("/", mealsController.meals);

module.exports = router;
