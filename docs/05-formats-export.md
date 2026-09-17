# 05 · Formats, checking and export

## Formats

| Canvas class | Pixels | Platform |
|---|---|---|
| `--4x5` | 1080 × 1350 | LinkedIn feed, Instagram feed, carousel pages |
| `--1x1` | 1080 × 1080 | Instagram grid, LinkedIn single image |
| `--9x16` | 1080 × 1920 | Instagram / LinkedIn story, reel cover |
| `--16x9` | 1920 × 1080 | Presentation slide, event screen, YouTube |
| `--cover` | 1584 × 396 | LinkedIn page and event cover |

4:5 is the default. It takes the most vertical space in a LinkedIn feed and is
the native carousel page size.

### Safe areas

**Story (9:16).** Platform UI eats the top ~250px and bottom ~320px. The story
template already pads for this. Anything you add outside that band will sit
under the avatar row or the reply bar.

**LinkedIn cover (1584 × 396).** Mobile crops the sides hard and the page
avatar overlays the lower left. Keep type in the middle band and off the first
~400px. The template does this.

**Carousel.** LinkedIn renders the first slide as the feed thumbnail — it has to
work alone, with no caption context.

---

## Building a carousel

Four to ten 4:5 pages. The working sequence:

1. `01-cover-photo` — hook, logo, date. Works as a standalone thumbnail.
2. `02-statement` — what this is.
3. Content — `03-agenda-list`, `04-before-after`, `05-stats`, `06-bar-chart`,
   `07-photo-steps`, `08-dark-photo-info`, in whatever order tells the story.
4. `09-ticket-offer` or `10-cta-closing` — the ask.
5. `11-photo-closing` — optional atmosphere + follow prompt.

Conventions: `.ff-next` bottom-right on every page but the last. The meta bar
on the first and last. One acid element **per page** (not per carousel) — but
if three pages in a row all lean on an acid highlight, vary it.

Name exports in sequence so the upload order is unambiguous:
`ff26-launch-01.png`, `ff26-launch-02.png`, …

---

## Check before you export

Canvases are `overflow: hidden`. Copy that is too long does not error and does
not reflow — it disappears past the bottom edge, and you will not notice in a
small preview.

```bash
./tools/serve.sh &
./tools/check.sh
```

```
OK   05-stats.html              1080×1350   fits
BAD  06-bar-chart.html          1080×1350   overflows bottom by 88px  → ff-footer
FAIL — 1 of 16 templates overflow.
```

Exits non-zero on failure, so it drops straight into CI or a pre-commit hook.

When something overflows, fix it in this order:

1. **Cut words.** Almost always the right answer. This system is built for
   short copy and long copy is the actual defect.
2. **Drop a row.** Six list rows, six stat tiles, five comparison rows are
   ceilings, not targets.
3. **Reduce the padding** on that template's `.ff-pad`.
4. **Step the display class down** one size (`--lg` → `--sm`).

Never reduce a display size below its token value with an inline override, and
never shrink leading to claw back space. If the copy will not fit at
`--display--sm`, it belongs on two slides.

`tools/check.html` is the same check in a browser, with per-element detail:
<http://localhost:8777/tools/check.html>

---

## Export

```bash
./tools/export.sh                      # everything → export/
./tools/export.sh 12-speaker-card      # one template
FF26_SCALE=2 ./tools/export.sh         # @2x, for print or large screens
```

PNG at exact canvas pixels. `export/` is gitignored — it is build output.

Defaults are right for social: PNG keeps type edges crisp, and at 1080px wide
the files are small enough that neither LinkedIn nor Instagram recompresses
them badly. Export JPEG only if a platform rejects the file size.

### Manual export

Open the template at <http://localhost:8777/templates/…>, set the browser
window to the exact canvas pixels, and screenshot. The headless script exists
because doing that sixteen times by hand invites off-by-one crops.

### From Figma or Canva

This system is HTML-first on purpose — the tokens and templates are the
artefact. If a graphic has to be rebuilt in a design tool, take the values from
`tokens/tokens.json` rather than eyedropping a PNG, and check the result
against the corresponding template.

---

## Troubleshooting

| Symptom | Cause |
|---|---|
| Page renders unstyled | Opened the file directly. Templates need a server — `./tools/serve.sh` |
| Serif lede wraps to two lines | The `wdth` axis is missing from the font request. See [02 · Typography](02-typography.md) |
| White text invisible on a photo | Inline `color` instead of `.ff-on-photo`. See [03 · Colour](03-color.md) |
| Text missing at the bottom | Overflow. Run `./tools/check.sh` |
| Fonts look wrong in the export only | Font swap raced the screenshot. Raise `--virtual-time-budget`, or self-host with `font-display: block` |
| Export is blurry | `FF26_SCALE` left at 2 while the canvas was already large, then downscaled somewhere |
