---
name: Lycious
description: A warm, editorial fruit-drink identity shaped as The Lychee Atelier.
colors:
  lycious-burgundy: "#722028"
  burgundy-hover: "#5A1A1F"
  lycious-ivory: "#FAF8F4"
  warm-white: "#FFFCF9"
  petal-blush: "#E8B4B8"
  blush-light: "#F5DCE0"
  lychee-terracotta: "#C88870"
  deep-cocoa: "#3D1A13"
  soft-gold: "#C8A96E"
  status-error: "#A21D2D"
  status-success: "#2F6B45"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 6vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Poppins, Avenir Next, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Poppins, Avenir Next, Segoe UI, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
  micro:
    fontFamily: "Poppins, Avenir Next, Segoe UI, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
  lead:
    fontFamily: "Poppins, Avenir Next, Segoe UI, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.75
  feature-copy:
    fontFamily: "Poppins, Avenir Next, Segoe UI, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.75
  title-sm:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.15
  title-md:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  display-compact:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.1
  display-large:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "4rem"
    fontWeight: 600
    lineHeight: 1.15
rounded:
  line: "2px"
  compact: "12px"
  field: "14px"
  card: "16px"
  summary: "18px"
  media: "20px"
  feature: "24px"
  pill: "50px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "6rem"
  2xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.lycious-burgundy}"
    textColor: "{colors.lycious-ivory}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-hover}"
    textColor: "{colors.lycious-ivory}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.lychee-terracotta}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  field:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.deep-cocoa}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
    height: "48px"
  card:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.deep-cocoa}"
    rounded: "{rounded.card}"
    padding: "2rem"
---

# Design System: Lycious

## Overview

**Creative North Star: "The Lychee Atelier"**

Lycious feels like a small contemporary atelier devoted to one exceptional fruit: warm, refined, tactile, and quietly joyful. Editorial typography gives the brand romance and ceremony, while a clear modern sans serif keeps product facts, navigation, and forms effortless to use.

The system favors generous breathing room, fruit-led photography, warm pale surfaces, and burgundy as a concentrated signature. It avoids sterile technology styling, neon color, and generic black-and-gold luxury; premium character comes from care, material warmth, and restraint.

**Key Characteristics:**

- Editorial romance balanced by modern clarity
- Lycious Ivory surfaces with a concentrated burgundy signature
- Soft ambient layering and tactile, confidently rounded controls
- Generous responsive rhythm with focused, factual product storytelling

## Colors

The palette moves from Lycious Ivory and warm white through petal blush and lychee terracotta, anchored by deep fruit burgundy and cocoa text; soft gold is reserved for small moments of emphasis and focus.

### Primary

- **Lycious Burgundy:** The concentrated brand voice for primary actions, emphasized type, and high-contrast sections.
- **Burgundy Hover:** A deeper interaction state that gives buttons and links a tactile response.

### Secondary

- **Petal Blush:** A soft fruit tint for borders, quiet emphasis, and supporting surfaces.
- **Lychee Terracotta:** The warm midtone used for subtle controls, secondary accents, and scrollbar details.

### Tertiary

- **Soft Gold:** A sparing highlight for accessible focus rings and refined points of attention.

### Neutral

- **Lycious Ivory:** The named core background and light text color; use it as the brand's warm alternative to clinical white.
- **Warm White:** A brighter surface for cards and section contrast.
- **Deep Cocoa:** The default dark text color, warmer than pure black.

**The Concentrated Burgundy Rule.** Burgundy carries meaning because it is focused on brand signatures, actions, and key moments rather than flooding every surface.

**The Lycious Ivory Rule.** Refer to the main warm pale surface as Lycious Ivory; do not rename it Fresh Cream.

## Typography

**Display Font:** Playfair Display (with Georgia and Times New Roman fallbacks)  
**Body Font:** Poppins (with Avenir Next, Segoe UI, Arial, and sans-serif fallbacks)

**Character:** Playfair Display supplies fruit-led editorial romance, especially through italic emphasis. Poppins keeps navigation, supporting copy, facts, and controls crisp and contemporary.

### Hierarchy

- **Display** (600, fluid display scale, 1.05): Reserved for the largest brand and hero moments.
- **Headline** (600, fluid section scale, 1.15): Section titles and major product statements; italic words may carry burgundy emphasis.
- **Title** (600, approximately 1.375–1.5rem, 1.15–1.25): Card and product titles.
- **Body** (400, 1rem, 1.75): Long-form reading with comfortable measure and open line spacing.
- **Label** (600, 0.8125rem, 0.08em): Compact controls, metadata, and clear interface labels.

