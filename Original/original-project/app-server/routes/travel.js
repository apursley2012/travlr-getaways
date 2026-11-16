/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /travel.js                                                            *
 * Purpose: Defines the Express route boundary for the travel customer page    *
 *          and delegates rendering to its controller.                         *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const travelController = require("../controllers/travel");

const router = express.Router();

router.get("/", travelController.travel);

module.exports = router;
