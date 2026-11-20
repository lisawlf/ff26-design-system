# Future Forward 2026 — Design System

The visual system for **#FF26**, the annual innovation conference hosted by
weXelerate in Vienna. Design tokens, a component stylesheet, sixteen
ready-to-fill social templates, brand documentation and a headless export
pipeline.

Built for making social media graphics fast and consistently — by hand, or with
Claude via [`CLAUDE.md`](CLAUDE.md).

**Source of truth:** the *ff is back — Launch Day Announcement 2026* deck.
Everything here is derived from it. The futureforward.at website is an older,
different design and is **not** a reference for this system.

---

## Quick start

```bash
./tools/serve.sh &                          # serve on :8777
open http://localhost:8777/preview/         # the living styleguide
```

Make a graphic:

```bash
cp templates/02-statement.html templates/my-post.html
# edit the copy, the photo, the numbers
./tools/check.sh                            # does it still fit the canvas?
./tools/export.sh my-post                   # → export/my-post.png
```

Templates load CSS and images by relative path, so they need a real origin —
opening the `.html` from Finder gives you an unstyled page.

---

## What's in here

```
tokens/
  tokens.json        design tokens — the source of truth
  tokens.css         the same values as CSS custom properties
  tailwind.preset.js optional Tailwind preset
css/
  fonts.css          the four typefaces
  ff26.css           canvases, type, layout, components
templates/           16 ready-to-fill layouts (see below)
assets/
  logo/              Future Forward + weXelerate marks, black and white
  partners/          every FF26 partner logo, in official order + partners.json
  photos/            event photography + earth/astronaut backgrounds
docs/                brand documentation
preview/index.html   living styleguide — every token and component, rendered
tools/               serve · check · export
CLAUDE.md            operating manual for building graphics with Claude
```

---

## The system in one screen

**Colour.** Acid `#DCFF00`, ink `#0E0E0E`, off-white paper `#FAFAFA`, a short
grey ramp, and an ink navy (`#08111F` → `#263961`) for the dark posts that sit
on the earth/astronaut photography. **One acid element per canvas** — a highlight, a button, a table
header, or one chart bar. Never a background, never body copy.

**Type.** Four families, four jobs:

| | |
|---|---|
| **Sora** | Display headlines. Uppercase, tight, leading below 1.0 |
| **Noto Serif Display** | Optional, sparing: at most one warm lede line per carousel |
| **Barlow** | All running copy |
| **JetBrains Mono** | Eyebrows, dates, venue, every number |

Putting numbers in mono is what makes claims read as measurements. It is the
easiest rule to break and the most visible when broken.

**Canvas.** Every graphic is one fixed-size `.ff-canvas`. All token values are
px on a **1080 × 1350** reference canvas.

**The canonical stack** — most on-brand slides are exactly this:

```html
<p class="ff-eyebrow">2025 edition</p>
<h1 class="ff-display">We let the numbers speak</h1>
<p class="ff-lede">Our attendees leave the event changed.</p>
<p class="ff-body">Supporting sentence in Barlow.</p>
<span class="ff-metabar">26.11.2026&nbsp;|&nbsp;weXelerate, Vienna</span>
```

---

## Templates

01–11 recreate the launch deck slide for slide. 12–16 extend the same parts to
speakers, quotes and the other formats.

