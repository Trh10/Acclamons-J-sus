---
name: Celestial Harmony
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#45464d'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001c3b'
  on-tertiary-container: '#6185bc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a7c8ff'
  on-tertiary-fixed: '#001c3b'
  on-tertiary-fixed-variant: '#1e477b'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 72px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  quote:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-padding-lg: 120px
  section-padding-md: 80px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

The brand personality is anchored in the intersection of divine tradition and contemporary celebration. It seeks to evoke a sense of "Awe-inspiring Serenity"—a feeling of being uplifted by something larger than oneself while remaining grounded in a modern, accessible community.

The design style utilizes a **Refined Editorial** approach. It leans heavily on minimalism to allow high-quality photography and sacred geometry to breathe. By combining expansive ivory whitespace with deep, soulful tones, the UI establishes a rhythmic flow that mirrors a gospel arrangement: moments of quiet reflection punctuated by powerful, golden crescents of activity. Soft transitions and subtle glassmorphism are used to layer content over atmospheric imagery, creating a sense of depth and spiritual transcendence.

## Colors

The palette is designed to feel both "Heavenly" and "Rooted."

- **Deep Soul Blue (#0F172A):** Used for primary text and grounding elements. It represents the depth of faith and the night sky of a festival evening.
- **Divine Gold (#C5A059):** A muted, sophisticated metallic used for high-importance accents, calls to action, and iconography. It symbolizes the light of the spirit.
- **Ether Blue (#4A6FA5):** A softer, mid-tone blue used for secondary structural elements and decorative motifs.
- **Sanctuary Ivory (#FCFAF7):** The foundation of the UI. This off-white provides a warmer, more organic feel than pure white, reducing eye strain and feeling more "archival."

Maintain a high ratio of Ivory to Blue to ensure the "pure" and "light" feeling remains dominant.

## Typography

The typography strategy relies on a classic contrast between the sacred and the modern.

- **Headlines (ebGaramond):** This serif font brings a sense of historical weight, grace, and literary authority. Display sizes should use tighter letter spacing to create a high-end, editorial look.
- **Body & Interface (hankenGrotesk):** A clean, contemporary sans-serif ensures maximum legibility for logistical information (dates, ticketing, schedules). Its sharp geometry balances the fluid curves of the serif.
- **Labels:** Always set in Hanken Grotesk with increased tracking (letter-spacing) and uppercase styling to provide a modern, navigational anchor to the page.

## Layout & Spacing

The layout philosophy is based on **Intentional Emptiness**. Spacing is used as a luxury, ensuring that every piece of content feels significant.

- **Grid:** A 12-column fluid grid for desktop with generous 32px gutters. Content should often be centered or offset to create a dynamic, asymmetrical rhythm reminiscent of music.
- **Breakpoints:**
    - **Mobile (<768px):** 4 columns, 16px margins, vertical stacking.
    - **Tablet (768px - 1024px):** 8 columns, 24px margins.
    - **Desktop (>1024px):** 12 columns, fixed container max-width of 1280px to prevent excessive line lengths.
- **Vertical Rhythm:** Use large padding (120px+) between major sections to signal a transition in the "narrative" of the page.

## Elevation & Depth

Depth in this design system is created through light and atmospheric layers rather than heavy physical shadows.

- **Atmospheric Depth:** Use "Soft Glow" shadows—highly diffused (40px+ blur), low opacity (5-8%), and slightly tinted with the Deep Soul Blue. This makes cards feel like they are floating on a cloud of light.
- **Glassmorphism:** For overlays (like mobile menus or image captions), use a backdrop blur of 20px with a 70% opaque Sanctuary Ivory fill. This maintains the "pure" aesthetic while allowing the colors of background imagery to bleed through softly.
- **Tonal Stepping:** Use subtle shifts between Sanctuary Ivory and a very light version of Ether Blue to define different content zones without needing borders.

## Shapes

The shape language is **Soft and Sophisticated**. 

Avoid sharp 90-degree angles to keep the brand feeling approachable and "organic," but also avoid fully rounded "pill" shapes which can feel too casual or tech-focused. A subtle corner radius (0.25rem to 0.75rem) provides a gentle touch that feels modern yet permanent. 

Decorative elements may use **circular or arched apertures** for imagery, mimicking the architecture of cathedrals and historical music halls.

## Components

- **Primary Buttons:** Solid Deep Soul Blue with Gold text or vice-versa. High-contrast, rectangular with soft 4px corners. Hover states should involve a gentle lift and a glow effect rather than a color change.
- **Secondary Buttons:** Ghost style with a 1px Gold border. Used for less urgent actions to maintain the lightness of the layout.
- **Cards:** Sanctuary Ivory background with a Soft Glow shadow. No borders. Imagery within cards should use a subtle zoom-on-hover effect to feel "alive."
- **Inputs:** Underlined rather than boxed to maintain the editorial feel. The active state should transition the underline from a light gray to Divine Gold.
- **Chips/Badges:** Small, all-caps labels with high letter-spacing. Use a light Ether Blue tint for the background to denote categories like "Worship," "Workshop," or "Concert."
- **Imagery:** High-resolution photography featuring natural light, diverse groups of people in joyful expression, and architectural details. Apply a very subtle "Soul Blue" tint to the shadows of all photos for visual cohesion.