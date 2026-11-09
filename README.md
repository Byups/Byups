# My Portfolio

Personal creative portfolio built with Next.js, Tailwind CSS, Motion, and Lucide React.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
1. Extract this ZIP.
2. Open the extracted `my-portfolio` folder in VS Code.
3. Open Terminal in VS Code and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000

## Pages
- `/` — Home, selected projects, About Me, and Contact.
- `/gallery` — all creative works in a Pinterest-inspired masonry layout, with category filters and an image preview when a work is clicked.

## Add your own work
1. Copy your images into `public/images/projects/` or `public/images/photography/`.
2. Open `data/projects.ts`.
3. Add one object for each work. Example:

   ```ts
   {
     title: "My Wedding Banner",
     category: "Banner",
     year: "2026",
     image: "/images/projects/wedding-banner.jpg",
     description: "Banner design for an event."
   }
   ```

4. Save the file. The Home Project section and Gallery page use this same data, so the new work will appear in both places.
5. Supported categories: `Banner`, `Pamphlet`, `Logo`, and `Photography`.

The Gallery automatically shuffles the order of works when the page is opened. Its masonry layout adjusts to desktop, tablet, and mobile screens.

## Personalize the portfolio
- Update the name, introduction, and social links in `components/Hero.tsx`, `components/About.tsx`, and `components/Contact.tsx`.
- Update project entries in `data/projects.ts` and replace the sample SVG files with your own images.
- Add your profile photo as `public/images/profile.jpg` and update the Hero component to display it if needed.

The project intentionally does not include `node_modules`; run `npm install` after extracting the ZIP.
