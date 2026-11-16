/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /app.js                                                               *
 * Purpose: Configures the Express application, middleware, route mounts, API  *
 *          CORS boundary, and centralized error handling.                     *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");
const passport = require("passport");

// Initialize persistence and Passport once before request handling begins.
require("./app-api/models/db");
require("./app-api/config/passport");

const indexRouter = require("./app-server/routes/index");
const travelRouter = require("./app-server/routes/travel");
const newsRouter = require("./app-server/routes/news");
const roomsRouter = require("./app-server/routes/rooms");
const mealsRouter = require("./app-server/routes/meals");
const contactRouter = require("./app-server/routes/contact");
const aboutRouter = require("./app-server/routes/about");
const apiRouter = require("./app-api/routes/index");

const app = express();

// Handlebars owns the server-rendered customer site; Angular is served separately.
app.set("views", path.join(__dirname, "app-server", "views"));
hbs.registerPartials(path.join(__dirname, "app-server", "views", "partials"));
app.set("view engine", "hbs");

app.use(logger(process.env.NODE_ENV === "production" ? "common" : "dev", {
  skip: (req) => req.originalUrl.startsWith("/api/login") || req.originalUrl.startsWith("/api/register"),
}));
app.disable("x-powered-by");

/**
 * Apply browser security headers at the application boundary. Deployment infrastructure remains responsible for TLS and HSTS because HSTS must only be sent over HTTPS.
 */
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return next();
});

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false, limit: "100kb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

// CORS is limited to API traffic so the Angular admin can call the Express API.
app.use("/api", (req, res, next) => {
  const allowedOrigin =
    process.env.ADMIN_ORIGIN ||
    (process.env.NODE_ENV === "production" ? null : "http://localhost:4200");
  if (allowedOrigin && req.get("Origin") === allowedOrigin) {
    res.header("Access-Control-Allow-Origin", allowedOrigin);
    res.header("Vary", "Origin");
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

// Customer-facing routes remain separate from the REST API namespace.
app.use("/", indexRouter);
app.use("/travel", travelRouter);
app.use("/news", newsRouter);
app.use("/rooms", roomsRouter);
app.use("/meals", mealsRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/api", apiRouter);

// Any request that reaches this point did not match a customer or API route.
app.use((req, res, next) => {
  next(createError(404));
});

// JWT failures return JSON for API clients; other errors use the site error view.
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      message: "A valid authentication token is required.",
    });
  }

  if (req.originalUrl.startsWith("/api/")) {
    return res.status(err.status || 500).json({
      message: err.status && err.status < 500 ? err.message : "The API request could not be completed.",
    });
  }

  res.locals.message = err.status && err.status < 500
    ? err.message
    : "The requested page could not be displayed.";
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.locals.errorStatus = err.status || 500;
  return res.status(err.status || 500).render("error", { pageStyle: "error" });
});

module.exports = app;
