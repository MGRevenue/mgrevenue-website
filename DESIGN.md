---
name: MG Revenue
description: Revenue through outbound sales and Kosovo-based talent, set as one poster-scale sentence in black and champagne gold.
colors:
  ground: "#080808"
  panel: "#0f0f10"
  panel-raised: "#121214"
  line: "#252526"
  ink: "#f4f3ef"
  muted: "#a7a6a1"
  gold: "#d4a65b"
  gold-light: "#f0c981"
  gold-deep: "#8c652e"
  seam-ink: "#dcae63"
typography:
  display:
    fontFamily: "Zodiak, Iowan Old Style, Times New Roman, Georgia, serif"
    fontSize: "clamp(1.875rem, 8.1vw, 9.5rem)"
    fontWeight: 100
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  display-stack:
    fontFamily: "Zodiak, Iowan Old Style, Times New Roman, Georgia, serif"
    fontSize: "clamp(1.875rem, 8.1vw, 9.5rem)"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  display-figure:
    fontFamily: "Zodiak, Iowan Old Style, Times New Roman, Georgia, serif"
    fontSize: "clamp(3.25rem, 6.6vw, 6.75rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum, lnum"
  headline:
    fontFamily: "Zodiak, Iowan Old Style, Times New Roman, Georgia, serif"
    fontSize: "clamp(2rem, 0.9rem + 3.4vw, 4rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.015em"
  door:
    fontFamily: "Zodiak, Iowan Old Style, Times New Roman, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.3
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.36
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
rounded:
  none: "0px"
spacing:
  margin: "clamp(20px, 3.4vw, 48px)"
  gap: "clamp(16px, 2vw, 28px)"
  section: "clamp(104px, 13vw, 208px)"
  bar: "72px"
  bar-compact: "64px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ground}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.4em"
    height: "52px"
  button-gold-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.ground}"
  button-ink:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.gold}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.4em"
    height: "52px"
  button-ink-hover:
    textColor: "{colors.gold-light}"
  bar-dark:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    height: "{spacing.bar}"
  bar-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    height: "{spacing.bar}"
  bar-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ground}"
    height: "{spacing.bar}"
  bar-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    height: "{spacing.bar}"
  sequence-card:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "560px"
  sequence-row:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    padding: "12px"
  sequence-row-won:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ground}"
    padding: "12px"
  segment-option:
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "11px 12px"
    width: "52px"
  segment-option-selected:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.gold}"
---

# Design System: MG Revenue

## Overview

**Creative North Star: "The Gold Field and the Black Field"**

MG Revenue is set as a sequence of chapters, each one a single flat field of colour running the full width of the screen: near-black, a slightly lifted panel black, champagne gold, and finally warm off-white. Inside those fields, type does the work. A hairline Zodiak serif carries the large statements at poster scale and Hanken Grotesk carries everything that has to be read. The page opens with a black field above a gold field. The headline crosses the seam between them and changes ink as it goes. A credited photograph of Prishtina sits inside the sentence where a word would be.

The density is low and the scale contrast is high. Big display lines, generous section padding and a 12-column grid that places blocks off-centre, never as a stack of centred cards. Depth comes from changing fields and from tone steps between near-blacks. The system has no shadows, gradients, glows or rounded corners. Gold is a material used in whole fields and solid blocks, not as a thin accent. The photographs all share one warm monochrome treatment, so Prishtina reads as one place in one light.

The direction contract rejects the dark-agency template: glowing orbs, icon cards and a centred hero.

**Key Characteristics:**
- One flat, full-bleed field per chapter; the fixed bar takes the tone of the chapter beneath it.
- Owner-fixed palette of near-blacks, warm ink and three golds; no other hues.
- Zodiak hairline capitals for the hero only; Zodiak light for headings and figures; Hanken Grotesk for reading text.
- Square corners, flat fills, no shadows at rest.
- Warm-monochrome, credited photographs of Prishtina, never passed off as the company's own office or team.

## Colors

The palette was set by the owner and is fixed: a near-black ground, warm off-white ink, and champagne gold in three values.

### Primary
- **Champagne Gold** (gold): the brand field. It fills the lower half of the hero and the whole partner chapter, and it's also the main action button, the "meeting booked" row in the sequence card, the square bullets on the sales channels, the last process heading and the focus outline on dark fields. On gold, all text and controls are ground black.
- **Light Gold** (gold-light): hover only. The gold button lightens to it, and the ink button's text shifts to it.
- **Deep Gold** (gold-deep): in the build it appears only as the scrollbar thumb. The direction contract planned it as ink on gold. The build uses ground black there instead, and the build wins.

