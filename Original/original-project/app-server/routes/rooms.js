/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /rooms.js                                                             *
 * Purpose: Defines the Express route boundary for the rooms customer page and *
 *          delegates rendering to its controller.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const roomsController = require("../controllers/rooms");

const router = express.Router();

router.get("/", roomsController.rooms);

module.exports = router;
