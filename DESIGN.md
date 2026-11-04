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
    lineHeight: 0.92
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
  logo: "80px"
  logo-compact: "60px"
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
    backgroundColor: "{colors.panel-raised}"
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
  bar-logo:
    height: "{spacing.logo}"
  bar-logo-compact:
    height: "{spacing.logo-compact}"
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
  stepper-button:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.gold}"
    rounded: "{rounded.none}"
    size: "44px"
  stepper-button-hover:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.gold-light}"
  line-block:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.none}"
    height: "clamp(56px, 6vw, 96px)"
  line-block-pale:
    backgroundColor: "rgba(8, 8, 8, 0.13)"
    rounded: "{rounded.none}"
    height: "clamp(56px, 6vw, 96px)"
---

# Design System: MG Revenue

## Overview

**Creative North Star: "The Gold Field and the Black Field"**

MG Revenue is set as a sequence of chapters, each one a single flat field of colour running the full width of the screen: near-black, a slightly lifted panel black, champagne gold, and finally warm off-white. Inside those fields, type does the work. A hairline Zodiak serif carries the large statements at poster scale and Hanken Grotesk carries everything that has to be read. The page opens with a black field above a gold field. The headline crosses the seam between them and changes ink as it goes. A short loop of hands typing sits inside the sentence where a word would be.

The density is low and the scale contrast is high. Big display lines, generous section padding and a 12-column grid that places blocks off-centre, never as a stack of centred cards. Depth comes from changing fields and from tone steps between near-blacks. The system has no shadows, gradients, glows or rounded corners. Gold is a material used in whole fields and solid blocks, not as a thin accent; on the gold field, figures are counted out in solid blocks of ground black. The photographs are credited open-licence pictures of people at work, all in one warm colour grade that keeps warm hues and quiets cool ones, so pictures from different sources read as one set in one light.

The direction contract rejects the dark-agency template: glowing orbs, icon cards and a centred hero.

**Key Characteristics:**
- One flat, full-bleed field per chapter; the fixed bar takes the tone of the chapter beneath it.
- Owner-fixed palette of near-blacks, warm ink and three golds; no other hues in the interface (photographs keep their own graded colour).
- Zodiak hairline capitals for the hero only; Zodiak light for headings and figures; Hanken Grotesk for reading text.
- Square corners, flat fills, no shadows at rest. Quantities are shown as solid square blocks separated by gaps, not as charts.
- Warm-graded, credited photographs of people at work, never passed off as the company's own office, team or clients.

## Colors

The palette was set by the owner and is fixed: a near-black ground, warm off-white ink, and champagne gold in three values.

### Primary
- **Champagne Gold** (gold): the brand field. It fills the lower half of the hero and the whole partner chapter, and it's also the main action button, the "meeting booked" row in the sequence card, the square bullets on the sales channels, the last process heading, the label of the ink button and stepper buttons, and the focus outline on dark fields. On gold, all text and controls are ground black, and the gaps between the blocks of the $10,000 line are the gold field showing through.
- **Light Gold** (gold-light): hover only. The gold button lightens to it, and the labels of the ink button and stepper buttons shift to it.
- **Deep Gold** (gold-deep): in the build it appears only as the scrollbar thumb. The direction contract planned it as ink on gold. The build uses ground black there instead, and the build wins.