### Neutral
- **Ground Black** (ground): the page, the dark chapters, the dark bar, the menu sheet, and every piece of ink or control set on gold or off-white.
- **Panel Black** (panel): the outsourcing chapter field, the bar over that chapter, and the rows inside the sequence card.
- **Raised Panel** (panel-raised): the sequence card body and the empty headline photo slot before the video loads. It's one step above panel, so rows separated by 2px gaps show as tone, not as lines.
- **Line** (line): declared for interface fragments marked `data-ui` only. The current build draws no line with it, because the sequence card separates rows with 2px gaps of tone.
- **Warm Ink** (ink): text on dark fields, and the field of the closing chapter, the light bar and the closing wordmark's ground.
- **Ash** (muted): secondary text on dark fields. It covers the quieter sales lines ("Calls. Emails. LinkedIn."), captions, the sequence card's days and statuses, the role departments and focus areas, and the second about paragraph.
- **Seam Ink** (seam-ink): not a visible colour. It's the operand the hero headline paints with under `mix-blend-mode: difference`, chosen so it renders as exactly Champagne Gold over Ground Black and exactly Ground Black over Champagne Gold. Never use it as a fill anywhere else.

### Named Rules
**The Fixed Palette Rule.** The nine palette values are the owner's. Don't add hues, derive tints for new surfaces, or nudge a value for contrast. If something fails contrast, change which palette value goes on which field.

**The Chapter Field Rule.** Each section is one flat, full-bleed field (ground, panel, gold or ink), and the fixed bar takes the tone of the chapter under its bottom edge. On gold and ink fields, the bar's logo turns black and its button becomes the ink button. The colour changes from chapter to chapter, never inside one.

**The Gold Is a Field Rule.** Gold appears as whole fields and solid blocks: the hero's lower half, the partner chapter, a button, a highlighted row, a square bullet. Never as glows, gradients, outlines around cards or decorative strokes.

## Typography

**Display Font:** Zodiak (Fontshare, weights 100 / 300 / 400), with Iowan Old Style, Times New Roman, Georgia
**Body Font:** Hanken Grotesk (Google Fonts, weights 400 / 500 / 600), with system sans

**Character:** A sharp, high-contrast serif drawn at hairline weight, paired with a plain, open grotesk. The serif makes the statements and the grotesk explains them.

### Hierarchy
- **Display** (Zodiak 100 at 1200px and wider, 300 below; up to 9.5rem; 0.95; uppercase): the hero headline only. It straddles the black/gold seam and pulls into the gold field by 0.62em. On phones the step becomes clamp(1.75rem, 9.7vw, 3.5rem), and the photo slot breaks onto its own full-width line.
- **Display stack** (Zodiak 300, same step, 0.9, sentence case): the sales chapter's stacked words ("Calls. / Emails. / LinkedIn. / Meetings."), in Ash with the final word in Warm Ink. On phones, clamp(3rem, 15vw, 5.5rem).
- **Display figure** (Zodiak 300, clamp(3.25rem, 6.6vw, 6.75rem), tabular lining numerals): the partner ledger figures (10%, monthly, yearly), set right against a Hanken caption. On phones, 15vw.
- **Closing wordmark** (Zodiak 300, uppercase, line-height 0.78): "MG REVENUE" sized so it exactly fills the content width (container minus margins, divided by 6.95) and crops at the foot of the closing chapter.
- **Headline** (Zodiak 300, clamp(2rem, 0.9rem + 3.4vw, 4rem), 1, -0.015em, balanced): chapter headings and process steps. A second line may switch to Zodiak 400 for emphasis, as in the partner heading. On screens under 390px the step becomes 8.2vw so headings hold to two lines.
- **Door** (Zodiak 400, lead step, 1.3): the hero's three entry links on gold.
- **Lead** (Hanken 400, clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem), about 1.34 to 1.38): opening paragraphs of each chapter, about 30 to 36ch wide.
- **Body** (Hanken 400, clamp(1.0625rem, 1rem + 0.3vw, 1.25rem), 1.55): running text. Paragraphs cap at about 33 to 36em. Inside interface fragments, tables and lists, text sits at a fixed 1rem.
- **Label** (Hanken 400, 0.875rem): captions, the fact list, legal text, the sequence card's tags.
- **Button / nav** (Hanken 600 / 500, 1rem): controls and bar links. Weight 600 also marks emphasis in running text.

### Named Rules
**The Hairline Capital Rule.** Uppercase belongs to two places only: the hero headline and the closing wordmark. Everything else is sentence case. The weight-100 cut is for the hero alone, at 1200px and wider; below that the hero steps up to 300 so the strokes survive.