| | Template | Format | For |
|---|---|---|---|
| 01 | `01-cover-photo` | 4:5 | Carousel opener over a photo |
| 02 | `02-statement` | 4:5 | One clear message |
| 03 | `03-agenda-list` | 4:5 | Programme, list + photo rail |
| 04 | `04-before-after` | 4:5 | Pain → outcome |
| 05 | `05-stats` | 4:5 | Proof, recap numbers |
| 06 | `06-bar-chart` | 4:5 | A breakdown that adds to 100% |
| 07 | `07-photo-steps` | 4:5 | Big photo, three knocked-out points |
| 08 | `08-dark-photo-info` | 4:5 | Long copy over photography |
| 09 | `09-ticket-offer` | 4:5 | Tickets, an offer, a deadline |
| 10 | `10-cta-closing` | 4:5 | Final slide, the ask |
| 11 | `11-photo-closing` | 4:5 | Atmosphere closer, follow prompt |
| 12 | `12-speaker-card` | 4:5 | Speaker / partner announcement |
| 13 | `13-quote` | 1:1 | Testimonial |
| 14 | `14-story-9x16` | 9:16 | Story |
| 15 | `15-square-announce` | 1:1 | Single square post |
| 16 | `16-linkedin-cover` | 1584×396 | LinkedIn page / event cover |
| 17 | `17-partner-wall` | 4:5 | All partners: corporate → event → supporting |
| 18 | `18-navy-earth-hero` | 4:5 | Navy earth look: ticker, photo card, chips |

Pick by **structure**, not topic: a speaker announcement and a partner
announcement are the same layout with different words.

---

## Partner logos

`assets/partners/` holds all 35 Future Forward 2026 partner logos, numbered in
the official order and grouped by tier (`corporate/`, `event/`,
`supporting/`). `assets/partners/partners.json` is the list. Always on a white
panel, always in that order. See [CLAUDE.md §11](CLAUDE.md).

## Using this with Claude

Give Claude the repo link and say what you need ("a 4:5 post thanking our
partners", "a story announcing the VIP ticket"). Claude reads `CLAUDE.md`,
picks a template, fills it in and exports a PNG.

---

## Checking and exporting

Canvases are `overflow: hidden`, so copy that runs long **silently disappears**
off the bottom edge. Always run the fit check before exporting:

```bash
./tools/check.sh
```

```
OK   05-stats.html              1080×1350   fits
BAD  06-bar-chart.html          1080×1350   overflows bottom by 88px  → ff-footer
FAIL — 1 of 16 templates overflow.
```

Exits non-zero, so it drops straight into CI. Then:

```bash
./tools/export.sh                  # all → export/*.png at exact canvas pixels
./tools/export.sh 12-speaker       # one
FF26_SCALE=2 ./tools/export.sh     # @2x for print
```

Requires Chrome. Point `CHROME_BIN` at another Chromium build if needed.

---

## Documentation

| | |
|---|---|
| [01 · Foundations](docs/01-foundations.md) | Principles, canvas, grid, spacing, layering |
| [02 · Typography](docs/02-typography.md) | The four families, scale, the `wdth` axis trap, self-hosting |
| [03 · Colour](docs/03-color.md) | Palette, contrast ratios, context tokens, scrims |
| [04 · Components](docs/04-components.md) | Every component, with markup |
| [05 · Formats & export](docs/05-formats-export.md) | Formats, safe areas, carousels, troubleshooting |
| [06 · Logo & imagery](docs/06-logo-imagery.md) | Logo rules, photography direction, icons |
| [07 · Voice & copy](docs/07-voice-and-copy.md) | Tone, approved facts, caption scaffolding |
| [CLAUDE.md](CLAUDE.md) | Operating manual for generating graphics with Claude |

---

## Using the tokens elsewhere

`tokens/tokens.json` is the machine-readable source. `tokens/tokens.css` and
`tokens/tailwind.preset.js` mirror it — if you change a value, change it in the
JSON and mirror it out.

```js
// tailwind.config.js
module.exports = { presets: [require('./tokens/tailwind.preset.js')] };
```

```html
<div class="bg-ff-paper text-ff-ink font-display">…</div>
```

---

## Licence

Code, tokens and templates: MIT (see `LICENSE`).

The four typefaces are SIL Open Font License 1.1 and free to embed, including
commercially: [Sora](https://fonts.google.com/specimen/Sora),
[Barlow](https://fonts.google.com/specimen/Barlow),
[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono),
[Noto Serif Display](https://fonts.google.com/specimen/Noto+Serif+Display).

**Logos and photography are not covered by the MIT licence.** The Future
Forward and weXelerate marks and all event photography in `assets/` are
property of weXelerate GmbH and may only be used for official Future Forward
and weXelerate communications.
