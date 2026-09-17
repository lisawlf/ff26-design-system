# 02 · Typography

Four families, four jobs. The discipline is in the separation: each typeface
does one thing and never borrows another's role.

| Family | Role | Never |
|---|---|---|
| **Sora** | Display headlines, buttons, stat labels | Running copy |
| **Noto Serif Display** (ExtraCondensed Light) | The one editorial line under a headline | Uppercase, paragraphs |
| **Barlow** | All body copy, list descriptions, captions | Headlines |
| **JetBrains Mono** | Eyebrows, dates, venue, numbers, percentages | Sentences |

All four are SIL Open Font License 1.1 — free to embed in anything, including
commercial print.

---

## Sora — display

Uppercase, SemiBold 600, negative tracking, leading **below 1.0**. The tight
leading is what makes a three-line headline read as one block rather than three
sentences.

| Class | Size | Leading | Tracking |
|---|---|---|---|
| `.ff-display--xl` | 92px | 0.94 | −0.03em |
| `.ff-display--lg` | 66px | 0.96 | −0.025em |
| `.ff-display` | 64px | 0.96 | −0.025em |
| `.ff-display--sm` | 56px | 1.0 | −0.02em |
| `.ff-headline` | 42px | 1.04 | −0.02em |
| `.ff-title` | 29px | 1.1 | −0.01em |
| `.ff-label` | 21px | 1.2 | +0.01em |

Break lines by hand with `<br>` so the shape is deliberate:

```html
<h1 class="ff-display">
  Your favourite<br>innovation event<br>is back.
</h1>
```

Aim for two or three lines of roughly decreasing length. One long line looks
unresolved; four looks like body copy.

---

## Noto Serif Display — the lede

One line of condensed serif under the headline. It is the only warmth in the
system, which is exactly why it must stay rare.

```html
<p class="ff-lede">Our attendees leave the event changed.</p>
<p class="ff-lede">The ticket price will never be <em>this good</em> again.</p>
```

Rules: sentence case, one line (two absolutely maximum), one `<em>` at most,
never as a paragraph, never in a card.

### The width axis — the one thing that breaks

Noto Serif Display is a variable font with a `wdth` axis from 62.5 to 100. The
system pins it to **62.5** (ExtraCondensed), which is what the launch deck uses.

The axis only exists if the font request asks for it:

```
family=Noto+Serif+Display:ital,wdth,wght@0,62.5..100,200..900;1,62.5..100,200..900
```

Drop the `wdth` segment and Google Fonts silently serves the normal width. The
type still renders, so nothing looks broken — the lede just runs about 25%
longer and wraps to two lines. If a lede is wrapping when it shouldn't, check
this first. `css/fonts.css` already requests the axis correctly.

---

## Barlow — body

| Class | Size | Weight | Use |
|---|---|---|---|
| `.ff-body--lg` | 28px | Light 300 | Intro paragraph on an offer slide |
| `.ff-body--md` | 27px | Regular | Copy over photography |
| `.ff-body` | 23px | Regular | Standard paragraph |
| `.ff-body--sm` | 18px | Regular | List descriptions |
| `.ff-caption` | 16px | Regular | Notes under stats |
| `.ff-caption--xs` | 14px | Regular | Legal, credits |

Leading is 1.3 — tighter than a website, because these are read at a glance, not
at length. Three lines per paragraph is the working maximum.

---

## JetBrains Mono — the systems voice

Mono is a semantic choice here, not a decorative one. It marks information that
is *measured*: a date, a count, a percentage, an address.

```html
<p class="ff-eyebrow">What happens at #ff26</p>
<span class="ff-metabar">26.11.2026&nbsp;|&nbsp;weXelerate, Praterstrasse 1, 1020 Vienna</span>
<div class="ff-stat__value">899</div>
```

| Class | Size | Notes |
|---|---|---|
| `.ff-eyebrow` | 22px | 0.34em tracking, uppercase, auto em-dash prefix |
| `.ff-metabar` | 21px | Date/venue strip, four background variants |
| `.ff-mono--data` | 41px | The big number on a stat card |
| `.ff-mono--lg/md/sm/xs` | 31 / 27 / 21 / 16 | General mono |

The eyebrow adds its own `—`. Don't type one.

If a number sits in Sora or Barlow instead of mono, it stops reading as data.
This is the single easiest way to make a graphic look off-brand while every
colour is technically correct.

---

## Pairing: the canonical stack

```html
<p class="ff-eyebrow">2025 edition</p>
<h1 class="ff-display ff-display--sm">The room</h1>
<p class="ff-lede">40% CEOs &amp; founders.<br>This is not a conference for spectators.</p>
<p class="ff-body">Supporting detail in Barlow.</p>
```

Mono → Sora → serif → Barlow, largest contrast at the top. Almost every slide in
the launch deck is this stack with a different component underneath it.

---

## Self-hosting

The CDN import in `css/fonts.css` is the default. Switch to self-hosted files
when you need deterministic rendering — batch PNG export, print, CI, or an
offline machine.

1. Download the families from [fonts.google.com](https://fonts.google.com)
   (Sora, Barlow, JetBrains Mono, Noto Serif Display). Take the **variable**
   files for Sora and Noto Serif Display so the `wdth` axis survives.
2. Put the `.woff2` files in `assets/fonts/`.
3. Replace the `@import` in `css/fonts.css` with `@font-face` rules:

```css
@font-face {
  font-family: 'Noto Serif Display';
  src: url('../assets/fonts/NotoSerifDisplay-Variable.woff2') format('woff2-variations');
  font-weight: 200 900;
  font-stretch: 62.5% 100%;   /* required — without it the wdth axis is clamped */
  font-style: normal;
  font-display: block;
}
```

`font-display: block` rather than `swap`: a graphic rendered mid-swap exports
with the fallback font baked in.