**The Two Voices Rule.** Zodiak makes statements: headings, figures, entry links, the wordmark, the phone menu links. Hanken explains: everything else. Never set a paragraph in Zodiak or a heading in Hanken. The one exception is the small closing-column heading "Bringing us a client?", which is set as body text at weight 500.

**The Difference Ink Rule.** The hero headline is painted in Seam Ink with `mix-blend-mode: difference` on each word span, so one line of type reads gold on black and black on gold. For this to work, the gold block must stay non-positioned and free of `transform`, `opacity`, `isolation` and `filter`. Any of those creates a stacking context and breaks the blend. The gold field's rise on load is an animated inset `box-shadow` for exactly this reason.

## Layout

A full-width container capped at 1760px, with side margins of clamp(20px, 3.4vw, 48px) and a 12-column grid with gaps of clamp(16px, 2vw, 28px). Chapters take section padding of clamp(104px, 13vw, 208px) top and bottom. The fixed bar is 72px tall, or 64px at 860px and below, and anchors scroll to it.

Compositions are asymmetric and off-centre:
- The sales word stack takes columns 1 to 7, with the sequence card pushed against the right edge.
- The outsourcing intro and photograph sit left, with the roles table on columns 8 to 12.
- Process steps start one column pair further right each time, a staircase from column 1 to column 7. On phones the indent becomes 0, 6, 12 and 18vw.
- The about chapter splits into a narrow fact list, a text column and a square photo at the far right, then a full-bleed 21:9 photograph.
- The closing chapter fills at least the viewport, with the wordmark cropped at its foot.

Breakpoints: 1280px (the partner copy and estimator stack), 1200px (hero weight switches to 100 above it), 1100px (tablet: blocks go full width, the sales card moves under the stack, the photo and intro sit side by side), 860px (bar links give way to a "Menu" text button and a full-screen sheet), 720px (phone: single column, re-sized display steps, the roles table becomes a two-column list), 389px (heading step scales with the screen).

**The Off-Centre Rule.** Never centre a chapter's composition. Every block is placed on the 12-column grid against an edge, offset from the others.

## Elevation & Depth

The system is flat. There are no shadows at rest and no blur or glass. Depth comes from field changes between chapters and from three near-black tones (ground, then panel, then raised panel) in that order of lift. The raised panel holds rows of the panel tone, separated by 2px gaps.

**The Flat Field Rule.** Surfaces are flat fills at all times. The only `box-shadow` in the build is the hero's load-only curtain: an inset band of ground black that retracts upward as the gold field rises. It is never present at rest, and it's not a shadow vocabulary.

## Shapes

Every corner is square (0px): buttons, the sequence card and its rows, the segmented control, the range thumb, photographs and the photo slot in the headline. Bullets are solid gold squares 0.42em across. The arrow icon is a square-capped inline SVG stroke.

**The No-Rule Rule.** Never separate content with hairlines, borders or divider rules. Separation comes from space, from a field change or from a tone step. The Line colour is reserved for interface fragments marked `data-ui`. These strokes are part of the world and stay allowed: 1px link underlines; the 1.5px ink border of the segmented control; 2px ink dashes at 55% opacity linking the partner flow steps; the 4px range track in ground black at 28% opacity.

## Components

### Buttons
Solid, square and weighty: a block of colour with a 600-weight label.
- **Shape:** square (0px), at least 52px tall with 1.4em side padding, or 44px tall in the bar. An optional trailing arrow sits 0.65em from the label.
- **Gold:** gold fill, ground-black label. Used on dark fields and in the bar over dark fields.
- **Ink:** ground-black fill, gold label. Used on gold and ink fields, and the bar swaps to it over those chapters.
- **Hover (fine pointers only):** gold fills lighten to Light Gold. On the ink button the label turns Light Gold. Colour changes take 200ms.
- **Press:** scales to 0.97 over 160ms on the ease-out curve.
- **Focus:** a 2px outline offset 3px, in gold on dark fields and in ground black on gold and ink fields.

### Text links and doors
- **Link:** an inline label with a 1px underline offset 0.28em and a trailing arrow. On hover the underline drops to 0.4em and the arrow moves 3px right.
- **Door:** a Zodiak 400 entry link on gold with an arrow. Its underline is invisible at rest and appears on hover while the arrow moves 4px. It presses to 0.985.

