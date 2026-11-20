# 06 · Logo and imagery

## The Future Forward logo

Two-line wordmark plus the double-chevron mark. The chevrons point forward —
that is the whole idea, and it is why the mark is never mirrored or rotated.

| File | Use |
|---|---|
| `assets/logo/ff-logo-black.png` | Light backgrounds |
| `assets/logo/ff-logo-white.png` | Dark backgrounds and photography |
| `assets/logo/ff-mark-black.png` | Chevrons alone, light backgrounds |
| `assets/logo/ff-mark-white.png` | Chevrons alone, dark backgrounds |

All four are transparent PNGs.

### Sizes

| Class | Height | Use |
|---|---|---|
| `.ff-logo--sm` | 42px | Carousel footer |
| `.ff-logo` | 58px | Default |
| `.ff-logo--lg` | 104px | Statement slide header, story |
| `.ff-logo--hero` | 190px | Cover slide, centred over a photograph |

### Clear space and minimum size

Keep clear space of at least the height of the word "future" on all four sides.
Nothing — type, photo edge, another logo — enters that zone.

Minimum reproduction: 120px wide on screen, 25mm in print. Below that use the
chevron mark alone.

### Never

- Recolour it. Black or white, nothing else. Not acid, not grey, not gradient.
- Stretch or condense it. Scale proportionally.
- Add effects — shadow, outline, glow, bevel.
- Box it, or set it on a coloured plate.
- Rotate, mirror or flip the chevrons.
- Rebuild the wordmark in Sora. The logo is drawn type, not a font setting.
- Place it on a busy part of a photograph. Move it, or scrim underneath.

---

## The weXelerate lockup

Future Forward is hosted by weXelerate, and the relationship is stated
explicitly rather than implied:

```html
<div class="ff-lockup">
  <span class="ff-lockup__kicker">the yearly<br>flagship event by</span>
  <img class="ff-lockup__logo" src="../assets/logo/wexelerate-white.png" alt="weXelerate">
</div>
```

Kicker in mono, small, quiet. The weXelerate mark sits below it at ~26px. Use
it on the cover slide and on host/venue slides — not on every page.

`assets/logo/wexelerate-black.png` and `-white.png` are the available variants.

---

## Partner logos

`assets/partners/` has every Future Forward 2026 partner, numbered in the
official order:

- `corporate/` 01 Genesys · 02 FFG · 03 GIN · 04 wonderful.ai
- `event/` 01 Vienna Business Agency · 02 UNIQA Sustainable · 03 Embassy of
  Latvia · 04 LIAA · 05 UNIDO · 06 AIM Global · 07 Raiffeisen Bank International ·
  08 Elevator Ventures · 09 Bluecode · 10 Loom Ventures · 11 Nobile ·
  12 Energiespeicher Österreich · 13 ACTIU
- `supporting/` 01 The Energy Bridge · 02 AI Austria · 03 Die Presse ·
  04 Brutkasten · 05 b2match · 06 LUME · 07 Ottakringer · 08 Vöslauer ·
  09 Bacardi · 10 SO/ Vienna · 11 NEOH · 12 Lemonaid · 13 Soulxcoffee ·
  14 NUCAO · 15 Hitschies · 16 Leuchtbuchstaben.at · 17 vrei · 18 Game City

`partners.json` has the same list in machine-readable form. Rules:

- Tier order is fixed: corporate, event, supporting. Logo order within a tier is
  the file number.
- Always on a white panel (`.ff-partners`). Files marked `"opaque": true` have a
  white background baked in.
- Don't recolour, crop, outline or stretch partner logos. The only light
  version is `corporate/01-genesys_white-on-dark.svg`.
- Template: `templates/17-partner-wall.html`.

---

## Photography

The library in `assets/photos/` is real Future Forward event photography. Use
it. Stock photography of generic "business people" is off-brand in a way no
amount of correct typography will rescue.

| File | Subject |
|---|---|
| `hero-moon.jpg` | Astronaut on the moon, Earth behind — the campaign hero |
| `astronaut-office.jpg` | Helmet in the weXelerate office — surreal/workplace |
| `crowd.jpg` | Full room, audience |
| `stage.jpg` | Main stage, speaker and seated audience |
| `gallery-01…05.jpg` | Event floor, panels, networking, evening |
| `speaker-sample.jpg` | Square portrait — replace per speaker |

### What the photography is doing

Two registers, used deliberately:

**Documentary** — real rooms, real attendees, available light. This carries the
proof: the event happened, these people were there.

**Surreal** — the astronaut. A figure out of context, navigating somewhere
unfamiliar. It is the visual argument for "the future is unknown, learn to
navigate it". Use it for launch and campaign moments, not for recaps.

Don't mix registers on a single slide.

### Handling

- Full bleed (`.ff-bleed`) or a cropped block (`.ff-figure`). Never a
  free-floating image with a drop shadow.
- Corner radius `--ff-radius-sm` (6px) on figures. Full-bleed images stay square.
- Never place type over a face.
- Scrim before white text. See [03 · Colour](03-color.md).
- No filters, duotones or colour grading. The photography is documentary; let
  it be.
- Black and white is acceptable for speaker portraits (see the speaker
  template) and nowhere else.

### Adding photos

Resize the long edge to ~1600px and save JPEG quality 80–84, progressive. That
keeps the repo light while staying sharp at 1080 canvas width. Portrait crops
work better than landscape on 4:5 and 9:16 canvases — an upscaled landscape
photo stretched to fill a tall canvas is the most common quality problem.

---

## Icons

Monoline, neutral, currentColor. The list-row icon slot takes a character or a
small inline `<svg>`:

```html
<div class="ff-list-row__icon">→</div>
<div class="ff-list-row__icon"><svg viewBox="0 0 24 24">…</svg></div>
```

SVGs inherit `stroke: currentColor; fill: none; stroke-width: 1.8`. No filled
icon sets, no multicolour, no illustrated style. If an icon needs more than one
weight of line to read, the concept is too complicated for this slot.
