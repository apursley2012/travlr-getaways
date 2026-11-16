/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /news.js                                                              *
 * Purpose: Defines the Express route boundary for the news customer page and  *
 *          delegates rendering to its controller.                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const express = require("express");
const newsController = require("../controllers/news");

const router = express.Router();

router.get("/", newsController.news);

module.exports = router;