### Navigation
- **Bar:** fixed, full width, and coloured by the chapter beneath it (dark, panel, gold, light), with a 300ms colour transition. Logo at left, at bar height minus 22px, rendered black on gold and light fields. Four Hanken 500 links and a button at right. Link underlines are transparent at rest; on hover they appear and rise from 0.5em to 0.35em offset.
- **Phone (860px and below):** links collapse to an underlined "Menu" text button. It opens a full-screen ground-black sheet with Zodiak 300 links at clamp(2.5rem, 11vw, 4rem), a full-width gold email button and a partner link. The sheet enters by fading and sliding 14px down. It closes over 180ms, closes immediately under reduced motion, and returns focus to Menu.

### Interface fragment: the sequence card
An illustrative outbound sequence marked `data-ui`. The body is Raised Panel, at most 560px wide. Rows are Panel with 2px gaps and a three-part grid: day, channel, status. Days and statuses are Ash with tabular figures. The won row is a solid gold block with ground-black text. The card is labelled "Example" and carries a caption saying it is illustrative. On reveal it settles from a -3deg tilt.

### Partner estimator
On the gold field: a lead-size question with a live output, a square-thumb range slider (26px ground-black thumb that scales to 1.12 while pressed), and a three-option segmented currency control. Options are square, bordered in ground black, and filled ground black with gold text when selected. Below it, a ledger of Zodiak display figures aligned right on a subgrid, each followed by a Hanken caption. The ledger is announced politely to screen readers.

### Roles table
A borderless table on the panel field: department in Ash, role in Ink at weight 500, focus in Ash and right-aligned. Groups are separated by 44px of space, not rules. On phones each row becomes a two-column grid with the department shown once above its group.

### Imagery
Credited Wikimedia Commons photographs and one drone loop of Prishtina, all in one warm monochrome treatment: grayscale with a sigmoidal contrast of 3 at 50%, mapped from #0b0a08 to #f4efe4. These are built by `.taste-skill/build-assets.sh`. Crops are fixed: 21:9 band, 3:2 landscape, 1:1 squares, and a 5:2 loop inside the headline slot. Every image has a caption naming the place, and the closing chapter lists source, author and licence.

**The Honest Place Rule.** Photographs show Prishtina as a place. Never caption, crop or position one so it reads as MG Revenue's office, team, clients or work. Every new image goes through the same treatment script and is credited.

### Motion
Ease-out (cubic-bezier(.23,1,.32,1)) handles state changes. Ease-expo (cubic-bezier(.16,1,.3,1)) handles entrances. Ease-in-out (cubic-bezier(.77,0,.175,1)) handles wipes. The drawer curve (cubic-bezier(.32,.72,0,1)) handles the sheet.

On load:
- The gold field rises over 1300ms, after 150ms.
- The headline slot wipes open over 900ms, after 450ms.
- Hero text and links fade up 14px over 700ms, staggered from 650ms to 960ms.

On scroll, sections enter once: they fade over 700ms and rise 24px over 900ms, staggered 80ms per item. The full-bleed photograph wipes down over 1100ms while it settles from 1.1x scale over 1600ms.

Under reduced motion, all entrance and load animation is removed and content is static and visible. The headline loop holds on its poster frame and pauses whenever it leaves the screen. Smooth scrolling is off, and the menu sheet opens and closes without transition. Content is visible without JavaScript.

## Do's and Don'ts

### Do:
- **Do** give every new section exactly one full-bleed field from the palette and a `data-tone` value (dark, panel, gold or light) so the bar follows it.
- **Do** use gold as a whole field or a solid block, and set all ink and controls on gold in ground black.
- **Do** set statements in Zodiak 300 at the headline step and reading text in Hanken at the body or lead step, sentence case.
- **Do** keep every corner square (0px) and every fill flat.
- **Do** separate content with space, a field change or a tone step between ground, panel and raised panel.
- **Do** give controls a press response (scale 0.97 over 160ms) and restrict hover effects to fine pointers.
- **Do** run new photographs through the warm monochrome treatment (#0b0a08 to #f4efe4), caption the place and credit the source.
- **Do** keep the hero's gold block free of position, transform, opacity, isolation and filter.

### Don't:
- **Don't** add, tint or adjust any colour outside the owner's palette.
- **Don't** use glowing orbs, icon cards or a centred hero.
- **Don't** add eyebrows or kickers (small labels above headings), and don't number sections or steps. The process reads in order by its staircase indent.
- **Don't** draw divider rules or card borders outside interface fragments marked `data-ui`.
- **Don't** add shadows, gradients, blur or rounded corners.
- **Don't** set anything in capitals except the hero headline and the closing wordmark, and don't use Zodiak weight 100 anywhere but the hero at 1200px and wider.
- **Don't** present a photograph as MG Revenue's own office, team, clients or work, and don't invent clients, statistics, logos or testimonials to fill a layout.
