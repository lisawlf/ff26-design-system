# 01 · Foundations

## What this system is for

Future Forward is a one-day innovation conference for people who run things. The
visual system has to look like the event sounds: precise, current, slightly
technical, never corporate-soft. Three ideas hold it together.

**Precision over decoration.** Hairline borders, flat fills, exact grids. No
gradients, no shadows, no glows. If an element needs decoration to look
finished, the layout is wrong.

**Hierarchy through contrast, not colour.** The palette is almost entirely
greyscale. Emphasis comes from scale (a 92px headline next to 16px caption),
weight, and one acid accent used once.

**Mono means data.** JetBrains Mono is reserved for facts — dates, counts,
percentages, venue lines. That reservation is what lets "899 attendees" read as
a measurement rather than a boast.

---

## The canvas

Every graphic is one fixed-size `.ff-canvas`. There is no responsive behaviour
and no fluid type: a social graphic is a poster, and posters have edges.

All token values are **px on a 1080-wide reference canvas**. Other widths
(the 1920 slide, the 1584 cover) reuse the same tokens, which makes type
proportionally smaller there — correct, because those formats are viewed larger.

| Class | Pixels | Use |
|---|---|---|
| `.ff-canvas--4x5` | 1080 × 1350 | LinkedIn / Instagram feed, carousel. **The default.** |
| `.ff-canvas--1x1` | 1080 × 1080 | Square post, quote card |
| `.ff-canvas--9x16` | 1080 × 1920 | Story, reel cover |
| `.ff-canvas--16x9` | 1920 × 1080 | Presentation slide, event screen |
| `.ff-canvas--cover` | 1584 × 396 | LinkedIn page / event cover |

Canvases are `overflow: hidden`. Overlong copy disappears rather than breaking
the layout — see [05 · Formats & export](05-formats-export.md) for the fit check
that catches it.

### Previewing at a smaller size

`.ff-frame` scales a canvas visually without changing a single authored value:

```html
<div class="ff-frame" style="--ff-preview: 0.35">
  <div class="ff-canvas ff-canvas--4x5"> … </div>
</div>
```

---

## Margins and the grid

There is no column grid. There is a page margin and a spacing scale, and that
is deliberate — every layout in the launch deck is a single left-aligned column
with occasional full-width or two-column blocks.

| Token | Value | Use |
|---|---|---|
| `--ff-page` | 108px | Standard left/right margin (10% of canvas width) |
| `--ff-page-tight` | 60px | Full-bleed photo slides, where type sits in a bar |

`.ff-pad` applies the page margin and makes the content a flex column, so
`.ff-spacer` pushes the footer to the bottom edge:

```html
<div class="ff-pad">
  <p class="ff-eyebrow">2025 edition</p>
  <h1 class="ff-display">We let the numbers speak</h1>
  <div class="ff-spacer"></div>
  <div class="ff-footer"> … </div>
</div>
```

---

## Spacing scale

Eight steps plus two page margins. Use the tokens; don't type arbitrary pixel
values.

| Token | px | Typical use |
|---|---|---|
| `--ff-space-1` | 4 | Hairline nudges |
| `--ff-space-2` | 8 | Eyebrow → headline |
| `--ff-space-3` | 12 | Between list rows |
| `--ff-space-4` | 16 | Grid gaps, icon gap |
| `--ff-space-5` | 24 | Card padding, default stack gap |
| `--ff-space-6` | 32 | Headline → lede |
| `--ff-space-7` | 40 | Panel padding, bar spacing |
| `--ff-space-8` | 48 | Block separation |
| `--ff-space-9` | 64 | |
| `--ff-space-10` | 80 | Major section break |
| `--ff-space-11` | 96 | |
| `--ff-space-12` | 128 | Top padding on an editorial slide |

Helpers: `.ff-stack` (and `--xs/--sm/--md/--lg/--xl`) sets the gap between
children; `.ff-u-mt-2` … `.ff-u-mt-10` set a single top margin.

---

## Radius and borders

| Token | Value | Use |
|---|---|---|
| `--ff-radius-sm` | 6px | Photographs |
| `--ff-radius-md` | 10px | Cards, list rows, panels — the system default |
| `--ff-radius-lg` | 18px | Rare |
| `--ff-radius-pill` | 999px | Buttons, arrow pills, chart tracks |

Borders are one weight: `1px solid #E8E8E8`. The only exception is the ticket
card, which uses `2px solid #0E0E0E` because it is imitating a printed pass.

---

## Layering

A photographic canvas has three layers, in this order:

```html
<div class="ff-canvas ff-canvas--4x5 ff-canvas--black">
  <div class="ff-bleed"><img src="…" alt=""></div>   <!-- z 0 -->
  <div class="ff-scrim ff-scrim--bottom"></div>      <!-- z 1 -->
  <div class="ff-pad ff-on-photo"> … </div>          <!-- z 2 -->
</div>
```

`.ff-on-photo` does two jobs: it lifts content above the scrim, and it flips the
semantic colour tokens so every type class inside reads light. See
[03 · Colour](03-color.md).
