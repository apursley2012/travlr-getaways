<!--                                                                            
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /THIRD_PARTY_NOTICES.md                                               *
 * Purpose: Identifies third-party templates, assets, software, and their      *
 *          separate terms.                                                    *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
-->                                                                             

# Third-Party Notices

This file documents **only third-party material** associated with Travlr Getaways: the inherited website template and images, externally delivered stylesheets, and upstream software dependencies. It does not grant a license to project-authored contributions and does not identify those contributions as third-party works.

## Inherited website template and retained artwork

### Beach Resort Web Template — FreeWebsiteTemplates.com

- **Provider:** FreeWebsiteTemplates.com
- **Upstream:** https://www.freewebsitetemplates.com/
- **Original attribution:** `Website template by freewebsitetemplates.com`
- **Material:** Inherited page layout, graphical styling, and retained travel/resort imagery in the customer site and portfolio demo.
- **Representative retained assets:** `Original/original-project/public/images/` (including reef, room, food, decorative background, and logo images), `Original/original-project/app-admin/src/assets/images/`, and template-derived images in `docs/images/`.
- **Provider terms:** https://freewebsitetemplates.com/about/terms
- **Usage and redistribution:** The provider's published terms permit use and modification of its templates but prohibit redistribution unless separately approved. The terms also state that images obtained from other parties remain subject to those parties' agreements.
- **Project-specific rights status:** The available repository does not establish separate redistribution permission for this particular template or confirm the rights to each retained image. These materials are not covered by the project's proprietary license. Obtain appropriate permission or replace the affected materials before redistributing them in a public source archive.

Some image files contain Adobe Photoshop software metadata. This is editor/tool metadata, not a separate bundled Adobe software library or an assertion of artwork copyright ownership.

## Externally served stylesheet (not bundled)

### Bootstrap 5.3.2

- **Project:** Bootstrap (Bootstrap contributors)
- **Copyright:** Copyright 2011–2023 the Bootstrap Authors (for version 5.3.2)
- **License:** MIT
- **Upstream:** https://github.com/twbs/bootstrap
- **License information:** https://github.com/twbs/bootstrap/blob/v5.3.2/LICENSE
- **Runtime delivery:** jsDelivr (`https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css`)
- **Use in project:** `Original/original-project/app-admin/src/index.html`

The CSS is requested from a third-party CDN at runtime and is **not** checked into this repository. The Bootstrap MIT terms govern Bootstrap itself, independently of the project license.

### jsDelivr

- **Service:** jsDelivr, a third-party public CDN
- **Website:** https://www.jsdelivr.com/
- **Role:** Delivery service for the Bootstrap CSS; not an additional bundled package.

## npm dependencies (referenced in lockfiles, not vendored)

The original Express application and Angular administrator declare upstream npm dependencies. This archive contains their manifests and npm lockfiles, **not** `node_modules` or bundled package source trees. Package names, resolved versions, and reported license identifiers below are taken from the respective committed lockfiles.

**Express / Node application** — `Original/original-project/package.json` and `package-lock.json`:

