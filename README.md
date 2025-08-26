# Real Estate Landing Page

A modern, responsive landing page for a real estate company built with Next.js and TypeScript.

## Features

- Animated hero section with call-to-action
- Automatic testimonial slideshow
- Property showcase grid
- Responsive design (mobile & desktop)
- Modular, production-grade TypeScript interfaces

## Project Structure

```
real-estate/
├── src/
│   ├── app/
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Testimonials.tsx
│   │   └── PropertyGrid.tsx
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── img/
│       ├── Hero.webp
│       ├── profile/
│       │   └── client-1.webp
│       └── property-1.webp ... property-6.webp
├── README.md
└── package.json
```

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the development server:**
   ```
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) to view the page.**

## Customization

- **Add properties:** Place new `.webp` images in `public/img/` and update the property grid.
- **Update testimonials:** Edit the testimonials array in `page.tsx` or use the `Testimonial` interface.
- **Navigation:** Modify links in the `Navbar` component.

## TypeScript Interfaces

See [`src/types/index.ts`](src/types/index.ts) for all shared types.

## Deployment

Deploy easily to Vercel, Netlify, or any platform supporting Next.js.