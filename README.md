# Kent State CAE Web & Analytics Portal

## For Hiring Staff / Non-Technical Users

### What This Project Demonstrates
- Website design, layout, and content structuring
- Website maintenance and incremental updates
- UTM campaign tracking
- Page-level analytics
- Dashboard & reporting (weekly/monthly summaries)
- Performance insights (bounce rate, session duration, top pages, traffic sources, devices, etc.)
- Internal documentation & content workflows
- Demo data population for demonstration
- Non-technical editing support (content/config/colors/images)
- Deployable online (Netlify/Vercel)

### Editing Content Instructions
- All site content is stored in `/content/pages/*.json` files
- Images are in `/content/images/`
- Navigation, theme, and analytics config are in `/config/*.json`
- Edit these files directly in VS Code or any text editor

### Updating Branding/Colors/Logos
- Update `/config/theme.json` for colors and typography
- Replace images in `/content/images/` for logos and hero images

### Accessing Analytics Dashboard
- Visit `/admin/analytics` in the deployed site
- View traffic, UTM campaigns, top pages, device breakdown, and more

### Interpreting Reports
- Dashboard shows weekly/monthly summaries
- Export data to CSV
- Generate formatted monthly report

### How UTM Tracking Works
- UTM parameters (`utm_campaign`, `utm_medium`, `utm_source`) are parsed from URLs
- Analytics records store UTM data for reporting
- Use the campaign builder utility to generate UTM URLs

## For Developers

### Stack Explanation & Justification
- **Next.js**: Modern React framework, easy deployment, SEO, file-based routing
- **Tailwind CSS**: Utility-first, rapid prototyping, maintainable, supports Kent State branding
- **Chart.js**: Simple, responsive charts for analytics dashboard
- **JSON Content**: Easy for non-technical editing, readable, supports demo data

### Architecture Overview
- `/src/pages/`: Next.js routes
- `/components/`: UI components
- `/content/`: Editable content (JSON/images)
- `/config/`: Theme, navigation, analytics config
- `/public/`: Static assets
- `/utils/`: Helpers for analytics, UTM, demo data

### Deployment Instructions
- Deploy to Netlify or Vercel (see their docs)
- Production build: `npm run build`
- Start locally: `npm run dev`
- Redeploy: Push changes to main branch

### Config Files
- `/config/theme.json`: Colors, typography, dark mode
- `/config/navigation.json`: Navigation links
- `/config/analytics.json`: Analytics settings, demo mode

### Demo Mode System
- Toggle demo mode in `/config/analytics.json`
- Auto-populates analytics with fake data
- Simulates traffic, UTM events, device breakdown

### Analytics Data Format
- JSON records for visits, UTM, devices, sources
- Exportable to CSV

## Portfolio Artifacts
- Portfolio write-up, screenshots, talking points, skills mapping (see `/portfolio.md`)

---

**This project is designed to be credible, academic, and clean—matching Kent State CAE’s standards.**

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
