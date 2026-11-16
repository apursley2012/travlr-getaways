/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /index.js                                                             *
 * Purpose: Defines the Express route boundary for the index customer page and *
 *          delegates rendering to its controller.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const mainController = require("../controllers/main");

const router = express.Router();

router.get("/", mainController.index);

module.exports = router;