### Neutral
- **Ground Black** (ground): the page, the dark chapters, the dark bar, the menu sheet, and every piece of ink or control set on gold or off-white, including the solid client blocks of the $10,000 line.
- **Panel Black** (panel): the outsourcing chapter field, the bar over that chapter, the rows inside the sequence card, and the ground behind the full-bleed photograph before it loads.
- **Raised Panel** (panel-raised): the sequence card body, the empty headline slot before the loop loads, and the hover fill of ink buttons and stepper buttons. It's one step above panel, so rows separated by 2px gaps show as tone, not as lines.
- **Line** (line): declared for interface fragments marked `data-ui` only. The current build draws no line with it, because the sequence card separates rows with 2px gaps of tone.
- **Warm Ink** (ink): text on dark fields, and the field of the closing chapter, the light bar and the closing wordmark's ground.
- **Ash** (muted): secondary text on dark fields. It covers the quieter sales lines ("Calls. Emails. LinkedIn."), captions, the sequence card's days and statuses, the role departments and focus areas, the process step text and the second about paragraph.
- **Seam Ink** (seam-ink): not a visible colour. It's the operand the hero headline paints with under `mix-blend-mode: difference`, chosen so it renders as exactly Champagne Gold over Ground Black and exactly Ground Black over Champagne Gold. Never use it as a fill anywhere else.

### Named Rules
**The Fixed Palette Rule.** The ten values above are the whole palette. Don't add hues, derive tints for new surfaces, or nudge a value for contrast. If something fails contrast, change which palette value goes on which field. The one sanctioned derivation is ground black at reduced strength on the gold field, for marks that must sit quieter than solid ink: the range track (28%), the partner flow dashes (55%), the disabled stepper button (opacity 0.28) and the pale "still needed" blocks of the $10,000 line (13%). These are states and tracks, never surfaces, and never the only carrier of information: the pale blocks are always restated in words beneath the bar. Photographs are not palette: they keep their own colour, but only through the shared grade (see Imagery), which holds cool hues down so no picture brings in a competing accent.

**The Chapter Field Rule.** Each section is one flat, full-bleed field (ground, panel, gold or ink), and the fixed bar takes the tone of the chapter under its bottom edge. On gold and ink fields, the bar's logo turns black and its button becomes the ink button. The colour changes from chapter to chapter, never inside one.

**The Gold Is a Field Rule.** Gold appears as whole fields and solid blocks: the hero's lower half, the partner chapter, a button, a highlighted row, a square bullet. Never as glows, gradients, outlines around cards or decorative strokes.

## Typography

**Display Font:** Zodiak (Fontshare, weights 100 / 300 / 400), with Iowan Old Style, Times New Roman, Georgia
**Body Font:** Hanken Grotesk (Google Fonts, weights 400 / 500 / 600), with system sans

**Character:** A sharp, high-contrast serif drawn at hairline weight, paired with a plain, open grotesk. The serif makes the statements and the grotesk explains them.

### Hierarchy
- **Display** (Zodiak 100 at 1200px and wider, 300 below; up to 9.5rem; 0.95; uppercase): the hero headline only, "MORE MEETINGS, / MORE [loop] CAPACITY.". It straddles the black/gold seam and pulls into the gold field by 0.62em. The loop slot is 2em by 0.86em inside the second line. On phones the step becomes clamp(1.75rem, 9.7vw, 3.5rem), and the loop breaks out to its own full-width line, 1.55em tall, between the two lines of words.
- **Display stack** (Zodiak 300, same step, 0.9, sentence case): the sales chapter's stacked words ("Calls. / Emails. / LinkedIn. / Meetings."), in Ash with the final word in Warm Ink. On phones, clamp(3rem, 15vw, 5.5rem).
- **Display figure** (Zodiak 300, clamp(3.25rem, 6.6vw, 6.75rem), 0.92, tabular lining numerals): the one figure the partner calculator resolves to (the partner's monthly share), followed on the same baseline by "a month" at the lead step. On phones, 15vw.
- **Closing wordmark** (Zodiak 300, uppercase, line-height 0.78): "MG REVENUE" sized so it exactly fills the content width (container minus margins, divided by 6.95) and crops at the foot of the closing chapter.
- **Headline** (Zodiak 300, clamp(2rem, 0.9rem + 3.4vw, 4rem), 1, -0.015em, balanced): chapter headings and process steps. A second line may switch to Zodiak 400 for emphasis, as in the partner heading. On screens under 390px the step becomes 8.2vw so headings hold to two lines.
- **Door** (Zodiak 400, lead step, 1.3): the hero's three entry links on gold. The stepper's client count uses Zodiak 400 at the same step, with tabular lining numerals.
- **Lead** (Hanken 400, clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem), about 1.34 to 1.38): opening paragraphs of each chapter, the calculator question and the sentence under the $10,000 line, about 30 to 40ch wide. Live values inside a lead sentence are set at weight 600 with tabular figures.
- **Body** (Hanken 400, clamp(1.0625rem, 1rem + 0.3vw, 1.25rem), 1.55): running text and the calculator's yearly line. Paragraphs cap at about 33 to 36em. Inside interface fragments, tables and lists, text sits at a fixed 1rem.
- **Label** (Hanken 400, 0.875rem): captions, the fact list, legal text, the sequence card's tags, the key line under the $10,000 line.
- **Button / nav** (Hanken 600 / 500, 1rem): controls and bar links. Weight 600 also marks emphasis in running text, the partner flow steps and the "$10,000 a month" marker.