| Scope | Third-party package / upstream | Resolved version | License reported by lockfile |
| --- | --- | --- | --- |
| Runtime | [`cookie-parser`](https://www.npmjs.com/package/cookie-parser) | 1.4.7 | MIT |
| Runtime | [`debug`](https://www.npmjs.com/package/debug) | 2.6.9 | MIT |
| Runtime | [`dotenv`](https://www.npmjs.com/package/dotenv) | 16.6.1 | BSD-2-Clause |
| Runtime | [`express`](https://www.npmjs.com/package/express) | 4.21.2 | MIT |
| Runtime | [`express-jwt`](https://www.npmjs.com/package/express-jwt) | 8.5.1 | MIT |
| Runtime | [`hbs`](https://www.npmjs.com/package/hbs) | 4.2.0 | MIT |
| Runtime | [`http-errors`](https://www.npmjs.com/package/http-errors) | 1.6.3 | MIT |
| Runtime | [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) | 9.0.2 | MIT |
| Runtime | [`mongoose`](https://www.npmjs.com/package/mongoose) | 8.17.1 | MIT |
| Runtime | [`morgan`](https://www.npmjs.com/package/morgan) | 1.9.1 | MIT |
| Runtime | [`passport`](https://www.npmjs.com/package/passport) | 0.7.0 | MIT |
| Runtime | [`passport-local`](https://www.npmjs.com/package/passport-local) | 1.0.0 | MIT per upstream README; lockfile does not specify |

**Angular administration** — `Original/original-project/app-admin/package.json` and `package-lock.json`:

| Scope | Third-party package / upstream | Resolved version | License reported by lockfile |
| --- | --- | --- | --- |
| Runtime | [`@angular/common`](https://www.npmjs.com/package/@angular/common) | 19.0.3 | MIT |
| Runtime | [`@angular/compiler`](https://www.npmjs.com/package/@angular/compiler) | 19.0.3 | MIT |
| Runtime | [`@angular/core`](https://www.npmjs.com/package/@angular/core) | 19.0.3 | MIT |
| Runtime | [`@angular/forms`](https://www.npmjs.com/package/@angular/forms) | 19.0.3 | MIT |
| Runtime | [`@angular/platform-browser`](https://www.npmjs.com/package/@angular/platform-browser) | 19.0.3 | MIT |
| Runtime | [`@angular/router`](https://www.npmjs.com/package/@angular/router) | 19.0.3 | MIT |
| Runtime | [`rxjs`](https://www.npmjs.com/package/rxjs) | 7.8.1 | Apache-2.0 |
| Runtime | [`tslib`](https://www.npmjs.com/package/tslib) | 2.8.1 | 0BSD |
| Runtime | [`zone.js`](https://www.npmjs.com/package/zone.js) | 0.15.0 | MIT per Angular upstream; lockfile does not specify |
| Build/test | [`@angular-devkit/build-angular`](https://www.npmjs.com/package/@angular-devkit/build-angular) | 19.0.4 | MIT |
| Build/test | [`@angular/cli`](https://www.npmjs.com/package/@angular/cli) | 19.0.4 | MIT |
| Build/test | [`@angular/compiler-cli`](https://www.npmjs.com/package/@angular/compiler-cli) | 19.0.3 | MIT |
| Build/test | [`@types/jasmine`](https://www.npmjs.com/package/@types/jasmine) | 5.1.5 | MIT |
| Build/test | [`jasmine-core`](https://www.npmjs.com/package/jasmine-core) | 5.4.0 | MIT |
| Build/test | [`karma`](https://www.npmjs.com/package/karma) | 6.4.4 | MIT |
| Build/test | [`karma-chrome-launcher`](https://www.npmjs.com/package/karma-chrome-launcher) | 3.2.0 | MIT |
| Build/test | [`karma-coverage`](https://www.npmjs.com/package/karma-coverage) | 2.2.1 | MIT |
| Build/test | [`karma-jasmine`](https://www.npmjs.com/package/karma-jasmine) | 5.1.0 | MIT |
| Build/test | [`karma-jasmine-html-reporter`](https://www.npmjs.com/package/karma-jasmine-html-reporter) | 2.1.0 | MIT |
| Build/test | [`typescript`](https://www.npmjs.com/package/typescript) | 5.6.3 | Apache-2.0 |

**Upstream license confirmations:** The [`passport-local` 1.0.0 documentation](https://www.passportjs.org/packages/passport-local/) identifies MIT licensing and credits copyright (c) 2011–2014 Jared Hanson. The [Angular Zone.js project](https://github.com/angular/angular/tree/main/packages/zone.js) identifies MIT licensing. These upstream identifications supplement the missing license metadata in the lockfiles; they do not alter the resolved package versions.

**Transitive dependencies:** The Express and Angular lockfiles additionally identify indirect third-party packages under their `packages` sections. Those packages retain their individual copyright and license terms. This notice lists direct dependencies; it is **not** a complete reproduction of the attribution notices for every transitive dependency. Inspect installed package `LICENSE` / `NOTICE` files and upstream distributions before redistributing compiled or vendored third-party code. A missing license field in a lockfile is not evidence of public-domain status or permission to reuse.

## Third-party license text — MIT

The following standard MIT grant is reproduced for third-party software identified above as MIT-licensed, including Bootstrap, `passport-local`, and `zone.js`. This text does **not** license project-authored contributions or unidentified starter-template assets. Individual packages retain their own copyright notices; consult their upstream distributions for those holder-specific statements.

```text
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Other license identifiers listed in the dependency tables (including Apache-2.0, BSD-2-Clause, and 0BSD) refer to **their respective upstream licenses**. Their complete authoritative terms, notices, and copyright statements should be obtained from the corresponding package distributions.

## Third-party informational references (linked, not bundled)

Some travel information pages link to external third-party publications. These external sources are not copied as redistributable documents into the repository:

- [National Park Service](https://www.nps.gov/) — coastal/swimming safety resources
- [National Weather Service](https://www.weather.gov/safety/lightning) — lightning safety
- [U.S. Coast Guard boating resources](https://www.uscgboating.org/)
- [NOAA coral-reef resources](https://coralreef.noaa.gov/)
- [Australian Institute of Marine Science](https://apps.aims.gov.au/) — marine data/metadata
- [Government of Bermuda](https://www.gov.bm/) — environmental information
- [Dive Sri Lanka](https://www.divesrilanka.com/) — destination information

These third parties retain rights in their independently published content. Linking to a website does not imply endorsement.

## Externally loaded fonts

No Google Fonts, Adobe Fonts, or other remotely loaded font service was identified in the checked-in site or Angular entry-point source files. The stylesheets reference browser/system font families (such as Times New Roman, Arial, and Helvetica); **no standalone third-party font files** are bundled in this ZIP.
