# Website Design System Template

A comprehensive design system for building dark, cinematic portfolio websites with the Liquid Glass UI.

---

## Strategic Positioning (Fill This In)

**Core message:** _What's the one thing you want visitors to understand?_

**Differentiator:** _What makes you different from others in your field?_

**Business model:** _How do you make money? What's the relationship between your personal brand and your services?_

**Primary goal:** _What action do you most want visitors to take?_
**Secondary goal:** _What's the next most important action?_
**Supporting role:** _What content supports the goals above without being the main focus?_

---

## Narrative Flow (Homepage)

Structure your homepage as a story:

1. **Hero** — Bold statement + primary CTA
2. **Problem/Need** — What pain point do you solve? Why does your audience need you?
3. **Solution/Approach** — How you do things differently
4. **Evidence** — Proof you can deliver (portfolio, testimonials, credentials)
5. **Secondary Evidence** — Supporting content that reinforces your brand
6. **CTA** — Clear call to action (contact form, booking, etc.)

---

## Aesthetic Direction

**Tone:** Bold, dramatic, cinematic — dark backgrounds let creative work command attention while the Liquid Glass UI adds depth and sophistication.

**Memorable hook:** _What's the one thing visitors will remember? A unique interaction? A visual sequence? A storytelling approach?_

---

## Color Palette

### Base Colors
```css
--color-black: #0a0a0a;
--color-off-black: #121212;    /* Primary background */
--color-charcoal: #1a1a1a;     /* Elevated surfaces */
--color-white: #f5f5f5;        /* Primary text */
--color-gray-light: #a0a0a0;   /* Secondary text */
--color-gray-mid: #666666;     /* Muted text */
```

### Accent Colors
Customize these to match your brand:
```css
accent-red: #8b0000      /* Dark red */
accent-blue: #002366     /* Dark royal blue */
accent-purple: #300052   /* Dark purple */
accent-green: #003319    /* Dark green */
```

### Overlay Usage
Use Tailwind's opacity modifier with accent colors:
- `bg-accent-red/50` — 50% opacity red overlay
- `bg-accent-blue/50` — 50% opacity blue overlay
- `bg-accent-purple/50` — 50% opacity purple overlay
- `bg-black/50` — 50% opacity black overlay

Adjust opacity as needed (40-60% typically works best).

**Do NOT use backgroundImage gradients for overlays** — the opacity modifier won't work.

### Usage Guidelines
- **Primary backgrounds:** Off-black with image underneath + colored overlay
- **Section breaks:** Rotate through accent overlay colors for visual variety
- **Text:** Off-white on dark backgrounds
- **Interactive elements:** Use accent colors at higher brightness for links/buttons

---

## Typography

### Font Pairing (Default)

