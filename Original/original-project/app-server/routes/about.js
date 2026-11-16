/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /about.js                                                             *
 * Purpose: Defines the Express route boundary for the about customer page and *
 *          delegates rendering to its controller.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const aboutController = require("../controllers/about");

const router = express.Router();

router.get("/", aboutController.about);

module.exports = router;