**The Two-Voice Rule.** Playfair expresses; Poppins explains. Do not use the display face for dense facts, form controls, or long utility copy.

## Layout

Content sits in a centered 1200px maximum-width container with a spacing scale from 0.5rem to 8rem. Major sections use fluid vertical padding, while paired editorial sections use asymmetric two-column grids that collapse to a single, reordered flow on smaller screens. The navigation is 80px tall and fixed; mobile layouts preserve 44px touch targets, safe-area insets, and balanced edge padding.

Responsive changes are intentional rather than merely compressed: two-column feature and order layouts stack, stockist grids reduce columns, and horizontal actions wrap or become full-width where needed. Large blank intervals are part of the premium rhythm, but controls and related content remain closely grouped.

**The Breathing-Room Rule.** Preserve generous section rhythm while keeping each action visually attached to the content it completes.

## Elevation & Depth

Depth is softly layered and ambient. Warm brown shadows lift imagery and important cards without turning surfaces glossy or heavy; stronger lift appears mainly on hover or on hero media. Tonal background changes and fine blush borders do as much work as shadow.

### Shadow Vocabulary

- **Quiet Lift:** A small, warm shadow for sticky navigation and restrained hover feedback.
- **Card Lift:** A medium ambient shadow for interactive cards and focused containers.
- **Feature Lift:** A broad warm shadow for hero media, product staging, and the order panel.
- **Fruit Glow:** A diffused burgundy or wood-toned halo used behind signature product imagery.

**The Ambient-First Rule.** Shadows should feel like soft light in a studio; avoid hard black drop shadows and persistent elevation on every card.

## Shapes

The form language is tactile and confidently rounded. Fields use gently curved 14px corners, cards generally use 16px, important media can reach 20–24px, and compact action controls use a full pill. Circles are reserved for icons, step numbers, and organic glow shapes. Borders are thin, warm, and low contrast.

## Components

### Buttons

- **Shape:** Full pill silhouette with generous horizontal padding.
- **Primary:** Burgundy on Lycious Ivory, medium-weight Poppins, with warm ambient lift.
- **Hover / Focus:** Deepen the burgundy, rise slightly, strengthen the warm shadow, and retain the soft-gold focus ring.
- **Secondary:** Transparent with a lychee-toned border; gain a pale fruit surface on hover.

### Cards / Containers

- **Corner Style:** Soft 16px corners by default, with 20–24px reserved for feature media.
- **Background:** Warm white or Lycious Ivory over subtly contrasting section backgrounds.
- **Shadow Strategy:** Flat or finely bordered at rest; ambient lift on hover or for priority containers.
- **Internal Padding:** Usually 2rem, increasing to 4rem only when the content benefits from an editorial pause.

### Inputs / Fields

- **Style:** White field, warm low-contrast border, 14px corners, and at least 48px height.
- **Focus:** Burgundy border with a soft translucent burgundy halo; global keyboard focus retains the gold outline.
- **Error / Disabled:** Keep language direct and preserve contrast without introducing unrelated hues.

### Navigation

Navigation uses compact Poppins labels in burgundy, a restrained animated underline, and a burgundy pill for the order action. On scroll, Lycious Ivory becomes translucent and softly blurred. Mobile navigation becomes a spacious off-canvas panel with full touch targets.

### Language Toggle

The language control is a translucent Lycious Ivory pill with a petal-blush border, compact uppercase code, and a subtle lift. Its globe icon scales gently on hover without becoming playful or distracting.

### Product and Value Cards

Feature icons sit in softly rounded fruit-toned tiles. Cards remain calm at rest and respond through a controlled upward shift, ambient shadow, and a small icon rotation or scale.

## Do's and Don'ts

### Do:

- **Do** treat Lycious Ivory as the primary warm pale surface and name it consistently.
- **Do** pair expressive Playfair moments with practical Poppins copy.
- **Do** use burgundy to focus attention on the logo, primary actions, and key editorial emphasis.
- **Do** make responsive layouts feel recomposed, with clear touch targets and readable line lengths.
- **Do** keep depth warm, diffuse, and tied to hierarchy or interaction.

### Don't:

- **Don't** introduce neon colors, cold tech gradients, or generic black-and-gold luxury styling.
- **Don't** fill every card with a shadow or every heading with burgundy.
- **Don't** use Playfair Display for dense product facts, navigation, or form controls.
- **Don't** square off tactile controls or mix many unrelated corner radii.
- **Don't** invent product proof, decorative badges, or visual claims that exceed the evidence on hand.
