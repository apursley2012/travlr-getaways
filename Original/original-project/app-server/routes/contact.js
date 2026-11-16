/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /contact.js                                                           *
 * Purpose: Defines the Express route boundary for the contact customer page   *
 *          and delegates rendering to its controller.                         *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const contactController = require("../controllers/contact");

const router = express.Router();

router.get("/", contactController.contact);

module.exports = router;
