# BuilderGelNails.com - Design System for Review

**Goal:** Review and improve the visual aesthetics, color palette, typography, and overall design of the website.

---

## Current Color Palette

```typescript
// Primary - soft pink/mauve for nail niche
primary: {
  50: '#fdf2f4',
  100: '#fce7ea',
  200: '#f9d0d9',
  300: '#f4aabb',
  400: '#ec7a96',
  500: '#df5074',  // Main primary color
  600: '#cb305a',
  700: '#ab2349',
  800: '#8f2041',
  900: '#7a1f3c',
  950: '#440c1d',
},

// Secondary - warm neutral
secondary: {
  50: '#f9f7f5',
  100: '#f2ede8',
  200: '#e4d9ce',
  300: '#d2c0ad',
  400: '#bea28a',
  500: '#b08c70',  // Main secondary color
  600: '#a37a63',
  700: '#886453',
  800: '#6f5347',
  900: '#5b463c',
  950: '#30231e',
},

// Accent - teal for trust/professional
accent: {
  50: '#effefa',
  100: '#c8fff1',
  200: '#91fee4',
  300: '#52f6d4',
  400: '#1ee4bf',
  500: '#05c8a6',  // Main accent color
  600: '#01a188',
  700: '#06806e',
  800: '#0a6559',
  900: '#0d534a',
  950: '#00332e',
}
```

---

## Typography

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],  // Body text
  heading: ['Playfair Display', 'Georgia', 'serif'],  // Headings
}
```

---

## Key Page Layouts

### Homepage (`/`)
- **Hero Section**: Large heading with gradient background, CTA buttons
- **What is Builder Gel**: Centered content block with explanation
- **Question Grid**: 10 question cards in 3-column grid
- **Start Here**: 3 path cards with icons
- **Problems & Fixes**: Dark background (secondary-900) with 2 problem cards
- **Featured Products**: 4 product cards in grid
- **Latest Articles**: 3 article cards (if posts exist)
- **About/Trust**: Author bio section

### Section Pages (`/guides`, `/how-to`, `/problems`, `/products`, `/blog`)
- **Hero**: Gradient background, breadcrumbs, title, description
- **Content Grid**: Cards in 2-3 column layout
- **Related Categories**: Cross-linking cards at bottom

### Product Page (`/products`)
- **Quick Navigation**: Sticky filter tabs
- **Budget-Friendly Products**: Card grid
- **Professional Products**: Card grid with different bg
- **Comparison Table**: Full-width table with product details
- **Buying Tips**: 2-column tip cards

### Article Pages (`/guides/[slug]`, etc.)
- **Breadcrumbs**: Navigation trail
- **Article Header**: Title, author bio (compact), date, read time
- **Content**: Prose typography with custom styling
- **Author Bio (Full)**: At bottom with credentials

---

## Component Patterns

### Cards
```typescript
// Standard card
"bg-white border border-secondary-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"

// Featured/Gradient card
"bg-gradient-to-r from-primary-50 to-white border border-primary-200 rounded-lg"

// Dark card
"bg-secondary-800 rounded-lg p-6 hover:bg-secondary-700"
```

### Buttons
```typescript
// Primary CTA
"px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"

// Secondary CTA
"px-6 py-3 bg-white text-primary-600 font-medium border-2 border-primary-600 hover:bg-primary-50"

// Text link
"text-primary-600 font-medium hover:text-primary-700"
```

### Badges/Tags
```typescript
// Pro badge
"px-2 py-0.5 text-xs font-medium bg-accent-100 text-accent-700 rounded"

// HEMA-Free badge
"px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded"

// Category tag
"px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm"
```

---

## Issues to Address

1. **Color Harmony**: Does the pink/neutral/teal combo work well? Should we adjust?
2. **Spacing**: Are margins and padding consistent and visually pleasing?
3. **Typography Scale**: Are heading sizes proportional? Body text readable?
4. **Card Design**: Do the card styles look modern and cohesive?
5. **Dark Sections**: Does the dark background (secondary-900) contrast well?
6. **Gradients**: Are the gradient backgrounds subtle or too much?
7. **Icons**: Should we use different icons or styling for product placeholders?
8. **Mobile**: Does the layout scale well on mobile?

---

## Brand Guidelines

- **Niche**: Builder gel nails / BIAB products
- **Tone**: Professional but approachable, educational
- **Audience**: Nail enthusiasts (beginners to professionals)
- **Competitors**: Salon-style sites, nail education blogs
- **Goal**: E-E-A-T compliance, trustworthy, pink/feminine but not too "girly"

---

## Files to Review

### Core Styling
- `tailwind.config.ts` - Color palette, typography, prose styling
- `app/globals.css` - Global styles

### Key Components
- `components/Navbar.tsx` - Navigation bar
- `components/Footer.tsx` - Site footer
- `components/ProductCard.tsx` - Product display card
- `components/ArticleLayout.tsx` - Article wrapper
- `components/Breadcrumbs.tsx` - Navigation breadcrumbs

### Page Layouts
- `app/page.tsx` - Homepage (most complex)
- `app/products/page.tsx` - Products page with table
- `app/guides/page.tsx` - Section listing example
- `app/about/page.tsx` - About page layout

---

## Suggestions Needed

Please review and suggest improvements for:
1. **Color palette** - Should we adjust primary pink, secondary neutral, or accent teal?
2. **Typography** - Better font pairings? Size scale adjustments?
3. **Spacing/Layout** - More whitespace? Tighter sections?
4. **Card designs** - More modern card styles? Different shadows/borders?
5. **Section backgrounds** - Better use of color blocks?
6. **Mobile responsiveness** - Any layout improvements for small screens?
7. **Overall aesthetic** - Make it more polished/professional?

**Focus**: The site should look modern, trustworthy, and professional while maintaining a feminine niche appeal (nails/beauty).