### Named Rules
**The Hairline Capital Rule.** Uppercase belongs to two places only: the hero headline and the closing wordmark. Everything else is sentence case. The weight-100 cut is for the hero alone, at 1200px and wider; below that the hero steps up to 300 so the strokes survive.

**The Two Voices Rule.** Zodiak makes statements: headings, figures, entry links, the wordmark, the phone menu links, the stepper count. Hanken explains: everything else. Never set a paragraph in Zodiak or a heading in Hanken. The one exception is the small closing-column heading "Bringing us a client?", which is set as body text at weight 500.

**The Difference Ink Rule.** The hero headline is painted in Seam Ink with `mix-blend-mode: difference` on each word span, so one line of type reads gold on black and black on gold. For this to work, the gold block must stay non-positioned and free of `transform`, `opacity`, `isolation` and `filter`. Any of those creates a stacking context and breaks the blend. The gold field's rise on load is an animated inset `box-shadow` for exactly this reason.

**The Sentence Resolves Rule.** A calculation is written as a sentence that ends in its answer: a lead-size question with live values in weight 600, then one display figure. Supporting numbers follow in body text beneath it. Never set a calculation as a table, a ledger of several display figures or a chart with axes.

## Layout

A full-width container capped at 1760px, with side margins of clamp(20px, 3.4vw, 48px) and a 12-column grid with gaps of clamp(16px, 2vw, 28px). Chapters take section padding of clamp(104px, 13vw, 208px) top and bottom. The fixed bar is 72px tall, or 64px at 860px and below, and anchors scroll to it. The hero's black field is at least 54% of the viewport tall (46% on phones), with its content pushed to the seam, which leaves the top of the field empty for the full-size logo.

Compositions are asymmetric and off-centre:
- The sales word stack takes columns 1 to 7, with the sequence card pushed against the right edge.
- The outsourcing intro and photograph sit left, with the roles table on columns 8 to 12.
- Process steps start one column pair further right each time, a staircase from column 1 to column 7. On phones the indent becomes 0, 6, 12 and 18vw.
- The partner chapter puts its copy on columns 1 to 6 and the calculator on columns 8 to 12, then runs the $10,000 line across all twelve columns beneath both.
- The about chapter splits into a narrow fact list, a text column and a square photo at the far right, then a full-bleed 21:9 photograph (4:3 on phones).
- The closing chapter fills at least the viewport, with the wordmark cropped at its foot.

Breakpoints: 1280px (the partner copy and calculator stack to full width), 1200px (hero weight switches to 100 above it), 1100px (tablet: blocks go full width, the sales card moves under the stack, the photo and intro sit side by side), 860px (bar 64px, logo 60px, bar links give way to a "Menu" text button and a full-screen sheet), 720px (phone: single column, re-sized display steps, the roles table becomes a two-column list, the stepper and slider stack, the $10,000 line drops to 48px tall), 389px (heading step scales with the screen).

