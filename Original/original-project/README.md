<!--                                                                            
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /README.md                                                            *
 * Purpose: Documents the original full-stack application, setup, and          *
 *          architecture.                                                      *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
-->                                                                             

# Travlr Getaways — Full-Stack Source

Travlr Getaways is my original full-stack travel application, built before the separate static GitHub Pages demo. It includes a server-rendered customer site, a REST API, MongoDB persistence, JWT-protected trip management, and a separate Angular administration application.

**Author:** Alysha Pursley

**License:** My original project-authored contributions are covered by the repository-root [proprietary LICENSE](../../LICENSE). Inherited template material and third-party assets retain their respective rights; see [Third-party notices](../../THIRD_PARTY_NOTICES.md).

## Architecture

The application keeps the original multi-application architecture intact:

- `app-server/` — Express routes, controllers, and Handlebars customer views
- `app-api/` — MongoDB models, authentication, REST controllers, and API routes
- `app-admin/` — Angular administration application
- `data/` — JSON seed data
- `public/` — customer-site styles and image assets
- `app.js` / `bin/www` — Express application entry points

The delivery includes a separate `docs/` directory. That demo was created later for static GitHub Pages presentation. It is **not** the source this application was derived from and is **not** the runtime for this full-stack application.

## Features

The customer application serves Home, Travel, Rooms, Meals, News, About, and Contact pages. Travel records are read from MongoDB through the shared Mongoose trip model.

The REST API provides:

```text
POST /api/register
POST /api/login
GET  /api/trips
GET  /api/trips/:tripCode
POST /api/trips
PUT  /api/trips/:tripCode
```

Trip creation and updates require a valid JWT. Registration (when explicitly enabled) and login issue the token used for protected requests.

The Angular administration application loads trips from the API, supports trip creation and editing, and includes a login view for obtaining the JWT used by protected writes.

## Technology

- Node.js
- Express
- Handlebars
- MongoDB
- Mongoose
- Passport
- JSON Web Tokens
- Angular
- TypeScript
- RxJS
- Bootstrap

## Local setup

### 1. Install server dependencies

```bash
npm install
```

### 2. Install administration dependencies

```bash
npm --prefix app-admin install
```

### 3. Configure the environment

Copy `.env.example` to `.env` and set a long random `JWT_SECRET`. Keep production secrets outside source control and use HTTPS for authenticated traffic outside local development.

```text
JWT_SECRET=replace-with-a-long-random-secret
DB_HOST=127.0.0.1
DB_NAME=travlr
ADMIN_ORIGIN=http://localhost:4200
ALLOW_PUBLIC_REGISTRATION=false
```

`MONGODB_URI` can be supplied instead of `DB_HOST` and `DB_NAME` when a complete MongoDB connection string is needed.

**Administrator account provisioning:** The `/api/register` endpoint is disabled by default because registered accounts can modify trip records. For a controlled initial setup, temporarily set `ALLOW_PUBLIC_REGISTRATION=true`, create the intended administrator account, and set the variable back to `false` before exposing the API publicly. The switch is an operational safeguard, not a role-based authorization system: all authenticated accounts currently have trip-write access. Do not enable public registration on an untrusted deployment. Production systems needing multiple roles require explicit role enforcement and a controlled provisioning workflow.

**Password compatibility:** Newly registered accounts use 210,000 PBKDF2 iterations. Existing records without a recorded work factor remain verifiable using either the previous 100,000-iteration setting or the current 210,000-iteration setting. Password hashes are not silently rewritten during login.

### 4. Start MongoDB

A MongoDB instance must be available before the application can read or modify trip data.

### 5. Seed trip data

```bash
npm run seed
```

### 6. Start the Express application

```bash
npm start
```

The customer site and REST API run at:

```text
http://localhost:3000/
```

### 7. Start the Angular administration application

In another terminal:

```bash
npm run admin:start
```

The administration application runs at:

```text
http://localhost:4200/
```

## Validation commands

```bash
npm run check
npm test
npm run admin:build
```

The available checks validate source syntax; full-stack behavior also requires MongoDB and a running Angular build.

## Naming conventions

I use kebab-case for project directories and web assets, Angular's standard component/service suffixes, singular model names where a file represents one domain type, and conventional lowercase CommonJS module filenames.

The architecture directories are therefore `app-server`, `app-api`, and `app-admin`. Angular data access uses `trip-data.service.ts`, and the trip interface uses `trip.ts`.

## Customer CSS organization

The server-rendered customer site loads `public/css/shared.css` first and then the stylesheet for the current page. Shared layout, navigation, reusable content patterns, footer rules, and focus behavior stay in `shared.css`; page-only rules stay in the corresponding page stylesheet.

## Security notes

- Secrets belong in `.env`, which is ignored by Git.
- `.env.example` documents required configuration without containing a real secret.
- Passwords are salted and hashed before storage.
- Password comparison uses a timing-safe comparison.
- JWT-protected endpoints require the configured signing secret.
- API error responses avoid returning raw exception objects.
- CORS is limited to the configured administration origin.

## Attribution

Travlr Getaways retains visual-template material originating from FreeWebsiteTemplates.com. I preserve that attribution rather than representing the starter template as original work. Attribution details are recorded in `../../THIRD_PARTY_NOTICES.md`.

## Production runtime and deployment

Use **Node.js 22 LTS** for the server and Angular 19 build. Install dependencies from the committed lockfiles (`npm ci` in this directory and `npm ci --prefix app-admin` for the administration project). MongoDB must be reachable and compatible with the installed Mongoose 8 driver; validate the chosen MongoDB server version with the hosting provider before deployment.

Set `NODE_ENV=production`, `JWT_SECRET` to a unique high-entropy secret, `MONGODB_URI` to the actual production connection URI, and `ADMIN_ORIGIN` to the exact admin browser origin if it differs from the API origin. Do not put JWT or database secrets in Angular environment files or public assets. The Express process waits for its initial MongoDB connection before listening and aborts startup if the required database cannot connect.

The Angular production build uses `environment.production.ts` and calls `/api` on the **same origin**. Host its compiled `dist/travlr-admin/browser/` output behind a reverse proxy that forwards `/api` to the Express application, and provide a fallback to the admin `index.html` for client-side routes. Serve authenticated traffic over HTTPS. The Angular build is not deployed to GitHub Pages: the independent static companion is the Pages deliverable.

For production rollout, build and validate before switching traffic; retain a known-good previous artifact for rollback. Verify the customer home page, `GET /api/trips`, admin login, a protected trip write, and static assets against the actual deployed services. MongoDB data backup/restore and any schema changes must be handled separately from code rollback. Hosting, TLS, proxy configuration, database availability, and live smoke tests cannot be verified solely from this archive.
