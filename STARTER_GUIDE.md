# Astro + Tailwind Starter Guide

A modern, fast website template with a Liquid Glass UI system built on Astro and Tailwind CSS.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Folder Structure](#folder-structure)
3. [Design System](#design-system)
4. [Liquid Glass UI](#liquid-glass-ui)
5. [Content Collections](#content-collections)
6. [Creating a Template](#creating-a-template)
7. [Customizing for a New Site](#customizing-for-a-new-site)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Folder Structure

```
├── public/
│   ├── images/           # Static images (paintings, headshots, etc.)
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── OptimizedImage.astro
│   ├── content/          # Markdown content collections
│   │   ├── config.ts     # Collection schemas
│   │   ├── paintings/    # Art pieces
│   │   ├── blog/         # Blog posts
│   │   ├── music/        # Music content
│   │   └── work/         # Portfolio/work items
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main page wrapper
│   ├── pages/            # File-based routing
│   │   ├── index.astro   # Homepage
│   │   ├── contact.astro
│   │   ├── art/
│   │   ├── blog/
│   │   ├── music/
│   │   └── work/
│   └── styles/
│       └── global.css    # Tailwind + custom styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind + design tokens
└── package.json
```

---

## Design System

### Colors (in `tailwind.config.mjs`)

```js
colors: {
  'off-black': '#0A0A0A',      // Background
  'charcoal': '#1A1A1A',       // Elevated surfaces
  'white': '#FFFFFF',          // Primary text
  'gray-light': '#B8B8B8',     // Secondary text
  'gray-mid': '#6B6B6B',       // Muted text
  'accent-purple': '#300052',  // Purple accent
  'accent-blue': '#002366',    // Blue accent
  'accent-red': '#8B0000',     // Red accent
}
```

### Typography

- **Display font**: Oswald (headings, uppercase)
- **Body font**: Lato (body text)
- **Accent font**: Playfair Display (artistic/italic text)

### Spacing Scale

```js
spacing: {
  'xs': '1rem',      // 16px
  'sm': '1.5rem',    // 24px
  'md': '2rem',      // 32px
  'lg': '3rem',      // 48px
  'xl': '4rem',      // 64px
  '2xl': '6rem',     // 96px
}
```

---

## Liquid Glass UI

Three intensity levels, each building on the previous:

### Level 1: Subtle (`glass-subtle`)
Basic glassmorphism - translucent with light blur.

```html
<div class="glass-subtle p-6 rounded-lg">
  Content here
</div>
```

### Level 2: Glass (`glass`)
Adds rim lighting and inner bevel - feels "real."

```html
<div class="glass p-6">
  Content here
</div>
```
Note: `.glass` includes `border-radius: 1rem` - no need for `rounded-lg`.

### Level 3: Liquid (`glass-liquid`)
Full effect with animated shimmer. Requires a `.liquid` child element.

```html
<div class="glass-liquid p-6">
  <span class="liquid"></span>
  Content here (use relative z-10 if needed)
</div>
```

### Tint Modifiers

Combine with any glass level:

```html
<div class="glass glass-tint-purple p-6">Purple tinted glass</div>
<div class="glass glass-tint-blue p-6">Blue tinted glass</div>
```

### Special Purpose Classes

```html
<!-- Form inputs -->
<input class="glass-input px-4 py-2" />

<!-- Navigation (applied dynamically on scroll) -->
<header class="glass-nav">...</header>

<!-- Glass buttons -->
<a href="/contact" class="btn-glass">Let's Talk</a>
```

---

## Content Collections

Content is managed through Astro's content collections in `src/content/`.

### Adding Content

1. Create a markdown file in the appropriate folder
2. Include required frontmatter (defined in `src/content/config.ts`)

Example painting:
```markdown
---
title: "Sunset Over Mountains"
date: 2024-01-15
image: "/images/paintings/sunset-mountains.jpg"
medium: "Oil on canvas"
dimensions: "24x36 inches"
available: true
---

Description of the piece goes here.
```

### Querying Content

```astro
---
import { getCollection } from 'astro:content';

const paintings = await getCollection('paintings');
const sorted = paintings.sort((a, b) => b.data.date - a.data.date);
---
```

---

## Creating a Template

To turn this site into a reusable template:

### Step 1: Copy the folder

```bash
cp -r mac-bartine site-template
cd site-template
```

### Step 2: Remove personal content

```bash
# Remove personal images
rm -rf public/images/paintings/*
rm -rf public/images/mac/*

# Remove content markdown files (keep the folders)
rm -rf src/content/paintings/*
rm -rf src/content/blog/*
rm -rf src/content/music/*
rm -rf src/content/work/*

# Remove git history
rm -rf .git
rm -rf .claude
```

### Step 3: Add placeholder content

Create placeholder files:

**`public/images/.gitkeep`** (empty file to preserve folder)

**`src/content/paintings/example.md`**:
```markdown
---
title: "Example Painting"
date: 2024-01-01
image: "/images/paintings/example.jpg"
medium: "Your medium here"
dimensions: "Size"
available: true
---

Description of your work.
```

### Step 4: Update package.json

```json
{
  "name": "astro-glass-template",
  "version": "1.0.0",
  "description": "Astro + Tailwind template with Liquid Glass UI"
}
```

### Step 5: Reset configuration files

Update `astro.config.mjs` site URL:
```js
export default defineConfig({
  site: 'https://your-site.com',
  // ...
});
```

### Step 6: Update placeholder text

In `src/pages/index.astro`, replace personal copy with placeholders like:
- "Your Name Here"
- "Your tagline"
- "Your description"

### Step 7: Initialize fresh git repo

```bash
git init
git add -A
git commit -m "Initial commit from template"
```

---

## Customizing for a New Site

### For a Photographer/Videographer Site

Here's a complete guide for customizing this template:

---

# Photographer Website Setup Guide

## Step 1: Copy the template

```bash
cp -r site-template photographer-site
cd photographer-site
npm install
```

## Step 2: Update the design system

Edit `tailwind.config.mjs` to customize colors:

```js
colors: {
  'off-black': '#0A0A0A',      // Keep dark for photo showcase
  'charcoal': '#1A1A1A',
  'white': '#FFFFFF',
  'gray-light': '#B8B8B8',
  'gray-mid': '#6B6B6B',
  // Customize accent colors to match brand
  'accent-purple': '#2D3748',  // Could be a moody blue-gray
  'accent-blue': '#1A365D',    // Deep blue
  'accent-red': '#742A2A',     // Warm accent
}
```

## Step 3: Update content collections

Edit `src/content/config.ts` to fit photography:

```typescript
import { defineCollection, z } from 'astro:content';

const photography = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    category: z.enum(['portrait', 'landscape', 'wedding', 'commercial', 'teaching']),
    location: z.string().optional(),
    client: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    thumbnail: z.string(),
    videoUrl: z.string(),  // YouTube/Vimeo embed
    category: z.enum(['documentary', 'commercial', 'wedding', 'tutorial']),
    duration: z.string().optional(),
    client: z.string().optional(),
  }),
});

const workshops = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string(),
    price: z.string(),
    duration: z.string(),
    location: z.string(),
    spotsAvailable: z.number().optional(),
    registrationUrl: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  photography,
  videos,
  workshops,
  blog,
};
```

## Step 4: Update folder structure

```bash
# Rename/create content folders
mv src/content/paintings src/content/photography
mkdir src/content/videos
mkdir src/content/workshops

# Update image folders
mkdir public/images/photography
mkdir public/images/videos
mkdir public/images/workshops
mkdir public/images/headshots
```

## Step 5: Update navigation

Edit `src/components/Navigation.astro`:

```javascript
const navItems = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Video', href: '/video' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Blog', href: '/blog' },
];
```

## Step 6: Create/update pages

Rename and update pages:

```bash
mv src/pages/art src/pages/portfolio
mv src/pages/music src/pages/video
mv src/pages/work src/pages/workshops
```

Update each page to query the correct collection.

## Step 7: Update homepage content

Edit `src/pages/index.astro`:

### Hero Section
```html
<h1>Capture Your Story</h1>
<p>Professional photography and videography for portraits,
   weddings, and commercial projects. Plus workshops to
   help you master your craft.</p>
<div class="flex gap-4">
  <a href="/contact" class="btn-glass">Book a Session</a>
  <a href="/portfolio" class="btn-glass">View Portfolio</a>
</div>
```

### Services Section (replace "Problem" section)
```html
<section class="py-2xl bg-charcoal">
  <div class="container-wide">
    <div class="grid md:grid-cols-3 gap-8">
      <div class="glass glass-tint-blue p-8 text-center">
        <h3>Photography</h3>
        <p>Portraits, events, commercial</p>
      </div>
      <div class="glass glass-tint-purple p-8 text-center">
        <h3>Videography</h3>
        <p>Documentaries, promos, weddings</p>
      </div>
      <div class="glass p-8 text-center">
        <h3>Workshops</h3>
        <p>Learn from a pro</p>
      </div>
    </div>
  </div>
</section>
```

### Featured Work Section
```astro
---
const photos = await getCollection('photography');
const featured = photos.filter(p => p.data.featured).slice(0, 6);
---

<section class="py-2xl">
  <div class="container-wide">
    <span class="section-label">Featured Work</span>
    <h2>Recent Projects</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map(photo => (
        <a href={`/portfolio/${photo.slug}`} class="group">
          <div class="aspect-[4/5] overflow-hidden">
            <img
              src={photo.data.image}
              alt={photo.data.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <h3 class="mt-4">{photo.data.title}</h3>
        </a>
      ))}
    </div>
  </div>
</section>
```

## Step 8: Add workshop booking section

```html
<section class="py-2xl bg-off-black">
  <div class="container-wide">
    <div class="glass glass-tint-purple p-12 text-center">
      <span class="section-label">Learn Photography</span>
      <h2 class="mt-4 mb-6">Upcoming Workshops</h2>
      <p class="text-gray-light mb-8 max-w-2xl mx-auto">
        From beginner basics to advanced techniques, learn the art
        of photography in hands-on sessions.
      </p>
      <a href="/workshops" class="btn-glass">View All Workshops</a>
    </div>
  </div>
</section>
```

## Step 9: Update contact form

Edit `src/pages/contact.astro` - update the interest dropdown:

```html
<select id="interest" name="interest" class="glass-input ...">
  <option value="">What can I help you with?</option>
  <option value="portrait">Portrait Session</option>
  <option value="wedding">Wedding Photography/Video</option>
  <option value="commercial">Commercial Project</option>
  <option value="workshop">Workshop Inquiry</option>
  <option value="other">Other</option>
</select>
```

## Step 10: Add sample content

Create `src/content/photography/sample-portrait.md`:
```markdown
---
title: "Sarah's Senior Portraits"
date: 2024-03-15
image: "/images/photography/sarah-portrait.jpg"
category: portrait
location: "Austin, TX"
featured: true
---

A beautiful spring session capturing Sarah's personality...
```

Create `src/content/workshops/lighting-basics.md`:
```markdown
---
title: "Mastering Natural Light"
date: 2024-04-20
image: "/images/workshops/natural-light.jpg"
description: "Learn to see and shape natural light for stunning portraits"
price: "$199"
duration: "4 hours"
location: "Downtown Studio"
spotsAvailable: 8
registrationUrl: "https://..."
---

Workshop details and curriculum here...
```

## Step 11: Initialize and deploy

```bash
git init
git add -A
git commit -m "Initial photographer website setup"
git remote add origin <your-repo-url>
git push -u origin main
```

For Netlify deployment, the build command is:
```
npm run build
```

Publish directory:
```
dist
```

---

## Tips for Photography Sites

1. **Image optimization**: Use `loading="lazy"` on images below the fold
2. **Gallery layouts**: Consider a masonry grid for varied aspect ratios
3. **Video embeds**: Use lite-youtube-embed for faster YouTube loads
4. **Portfolio filtering**: Add client-side filtering by category
5. **Lightbox**: Consider adding a lightbox library for full-screen viewing
6. **Image protection**: Add `oncontextmenu="return false"` to discourage right-click saving (optional)

---

## Need Help?

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