**The Off-Centre Rule.** Never centre a chapter's composition. Every block is placed on the 12-column grid against an edge, offset from the others. The only element centred on an axis is the settled logo, centred vertically in the bar.

## Elevation & Depth

The system is flat. There are no shadows at rest and no blur or glass. Depth comes from field changes between chapters and from three near-black tones (ground, then panel, then raised panel) in that order of lift. The raised panel holds rows of the panel tone, separated by 2px gaps. The only element that overlaps a field edge is the full-size logo, which hangs below the bar's 72px over the empty black top of the hero.

**The Flat Field Rule.** Surfaces are flat fills at all times. The only `box-shadow` in the build is the hero's load-only curtain: an inset band of ground black that retracts upward as the gold field rises. It is never present at rest, and it's not a shadow vocabulary.

## Shapes

Every corner is square (0px): buttons, stepper buttons, the sequence card and its rows, the range thumb, the blocks of the $10,000 line, photographs and the loop slot in the headline. Bullets are solid gold squares 0.42em across. Icons are inline SVG strokes on a 24-unit grid with square caps: the arrow (1.6 stroke, turned 90 degrees to point down at the $10,000 marker), and minus and plus (2 stroke, 18px) in the stepper.

**The Block Count Rule.** When something is counted, draw one solid square-cornered block per unit, all the same width, separated by 2px gaps of the field beneath. A block is either solid ink (counted) or pale ink (still needed). No outlines, no labels inside blocks, no rounded ends.

**The No-Rule Rule.** Never separate content with hairlines, borders or divider rules. Separation comes from space, from a field change, from a tone step or from a gap that lets the field show through. The Line colour is reserved for interface fragments marked `data-ui`. These strokes are part of the world and stay allowed: 1px link underlines; 2px ink dashes at 55% opacity linking the partner flow steps; the 4px range track in ground black at 28% opacity.

## Components

### Buttons
Solid, square and weighty: a block of colour with a 600-weight label.
- **Shape:** square (0px), at least 52px tall with 1.4em side padding, or 44px tall in the bar. An optional trailing arrow sits 0.65em from the label.
- **Gold:** gold fill, ground-black label. Used on dark fields and in the bar over dark fields.
- **Ink:** ground-black fill, gold label. Used on gold and ink fields, and the bar swaps to it over those chapters.
- **Hover (fine pointers only):** the gold button lightens to Light Gold. The ink button steps up to Raised Panel and its label turns Light Gold. Colour changes take 200ms.
- **Press:** scales to 0.97 over 160ms on the ease-out curve.
- **Focus:** a 2px outline offset 3px, in gold on dark fields and in ground black on gold and ink fields.

### Text links and doors
- **Link:** an inline label with a 1px underline offset 0.28em and a trailing arrow. On hover the underline drops to 0.4em and the arrow moves 3px right.
- **Door:** a Zodiak 400 entry link on gold with an arrow. Its underline is invisible at rest and appears on hover while the arrow moves 4px. It presses to 0.985.

### Navigation
- **Bar:** fixed, full width, and coloured by the chapter beneath it (dark, panel, gold, light), with a 300ms colour transition. Four Hanken 500 links and a button at right. Link underlines are transparent at rest; on hover they appear and rise from 0.5em to 0.35em offset.
- **Logo:** at left, rendered black on gold and light fields (300ms filter change). Over the empty top of the hero it stands 80px tall and hangs below the bar. Once the page scrolls past 24px it settles to 70% (56px) with a scale transform from its top-left corner, over 320ms on the ease-out curve; its top offset is set so the settled logo is centred vertically in the bar. At 860px and below it runs 60px large and about 46px settled (scale 0.77) in the 64px bar. A page restored mid-scroll starts settled without playing the shrink, and under reduced motion the change is instant.
- **Phone (860px and below):** links collapse to an underlined "Menu" text button. It opens a full-screen ground-black sheet whose logo mirrors the bar's state at the moment it opens (large or settled), with Zodiak 300 links at clamp(2.5rem, 11vw, 4rem), a full-width gold email button and a partner link. The sheet enters by fading and sliding 14px down. It closes over 180ms, closes immediately under reduced motion, and returns focus to Menu.

