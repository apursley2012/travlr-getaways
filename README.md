<!--                                                                            
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /README.md                                                            *
 * Purpose: Documents the portfolio project, deployment, and licensing.        *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
-->                                                                             

# Travlr Getaways

I built Travlr Getaways as a travel website project, preserving my original full-stack application alongside a separate, responsive static portfolio demonstration.

## Explore the project

- **[Static portfolio website](docs/pages/index.html)** — browser-based customer experience, travel content, booking demonstration, and project case study.
- **[Original full-stack source](Original/original-project/README.md)** — Express, Handlebars, MongoDB, REST API, and Angular administration application.
- **[Attribution](THIRD_PARTY_NOTICES.md)** — credits for the starter template, retained artwork, and external references.

The static site is intended for GitHub Pages. Its booking and contact forms validate information in the browser; they do not create reservations, send messages, or store personal data. The original application uses a separate Node.js and MongoDB runtime and is not hosted by GitHub Pages.

## Run the static website locally

From the repository root:

```bash
python3 -m http.server 8000 --directory docs
```

Open `http://localhost:8000/`. The site includes responsive layouts, a branded 404 page, privacy and terms notices, and an accessibility statement.

## Run the original application

I keep the setup instructions, environment variables, database requirements, and Angular commands in [the full-stack README](Original/original-project/README.md).

## Deploy to GitHub Pages

I publish the `docs/` folder directly through GitHub Pages without a workflow. I put these files at the repository root, push to `main`, and select **Deploy from a branch** under **Settings → Pages**. I then choose the `main` branch and `/docs` folder, and save.

The static deployment is independent of the original backend and Angular admin. I do not present simulated bookings or contact forms as live services.

## Authorship, proprietary terms, and third parties

Copyright (c) 2026 Alysha Pursley. I reserve rights in my original project-authored contributions under the [proprietary LICENSE](LICENSE), subject to the terms set out there. I have not licensed my own contributions under MIT.

I do not claim ownership of the inherited website template, its retained images, upstream dependencies, or externally served resources. Their separate notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); inherited template provenance is documented there as well. Publishing this project does not convert third-party materials into my proprietary work.

## Project notes

I preserve both implementations intentionally: the original full-stack application documents the underlying architecture, while the static site provides an independently deployable portfolio experience. The original application's own README explains which services are needed to run it locally.