**Display / Headlines:** [Oswald](https://fonts.google.com/specimen/Oswald)
— Bold, condensed. Great for dramatic headlines.

**Body / UI:** [Lato](https://fonts.google.com/specimen/Lato)
— Clean, friendly sans-serif. Highly readable.

**Artistic Accent:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Italic)
— Elegant serifs for artistic moments, quotes, special emphasis.

### Alternative Pairings

**Modern/Tech:**
- Headlines: Inter or Space Grotesk
- Body: Inter

**Elegant/Luxury:**
- Headlines: Playfair Display
- Body: Cormorant Garamond

**Creative/Bold:**
- Headlines: Bebas Neue
- Body: Work Sans

### Type Scale
```css
--text-hero: clamp(3.5rem, 10vw, 8rem);
--text-h1: clamp(2.5rem, 6vw, 5rem);
--text-h2: clamp(1.75rem, 4vw, 3rem);
--text-h3: clamp(1.25rem, 2.5vw, 1.75rem);
--text-body: clamp(1rem, 1.5vw, 1.125rem);
--text-small: 0.875rem;
--text-caption: 0.75rem;
```

### Type Treatment
- **Headlines:** Uppercase with generous letter-spacing (0.05em)
- **Subheads:** Medium weight
- **Body:** Regular weight, 1.6 line-height
- **Artistic moments:** Italic accent font for titles, pull quotes

---

## Liquid Glass UI

Three intensity levels for glassmorphism effects:

### Level 1: Subtle (`.glass-subtle`)
Basic translucency. Best for form inputs, small UI elements.

### Level 2: Glass (`.glass`)
Rim lighting + inner bevel. Best for cards, panels, featured content.

### Level 3: Liquid (`.glass-liquid`)
Animated shimmer. Best for hero elements, primary CTAs, special emphasis.

### Tint Modifiers
- `.glass-tint-purple` — Purple-tinted glass
- `.glass-tint-blue` — Blue-tinted glass

### Special Purpose
- `.glass-input` — Form inputs
- `.glass-nav` — Navigation bar
- `.btn-glass` — Glass-styled buttons

See `STARTER_GUIDE.md` for full usage examples.

---

## Animation & Motion

### Philosophy
Cinematic. Deliberate. Animations should feel like a slow reveal — not frantic.

### Scroll-Triggered Animations
- **Fade up:** Elements rise 30px while fading in (0.8s, ease-out)
- **Stagger:** Multi-item sections animate sequentially (0.1s delay between items)
- **Parallax:** Background images move at 50% scroll speed (optional)

### Hover States
- **Images:** Subtle scale (1.02-1.05) + overlay opacity shift
- **Links:** Underline animates in from left
- **Cards:** Lift with shadow (translateY -4px)
- **Buttons:** Background shift + slight scale

### Timing
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast: 0.2s;
--duration-normal: 0.4s;
--duration-slow: 0.8s;
```

### Reduced Motion
Always respect `prefers-reduced-motion`. The template handles this automatically.

---

## Layout Principles

### Grid
- 12-column grid on desktop
- Generous margins (5-8% on sides)
- Full-bleed sections with overlay backgrounds
- Asymmetric layouts encouraged

### Spacing Scale
```css
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 2rem;      /* 32px */
--space-lg: 4rem;      /* 64px */
--space-xl: 8rem;      /* 128px */
--space-2xl: 12rem;    /* 192px */
```

### Section Rhythm
- Alternate full-bleed image sections with contained content
- Generous vertical padding between major sections
- Use negative space to let content breathe

---

## Component Patterns

### Hero
- Full viewport height
- Background image with dark/colored overlay
- Large headline + supporting text
- Primary CTA button(s)
- Optional: rotating content, scroll indicator

### Navigation
- Fixed on scroll
- Transparent on hero, glass effect after scrolling
- Logo/name left, nav items right
- Mobile: full-screen overlay menu

### Cards
- Image with hover overlay
- Title + brief meta info
- Consistent aspect ratios per content type
- Glass background optional

### Portfolio/Gallery Pages
- Large images (full-width or near-full)
- Minimal text, let visuals speak
- Category filtering (optional)
- Lightbox for full-screen viewing (optional)

### Contact Form
- Dark background, light inputs
- Minimal fields (name, email, message)
- Optional dropdown for inquiry type
- Glass-styled inputs
- Clear submit button

---

## Mobile Considerations

- Touch targets minimum 44px
- Hamburger menu with full-screen overlay
- Reduced animation on `prefers-reduced-motion`
- Images optimized with lazy loading
- Typography scales down gracefully (clamp values)
- Stack layouts vertically
- Maintain generous spacing

---

## Content Strategy Tips

### For Service-Based Sites
- Lead with the problem you solve
- Show, don't tell — use portfolio/case studies
- Include clear pricing or "starting at" ranges if possible
- Make booking/contact frictionless

### For Portfolio Sites
- Let work speak first, bio second
- Categorize for easy browsing
- Include process shots if relevant
- Client testimonials add credibility

### For Creative Sites
- Tell stories behind the work
- Show personality
- Connect creative work to professional value
- Use varied content types (images, video, audio)

---

## Implementation Checklist

- [ ] Customize colors in `tailwind.config.mjs`
- [ ] Update fonts (Google Fonts links in `BaseLayout.astro`)
- [ ] Set up content collections in `src/content/config.ts`
- [ ] Update navigation items in `Navigation.astro`
- [ ] Customize homepage sections in `index.astro`
- [ ] Update contact form fields and recipient
- [ ] Add favicon and social meta images
- [ ] Set site URL in `astro.config.mjs`
- [ ] Test on mobile devices
- [ ] Verify reduced motion behavior
- [ ] Optimize images before deployment

---

## Messaging Framework

Use this template to draft your copy:

**Hero headline:** _[Action verb] + [benefit/transformation]_
Example: "Capture moments that last forever"

**Problem statement:** _Most [audience] struggle with [pain point]. [Reframe the problem]._

**Solution statement:** _I [what you do] by [how you do it differently]._

**Evidence intro:** _[Connect your work to the value you provide]._

**CTA:** _[Clear, action-oriented, low-friction]._
Examples: "Book a session" / "View portfolio" / "Let's talk"
