# 03 · Colour

One accent, one ink, a short greyscale. That is the whole palette.

---

## The accent

**Acid `#DCFF00`** is the brand. It appears once per canvas and nowhere else.

Valid uses — pick exactly one per graphic:

- A text highlight behind a headline (`.ff-mark`)
- The CTA button fill (`.ff-btn`)
- The "after" column header in a comparison (`.ff-compare__head--after`)
- One bar in a chart — the one the headline is about (`.ff-bar--lead`)
- One stat card out of six (`.ff-stat--accent`)
- The dot on an eyebrow (`.ff-eyebrow--dot`)

If two things are acid, neither is emphasis. This is the rule people break
first and it is the one that most visibly breaks the look.

Never: a page background, body copy, the logo, large fills, or white text on
acid — `#FFFFFF` on `#DCFF00` has a contrast ratio of **1.14:1** and is
effectively invisible. Acid always carries black text (18.35:1).

`--ff-acid-dim` `#C4E300` exists only for hover/pressed states on the web. It
has no use in static graphics.

---

## Ink and greys

| Token | Hex | On `#FAFAFA` | Use |
|---|---|---|---|
| `--ff-ink-pure` | `#000000` | 20.1:1 | Display headlines, black bars |
| `--ff-ink` | `#0E0E0E` | 18.5:1 | Body, titles, default text |
| `--ff-ink-2` | `#333333` | 12.1:1 | Secondary copy, chart labels |
| `--ff-ink-3` | `#555555` | 7.1:1 | Captions, notes under stats |
| `--ff-ink-4` | `#888888` | 3.4:1 | Eyebrows, list descriptions, "before" column |

`--ff-ink-4` at 3.4:1 clears WCAG AA for **large text only** (18.66px bold or
24px regular). Every place the system uses it is above that threshold. Don't
drop it into small body copy.

## Surfaces

| Token | Hex | Use |
|---|---|---|
| `--ff-paper` | `#FAFAFA` | Default canvas. Off-white, **never** pure white |
| `--ff-surface` | `#F7F7F7` | List rows, stat cards, panels |
| `--ff-surface-2` | `#F0F0F0` | Chart tracks, kicker chips |
| `--ff-hairline` | `#E8E8E8` | All 1px borders |
| `--ff-hairline-strong` | `#D8D8D8` | Dashed rules, emphasised dividers |
| `--ff-white` | `#FFFFFF` | Cards on photographs, knocked-out bars |

The off-white page is load-bearing. Pure white reads as "unfinished web page";
`#FAFAFA` reads as paper, and it makes the white cards on photo slides register
as actual objects.

---

## Navy (the earth posts)

The dark #FF26 posts sit on earth-from-the-moon photography and fade from black
space into an ink navy. These tones are sampled from the published posts.

| Token | Hex | Use |
|---|---|---|
| `--ff-navy-ink` | `#08111F` | Base of `.ff-canvas--navy` |
| `--ff-navy` | `#0F1D33` | Panels and outlined boxes on navy |
| `--ff-navy-glow` | `#263961` | Horizon glow at the bottom of the canvas |
| `--ff-grad-earth` | `#000` → `#08111F` → `#263961`, top to bottom | The canvas background |

Rules: navy is only ever a background. Text on navy is white or white at
72–88 %; the accent on navy is still acid, still once. The earth gradient is the
only gradient in the system, and only as a canvas background. Over an earth
photo, `.ff-scrim--earth` fades the lower part into navy so cards and copy can
sit below the horizon.

Photos for this look: `assets/photos/earth-moon.jpg`,
`assets/photos/astronaut-earth.jpg`, `assets/photos/hero-moon.jpg`.

---

## Context tokens — how colour actually gets applied

Components never name a palette colour for text. They use four semantic
aliases:

| Alias | Light context | Dark context |
|---|---|---|
| `--ff-fg-strong` | `#000000` | `#FFFFFF` |
| `--ff-fg` | `#0E0E0E` | `#FFFFFF` |
| `--ff-fg-soft` | `#555555` | `rgba(255,255,255,.88)` |
| `--ff-fg-muted` | `#888888` | `rgba(255,255,255,.72)` |

Switching the context flips all four at once:

```html
<div class="ff-pad ff-on-photo">…</div>          <!-- over a photograph -->
<div class="ff-canvas ff-canvas--dark">…</div>   <!-- dark canvas -->
<div class="ff-dark">…</div>                     <!-- any other subtree -->
```

### Why you must not use inline `color`

`.ff-body { color: var(--ff-fg) }` has class specificity. An inline
`style="color:#fff"` on a **parent** loses to it, because the child's class rule
wins over inherited colour. The text silently renders dark on a dark scrim.

```html
<!-- wrong: .ff-body resolves to ink and disappears -->
<div style="color:#fff">
  <p class="ff-body">Get ready today</p>
</div>

<!-- right -->
<div class="ff-on-photo">
  <p class="ff-body">Get ready today</p>
</div>
```

### Light islands

A white card on a dark canvas needs the aliases flipped *back*. These
components do it themselves: `.ff-card`, `.ff-stat`, `.ff-fact`, `.ff-panel`,
`.ff-ticket`, `.ff-list-row`, `.ff-sticker`, `.ff-compare`.

For any other light box you build on a dark canvas, add `.ff-light`:

```html
<div class="ff-light" style="background: var(--ff-white); padding: 32px">
  <p class="ff-body">Reads dark, as it should.</p>
</div>
```

---

## Colour over photography

White text goes on a photograph only after one of these:

| Class | Gradient | Use |
|---|---|---|
| `.ff-scrim` | flat 38% black | Light wash |
| `.ff-scrim--strong` | flat 58% black | A full paragraph over a busy image |
| `.ff-scrim--bottom` | 86% → 0 upward | Type along the bottom — the common case |
| `.ff-scrim--top` | 78% → 0 downward | Logo or eyebrow at the top |
| `.ff-scrim--both` | dark top and bottom | Logo up top, headline at the bottom |

The gradients are deliberately heavy — sized for a bright frame (the moon
surface, a daylight window), so the same class works on any photo in the
library without hand-tuning.

The alternative to a scrim is a knocked-out bar, which is the launch deck's own
signature: `.ff-mark-ink` (black bar, white text) on bright photos,
`.ff-mark-white` (white bar, black text) on dark photos. Wrap the lines in
`.ff-mark-lines` so each line gets its own shrink-to-fit bar.

Marks pin both halves of their colour pair from the raw palette, so they read
correctly in any context — a white bar over a photo stays black-on-white.

---

## Print

The palette is built for screen. For print, convert acid to a spot or a rich
build and proof it — `#DCFF00` is outside CMYK gamut and will reproduce as a
duller yellow-green in four colour. Pantone **389 C** is the closest common
match; confirm with your printer before committing a run.