### Interface fragment: the sequence card
An illustrative outbound sequence marked `data-ui`. The body is Raised Panel, at most 560px wide. Rows are Panel with 2px gaps and a three-part grid: day, channel, status. Days and statuses are Ash with tabular figures. The won row is a solid gold block with ground-black text. The card is labelled "Example" and carries a caption saying it is illustrative. On reveal it settles from a -3deg tilt.

### Partner calculator
On the gold field, in US dollars only. A lead-size question ("If you introduce 5 outsourcing clients who each spend $20,000 a month with us, your 10% comes to") resolves into one display figure ("$10,000 a month"), with a body-size yearly line beneath ("$120,000 a year, for as long as they stay."). The controls sit under the figure on one row: the client stepper, then the spend slider filling the rest (stacked on phones).
- **Stepper:** 1 to 10 clients. Two 44px square ground-black buttons with gold minus and plus icons, the count between them in Zodiak 400. Hover steps the fill to Raised Panel and the icon to Light Gold; press scales to 0.94. At either end the button stays focusable but is marked `aria-disabled`, drops to 0.28 opacity and stops responding to press.
- **Slider:** $2,500 to $40,000 a month per client in $500 steps. A 4px ground-black track at 28% and a 26px square ground-black thumb that scales to 1.12 while pressed. Its focus outline is ground black, offset 4px.
- **Announcements:** one polite screen-reader summary 600ms after the controls settle, never on load.

### The $10,000 line
A full-width bar under the calculator, clamp(56px, 6vw, 96px) tall (48px on phones), counting clients toward $10,000 a month for the partner. Every block is one client at the chosen spend, all the same width.
- **Below the target:** the bar is $10,000 wide. Solid ground-black blocks are the clients introduced; pale blocks (ground black at 13%) are the clients of that size still needed. The last needed block may cross the bar's right edge and is cropped there.
- **Past the target:** the bar rescales to the total, so every client stays visible, and the "$10,000 a month" marker (Hanken 600 with a down-pointing arrow) moves to where the target falls. It reads from the right of that point, or from the left once the point is in the bar's first half.
- **Beneath the bar:** a lead-size sentence ("5 clients of this size reach the line. Each one after that adds $2,000 a month.") and a label-size key line ("Each block is one client paying you $2,000 a month. Illustrative figures, not a quote.").
- **Motion:** blocks change between pale and solid in 140ms to 220ms. The first time 80% of the bar is on screen, the solid blocks grow in from the left one at a time (640ms each, 150ms apart, ease-expo, starting 380ms in), then the pale blocks fade in quickly behind them (420ms, 14ms apart). None of this runs under reduced motion, and without JavaScript the bar shows five solid blocks reaching the line.

### Roles table
A borderless table on the panel field: department in Ash, role in Ink at weight 500, focus in Ash and right-aligned. Groups are separated by 44px of space, not rules. On phones each row becomes a two-column grid with the department shown once above its group.

### Imagery
Credited open-licence photographs of people at work from Wikimedia Commons, and one loop of hands typing in the headline. Stills and the loop share one colour grade, built once as a Hald lookup table and applied to both: warm hues (skin, wood, brick) keep 72% of their saturation while cool hues (blues, green casts) fall toward 18%, then a sigmoidal contrast of 3.5 at 50%, with black mapped to #0b0a08 and white to #f4efe4. The colour stays natural and warm, shadows sink into the ground and highlights never go blue-white. It replaced a warm monochrome treatment that the owner found too gray (owner review 1). All are built from originals listed in `assets/credits.json` by `.taste-skill/build-assets.sh`. Crops are fixed: 21:9 band, 3:2 landscape, 1:1 squares, and a 5:2 loop inside the headline slot. The loop runs 8 seconds with its last second cross-faded into its first, so it has no visible jump. Crops exclude legible writing. Each image carries a short caption that names the place when the source gives one ("A shared desk, Prague.", "A contact centre, Buenos Aires.") and otherwise names the activity ("A working session."). The closing chapter lists title, author and licence for every image, including public-domain ones.

