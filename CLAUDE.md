# CLAUDE.md — how to build Future Forward 2026 graphics

You are making social media graphics and layouts for **Future Forward 2026 (#FF26)**,
the annual innovation conference hosted by weXelerate in Vienna.

This file is the operating manual. Read it before producing anything. The visual
rules below come from the official Launch Day Announcement deck and are not
negotiable; the copy rules come from the same source.

> **Source of truth.** The design is defined by this repo — `tokens/`, `css/` and
> `templates/`. Do **not** take visual cues from the futureforward.at website; it
> is a different, older design. If something is not in this repo, derive it from
> the closest existing component rather than inventing a new look.

---

## 1. The fastest correct path

Do not write CSS from scratch. Every graphic is:

1. Pick the template in `templates/` whose **structure** matches what you need.
2. Copy it to a new file.
3. Replace the copy, the photo and the numbers.
4. Check it fits (§6) and export (§7).

Picking by structure, not by topic, is the whole trick — a speaker announcement
and a partner announcement are the same layout with different words.

| You need | Start from |
|---|---|
| Carousel opener / hero over a photo | `01-cover-photo.html` |
| One clear message, logo + photo + headline | `02-statement.html` |
| Programme, agenda, list of things | `03-agenda-list.html` |
| Pain → outcome, us vs. them | `04-before-after.html` |
| Proof, recap numbers, "last year in figures" | `05-stats.html` |
| A breakdown that adds to 100% | `06-bar-chart.html` |
| Big photo with three knocked-out points | `07-photo-steps.html` |
| Long copy over a photograph, venue/host info | `08-dark-photo-info.html` |
| Ticket tiers, an offer, a deadline | `09-ticket-offer.html` |
| Final carousel slide, the ask | `10-cta-closing.html` |
| Atmosphere closer, follow prompt | `11-photo-closing.html` |
| Speaker / partner / jury announcement | `12-speaker-card.html` |
| Testimonial, pull quote | `13-quote.html` |
| Instagram or LinkedIn story | `14-story-9x16.html` |
| Single square post | `15-square-announce.html` |
| LinkedIn page or event cover | `16-linkedin-cover.html` |
| Partner thank-you, any "all our partners" slide | `17-partner-wall.html` |
| Dark hero on the earth/astronaut look, tickets, chips | `18-navy-earth-hero.html` |

A LinkedIn carousel is 4–10 of the 4:5 templates in sequence. The convention is:
`01` opener → content slides → `09` or `10` closer. Every slide but the last
carries the `.ff-next` arrow pill bottom-right.

---

## 2. Boilerplate

```html
<link rel="stylesheet" href="../css/fonts.css">
<link rel="stylesheet" href="../tokens/tokens.css">
<link rel="stylesheet" href="../css/ff26.css">

<div class="ff-canvas ff-canvas--4x5">
  <div class="ff-pad">
    <!-- content -->
  </div>
</div>
```

`.ff-canvas` is a fixed-size export surface in real pixels. Everything in this
system is authored on a **1080 × 1350** reference canvas — all token values are px
at that width. Formats: `--4x5` (1080×1350), `--1x1` (1080×1080),
`--9x16` (1080×1920), `--16x9` (1920×1080), `--cover` (1584×396).

One canvas per file. One graphic per canvas.

---

## 3. The five moves that make it look right

Almost every on-brand layout is these five, in this order, top to bottom:

```html
<p class="ff-eyebrow">2025 edition</p>                     <!-- mono, wide tracking, muted -->
<h1 class="ff-display">We let the numbers speak</h1>       <!-- Sora, uppercase, huge, tight -->
<p class="ff-lede">Our attendees leave the event changed.</p>  <!-- OPTIONAL condensed serif, see below -->
<p class="ff-body">Supporting sentence or two in Barlow.</p>
<span class="ff-metabar">26.11.2026&nbsp;|&nbsp;weXelerate, Vienna</span>
```

- The **eyebrow** names the section. It gets an em dash automatically — don't type one.
- The **display** headline is the only loud thing. Uppercase, two or three short lines.
- The **serif lede** is optional and used sparingly. The published #FF26 posts
  mostly skip it: headline → Barlow or mono line is the default. Use the serif at
  most once per carousel, for one warm line. Sentence case, one line, two at most,
  one `<em>`. Never on navy / earth posts.
- **Body** explains. Three lines is plenty.
- The **meta bar** carries date and venue. Put it on the first and last slide.

---

## 4. Colour: the one rule

**One acid element per canvas.** `#DCFF00` is a spotlight. Pick exactly one:
a text highlight (`.ff-mark`), the CTA button, the "after" table header, or one
chart bar. If two things are acid, neither is emphasis.

Never use acid as a page background, for body copy, or for the logo.

Backgrounds are off-white `#FAFAFA`, not pure white. Pure white is for cards
sitting on photographs.

### Navy: the second dark look

Most dark #FF26 posts are not flat black. They sit on the earth/astronaut
photography (`assets/photos/earth-moon.jpg`, `astronaut-earth.jpg`,
`hero-moon.jpg`) and fade from black space into a deep ink navy:

| Token | Hex | Use |
|---|---|---|
| `--ff-navy-ink` | `#08111F` | base of the navy canvas |
| `--ff-navy` | `#0F1D33` | panels and outlined boxes on navy |
| `--ff-navy-glow` | `#263961` | the horizon glow at the bottom |
| `--ff-grad-earth` | black → navy-ink → navy-glow | the only gradient allowed |

Use `.ff-canvas--navy` (reads light, like `--dark`). Over an earth photo, add
`.ff-scrim--earth` to fade the bottom into navy. Navy is a background only:
never text, never a button. Acid stays the one accent on navy too.
Parts that belong to this look: `.ff-ticker` (spaced mono row along the top or
bottom edge), `.ff-chip` (outlined mono pill, e.g. "VIP · €499"), `.ff-tag`
(white mono label, `.ff-tag--acid` for a rotated acid sticker),
`.ff-stepbox-row` (01 / 02 / 03 boxes). See `18-navy-earth-hero.html`.

### Context, never inline colour

Component classes set `color: var(--ff-fg)`. An inline `style="color:#fff"` will
**lose** to them. To recolour a subtree, switch the context:

| Situation | Class |
|---|---|
| Content sitting over a photograph | `.ff-on-photo` on the wrapper |
| A dark canvas | `.ff-canvas--dark` or `--black` |
| A light card inside either of those | already handled — `.ff-card`, `.ff-stat`, `.ff-panel`, `.ff-ticket`, `.ff-fact`, `.ff-list-row`, `.ff-sticker` and `.ff-compare` flip themselves back |
| Any other light box on a dark canvas | add `.ff-light` |

```html
<div class="ff-bleed"><img src="../assets/photos/crowd.jpg" alt=""></div>
<div class="ff-scrim ff-scrim--bottom"></div>
<div class="ff-pad ff-on-photo">…</div>   <!-- everything inside now reads light -->
```

---

## 5. Photography

Always scrim before putting white text on a photo, or knock the text out of a
solid bar instead:

- `.ff-scrim--bottom` — type sits along the bottom (most common)
- `.ff-scrim--both` — logo at top, type at bottom
- `.ff-scrim--strong` — a full paragraph over a busy image

Or use bars: `.ff-mark-ink` (black bar, white text) on bright photos,
`.ff-mark-white` (white bar, black text) on dark photos. Wrap the lines in
`.ff-mark-lines` so each line gets its own shrink-to-fit bar.

Photos live in `assets/photos/`. They are real Future Forward event photography —
prefer them over stock. Never place type over a face.

---

## 6. Check before you ship

Canvases are `overflow: hidden`, so copy that is too long **silently disappears**
off the bottom. Always run the fit check:

```bash
./tools/serve.sh &          # serves the repo on :8777
./tools/check.sh            # measures every template against its canvas
```

It prints `OK`/`BAD` per template and exits non-zero on failure. If a template
overflows, cut words first, then reduce padding — never reduce the display size
below its token value.

---

## 7. Export

```bash
./tools/export.sh                       # every template → export/*.png
./tools/export.sh 12-speaker-card       # just one
```

PNG at exact canvas pixels, ready to upload. Requires Chrome and the local server.

---

## 8. Facts you may state

Do not invent numbers. These are approved:

| | |
|---|---|
| Date | 26.11.2026 (Thursday) |
| Venue | weXelerate, Praterstraße 1, 1020 Vienna |
| Website | www.futureforward.at |
| Hashtags | #FF26, #FutureForward2026, #weXelerate |
| Contact | ecosystem@wexelerate.com |
| Edition | 4th |
| Expected 2026 | 1,000+ attendees |

2025 actuals — label these as **2025 edition**, never as 2026 promises:
899 attendees · 42 nations · 50+ speakers · 40 startups pitched · 19 panels ·
215 matchmaking sessions (53+ hrs) · audience 40% executives & founders,
24% management, 18% specialists, 11% gov/investors, 7% academia ·
golden ratio ~31% startups / ~32% corporates / ~37% enablers.

Programme blocks: Coffee Rave · Inspiration Stage · Deep Dive Tracks ·
Startup Pitching Arena · Curated Matchmaking · Afterparty.

---

## 9. Voice

Direct, confident, a little dry. Short sentences. Verbs over adjectives.
The brand talks to people who are already busy.

- Write "One full day. Infinite connections." — not "An unforgettable journey of innovation."
- Concrete beats abstract: "200+ pre-booked 1:1 meetings" beats "great networking".
- The serif lede is where a sentence is allowed to be human. Nowhere else.
- No exclamation marks except in the "WE'RE BACK!" launch register.
- German content follows the same rules; keep proper nouns (Coffee Rave,
  Inspiration Stage, Deep Dive Tracks) in English.

Full guidance and caption scaffolding: `docs/07-voice-and-copy.md`.

---

## 10. Hard don'ts

- No fifth typeface, no gradient fills (the one exception is `--ff-grad-earth`
  as a canvas background), no drop shadows, no rounded-corner photos
  beyond `--ff-radius-sm`.
- Don't recolour, stretch, outline or box the logo. Black or white only.
- Don't set the serif in uppercase, or the display in sentence case.
- Don't put white text on an unprotected photograph.
- Don't use more than one sticker (`.ff-sticker`) across a whole carousel.
- Don't edit `css/ff26.css` to style one graphic. If a layout needs something the
  system lacks, add a template-local `<style>` block for **layout only** — position,
  size, grid. Colour, type and spacing come from tokens.
- Don't hardcode a hex value. Every colour has a token.

---

## 11. Partner logos

All Future Forward 2026 partner logos are in `assets/partners/`, numbered in
the official order, with `assets/partners/partners.json` as the list
(source: the Notion "Sponsors (Marketing View)" page).

- Tiers always run **Corporate → Event → Supporting**, logos in file-number
  order. Don't reorder, don't promote a partner to a higher tier, don't leave
  one out of an "all partners" graphic.
- Partner logos always sit on a **white panel** (`.ff-partners`). Several files
  have a white background baked in (`"opaque": true` in the JSON), so they
  break on navy or a photo. Only exception: `corporate/01-genesys_white-on-dark.svg`.
- Never recolour, crop or stretch a partner logo. Logos sit in equal boxes with
  `object-fit: contain`. Change `--cols` / `--h` on `.ff-partners__grid` to
  resize the grid.
- Start from `templates/17-partner-wall.html`. For a single partner
  announcement, use `12-speaker-card.html` and put the logo on a white card.
- Partner list changed? Update the JSON and the files, keeping the numbering.
