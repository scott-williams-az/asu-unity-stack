# ASU homepage prototype — v2.71 (developer package)

Oct. 15, 2026 (rev. 6:20 p.m.: hero = window − header − 96px peek (560–1080), 32px between hero and rankings and between header and docked rankings, rankings dock under the header, section 3 photo fixed to the window (overlay scroll effect), Make it yours text white on every image (desktop), Learn’s network wallpaper continues behind the Places video, ring sparkle = Alysia’s sparkles icon (img/ui/sparkles.svg, inlined in index.html), charter bubbles reset when scrolled away) · Enterprise Brand Strategy and Management, Digital Brand Creative

This is the reference for how the new asu.edu homepage behaves at every screen size and how it moves. Build to its behavior, not its code: it’s one hand-built HTML file with layers of overrides from many design rounds (later CSS rules win over earlier ones).

**Developer guide (read this first):** https://claude.ai/code/artifact/9abf843e-5585-4f07-8fd6-2b51ae3fe8fb — responsive states, scaling rules, motion, video rules, AI chat states, accessibility, what’s still in progress and where each effect lives in the code. Line numbers in the guide point to `index.html` here.

## Run it

```
python3 -m http.server 8000
```

Then open http://localhost:8000/ and resize the window (or use device mode in dev tools). Check sizes: 393, 768, 1280, 1728×990, 1920×1080, 2560×1440. Resizing across 900px reloads the page on purpose.

## URL switches

| Switch | Effect |
| --- | --- |
| `?rankings=below` | Rankings at the bottom of section 3, no docking (test variant) |
| `?theme=dark` | Dark treatment, review only |
| `?chat=bar` | AI ring never shrinks to the circle |
| `?voice=demo` | Scripted voice transcript |
| `?sky=a` / `?sky=b` | Alternate section 3 photo |
| `?rkclear=full` | Fully clear docked ranking cards (review only; fails contrast) |
| `?lenis=on` | Lenis smooth scrolling |

## What’s here

- `index.html` — the whole prototype: CSS (lines 26–2356), markup (2359–2776), scripts (2778–3621)
- `img/` — photos, videos, posters, icons, ranking artwork

Needs internet for Font Awesome icons (cdnjs) and the hero video (hotlinked from asu.edu).

## Not final

Charter background, hand-drawn underlines, the Your success network pattern, footer scaling, Make it yours photos and the section-by-section scaling pass are still in design. Ranking source links, Make it yours captions, degree finder results and search are placeholders. See “In progress” in the guide.

The user testing build (v2.69, https://unity-uds-staging.s3.us-west-2.amazonaws.com/asu/index.html) is an older version and is frozen while testing runs.