**The Honest People Rule.** Photographs show anonymous people at work somewhere else. Never caption, crop or position one so it reads as MG Revenue's office, team, clients or work: no names, no "our", no "the team". Every new image comes from an open-licence source, goes through the same treatment script and is credited.

### Motion
Ease-out (cubic-bezier(.23,1,.32,1)) handles state changes, including the logo settling. Ease-expo (cubic-bezier(.16,1,.3,1)) handles entrances, including the blocks of the $10,000 line. Ease-in-out (cubic-bezier(.77,0,.175,1)) handles wipes. The drawer curve (cubic-bezier(.32,.72,0,1)) handles the sheet.

On load:
- The gold field rises over 1300ms, after 150ms.
- The headline slot wipes open over 900ms, after 450ms.
- Hero text and links fade up 14px over 700ms, staggered from 650ms to 960ms.

On scroll, sections enter once: they fade over 700ms and rise 24px over 900ms, staggered 80ms per item. The full-bleed photograph wipes down over 1100ms while it settles from 1.1x scale over 1600ms. The logo settles over 320ms past 24px of scroll.

Under reduced motion, all entrance and load animation is removed and content is static and visible. The logo changes size without transition, the $10,000 line appears complete, and the headline loop holds on its poster frame. The loop also pauses whenever it leaves the screen. Smooth scrolling is off, and the menu sheet opens and closes without transition. Content is visible without JavaScript.

## Do's and Don'ts

### Do:
- **Do** give every new section exactly one full-bleed field from the palette and a `data-tone` value (dark, panel, gold or light) so the bar follows it.
- **Do** use gold as a whole field or a solid block, and set all ink and controls on gold in ground black.
- **Do** set statements in Zodiak 300 at the headline step and reading text in Hanken at the body or lead step, sentence case.
- **Do** keep every corner square (0px) and every fill flat.
- **Do** separate content with space, a field change, a tone step between ground, panel and raised panel, or a 2px gap of the field.
- **Do** write a calculation as a sentence that resolves into one display figure, and show a count as one solid block per unit.
- **Do** give controls a press response (scale 0.97 over 160ms; 0.94 for stepper buttons) and restrict hover effects to fine pointers.
- **Do** run new photographs through the shared colour grade in `.taste-skill/build-assets.sh`, never a one-off adjustment per picture; photographs carry no captions (the owner removed them), so credit the source in the close.
- **Do** keep the hero's gold block free of position, transform, opacity, isolation and filter.

### Don't:
- **Don't** add, tint or adjust any colour outside the owner's palette; ground black at reduced strength on gold, for tracks and states, is the only derivation.
- **Don't** use glowing orbs, icon cards or a centred hero.
- **Don't** add eyebrows or kickers (small labels above headings), and don't number sections or steps. The process reads in order by its staircase indent.
- **Don't** draw divider rules or card borders outside interface fragments marked `data-ui`.
- **Don't** add shadows, gradients, blur or rounded corners.
- **Don't** set anything in capitals except the hero headline and the closing wordmark, and don't use Zodiak weight 100 anywhere but the hero at 1200px and wider.
- **Don't** present a photograph as MG Revenue's own office, team, clients or work, and don't invent clients, statistics, logos or testimonials to fill a layout.
- **Don't** present calculator output as a quote: keep it in US dollars, label it illustrative, and keep the share to qualifying outsourcing introductions for as long as the client stays.
