# Kent State CAE Web & Analytics Portal (Demo)

**This demo website was designed and created by Ethan Boicey as a portfolio project for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.**

---

## For Hiring Staff / Non-Technical Users

### What This Project Demonstrates
- Modern website design, layout, and content structuring
- Easy website maintenance and updates
- UTM campaign tracking for marketing
- Page-level analytics and reporting
- Dashboard with weekly/monthly summaries
- Performance insights (bounce rate, session duration, top pages, traffic sources, devices, etc.)
- Internal documentation and content workflows
- Demo data population for demonstration
- Non-technical editing support (content/config/colors/images)
- Deployable online (Netlify/Vercel)

### How to Edit Content (No Coding Required)

**All content and settings are stored in easy-to-edit files.**

#### 1. Change Page Content
- Go to the `/content/pages/` folder.
- Open the relevant file (e.g., `programs.json`, `research.json`, `faculty.json`, `labs.json`, `news.json`).
- Edit text, add new items, or change descriptions directly in the file.
- Example: To add a new program, add an object to the `"programs"` array in `programs.json`.

#### 2. Change Images (Logo, Hero, etc.)
- Go to the `/public/` folder.
- Replace `logo.jpg` or `hero.jpg` with your new image file.
- Make sure the new file has the same name (or update the reference in the code if you change the filename).
- You can drag and drop images into this folder using VS Code or your file explorer.

#### 3. Update Navigation Links
- Go to `/config/navigation.json`.
- Edit the `"links"` array to add, remove, or rename navigation items.

#### 4. Change Colors and Typography
- Go to `/config/theme.json`.
- Update color codes or font names to change the site’s look and feel.
- Example: Change the value for `"navy"` to update the main blue color.

#### 5. Edit Analytics/Demo Mode
- Go to `/config/analytics.json`.
- Toggle `"demoMode"` to `true` or `false` to enable/disable demo data.

#### 6. Save Changes
- After editing, save the file. The website will automatically update if running locally or after redeployment.

**No Coding Required:**
- All edits are made by opening and saving files or uploading images—no programming knowledge needed.

---

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

---

## Portfolio Artifacts
- Portfolio write-up, screenshots, talking points, skills mapping (see `/portfolio.md`)

---

**This demo website was designed and created by Ethan Boicey as a portfolio project for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.**
