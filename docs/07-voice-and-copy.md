# 07 · Voice and copy

## The voice

Direct, confident, a little dry. Short sentences. Verbs over adjectives. The
brand is talking to people who run companies and are already busy — it respects
their time by getting to the point.

Every line in the launch deck follows the same instinct: say the concrete thing.

> One full day. Infinite connections.
> 200+ pre-booked 1:1 meetings · pure signal, no noise.
> This is not a conference for spectators.
> Hands-on sessions, giving you practical frameworks, not theoretical outlines.

What it never sounds like: "an unforgettable journey of innovation", "we are
thrilled to announce", "join us for an exciting day of inspiring content".

### Rules

- **Concrete beats abstract.** "40 startups · 40 live investment opportunities"
  beats "exciting startup showcase".
- **Short sentences.** Fragments are fine. "One full day." is a sentence here.
- **No hedging.** Not "we hope to welcome around 1,000 guests" — "1,000+
  innovators, founders and leaders".
- **No exclamation marks**, except in the launch register ("WE'RE BACK!").
- **The serif lede is the one warm line.** That is where a sentence is allowed
  to be a little human. Nowhere else.
- **Never invent a number.** Use the approved facts below.
- **Label 2025 figures as 2025.** They are proof of what happened, not promises
  about 2026.

### German

Same rules. Keep programme names in English — Coffee Rave, Inspiration Stage,
Deep Dive Tracks, Startup Pitching Arena, Curated Matchmaking, Afterparty. Use
the formal *Sie* for outreach, informal for social captions.

---

## Approved facts

| | |
|---|---|
| Event | Future Forward 2026, 4th edition |
| Date | 26.11.2026 (Thursday) |
| Venue | weXelerate, Praterstraße 1, 1020 Vienna |
| Building | Design Tower by Jean Nouvel · 9,000m² · weXelerate since 2017 |
| Website | www.futureforward.at |
| Contact | ecosystem@wexelerate.com |
| Hashtags | #FF26 · #FutureForward2026 · #weXelerate |
| Networking app | b2match |
| Expected 2026 | 1,000+ attendees |

### 2025 edition — actuals

899 attendees · 42 nations · 50+ speakers and experts · 40 startups pitched
live · 19 panels · 215 matchmaking sessions (53+ hrs of 1:1 networking)

Audience: 40% executives & founders · 24% management & directors ·
18% specialists & experts · 11% gov / investors / other · 7% academia & research

The golden ratio: ~31% startups · ~32% corporates · ~37% enablers

### Programme blocks

Coffee Rave · Inspiration Stage · Deep Dive Tracks · Startup Pitching Arena ·
Curated Matchmaking · Afterparty

### Topics

AI, emerging technology, cybersecurity, the future of business.

---

## Writing for the components

**Eyebrow** — 2 to 5 words, names the section. "2025 edition", "The venue &
event host", "What happens at #ff26".

**Display headline** — 2 to 6 words per line, 2 to 3 lines. Uppercase is
applied by CSS, so write it in sentence case in the HTML and let the system
shout. Break lines by hand.

**Serif lede** — one sentence, one line. Sentence case. Optionally one `<em>`.

**Body** — 2 to 3 lines. If it needs four, it needs a second slide.

**List row** — label 1 to 4 words; description one sentence, ideally under 12
words.

**Stat note** — under 8 words.

**Button** — verb first. "Get your ticket", "Register now", "See the
programme". Not "Click here", not "Learn more".

---

## Caption scaffolding

The graphic carries the hook; the caption carries the detail and the link.
Structure that works on LinkedIn:

```
[Bold hook — one line, the news.]

[Two or three short lines of context. What it is, when, for whom.]

What happens at #FF26:
→ [block]
→ [block]
→ [block]

[The ask — one line, with the link.]
GET YOUR TICKET → www.futureforward.at

#FutureForward2026 #FF26 #weXelerate
```

Worked example, from the launch post:

> **Future Forward 2026 is officially live!**
>
> The 4th edition of Austria's most impactful innovation conference is back.
>
> November 26, 2026.
> One full day.
> 1,000+ innovators, founders and leaders.
>
> New and unprecedented challenges lie ahead of us. Future Forward brings
> together Austria's most forward-thinking founders, executives and innovators
> for one full day of keynotes, deep dives and curated connections — covering
> the topics you can't afford to ignore: AI, emerging technology, cybersecurity
> and the future of business.
>
> **What happens at #FF26:**
> → Coffee Rave during registration and welcome to kick off the morning
> → Keynotes and panels on the Inspiration Stage
> → Deep Dive Workshop Tracks for practical frameworks, not theory
> → Startup Pitching Arena: 40 startups, 40 live investment opportunities
> → 200+ curated 1:1 matchmaking sessions
> → Afterparty — the deal-making continues over the DJ set
>
> **Tickets are now live at our best-ever price.**
>
> **weXelerate Members and Tenants:** Special ticket deals are available for
> you! For questions about your ticket code, please contact us via
> ecosystem@wexelerate.com.
>
> GET YOUR TICKET → www.futureforward.at
>
> #FutureForward2026 #FF26 #weXelerate

Note the arrows (`→`) as list markers and bold used sparingly for the two or
three lines that must survive a skim. Keep hashtags to three; put them last.

---

## Recurring boilerplate

**Member/tenant note** — on any ticket or offer post:

> weXelerate Members and Tenants get special ticket deals. For questions about
> your ticket code, contact ecosystem@wexelerate.com.

**Follow prompt** — on closing slides:

> Follow us on LinkedIn & Instagram and stay tuned for the next event
> announcements.

**Venue line** — the meta bar everywhere:

> 26.11.2026 | weXelerate, Praterstraße 1, 1020 Vienna

Note: the meta bar is uppercased by CSS, which turns *Praterstraße* into
*PRATERSTRASSE*. That is correct German uppercase. Write it with ß in the HTML
and let the transform handle it, or write "Praterstrasse" — both are fine.
