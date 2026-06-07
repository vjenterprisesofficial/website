# VJ Enterprises Digital Solutions

Production-ready agency website built with React, Vite, React Router DOM, and modern responsive CSS.

## Features

- Home, About, Services, Portfolio, Testimonials, Contact, Privacy Policy, Terms & Conditions, and 404 pages
- Mobile-first responsive design
- Sticky navbar and mobile menu
- Dark mode toggle with saved preference
- Floating WhatsApp button and back-to-top button
- Web3Forms-ready contact form
- Portfolio category filters
- Testimonial carousel slider
- FAQ and newsletter signup UI
- SEO meta titles, descriptions, canonical URLs, Open Graph tags, Twitter cards, sitemap, robots file, and JSON-LD structured data
- GitHub Pages deployment configuration

## Folder Structure

```text
public/
  404.html
  CNAME
  logo.svg
  robots.txt
  sitemap.xml
src/
  assets/
    siteData.js
    structuredData.js
  components/
    ContactForm.jsx
    CTA.jsx
    FAQ.jsx
    FloatingActions.jsx
    Footer.jsx
    Layout.jsx
    Navbar.jsx
    Newsletter.jsx
    PortfolioCard.jsx
    SectionHeader.jsx
    SEO.jsx
    ServiceCard.jsx
    TestimonialCarousel.jsx
  pages/
    About.jsx
    Contact.jsx
    Home.jsx
    NotFound.jsx
    Portfolio.jsx
    PrivacyPolicy.jsx
    Services.jsx
    TermsConditions.jsx
    Testimonials.jsx
  styles/
    global.css
  App.jsx
  main.jsx
index.html
package.json
vite.config.js
```

## Local Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Web3Forms Setup

1. Create a free access key at [Web3Forms](https://web3forms.com/).
2. Open `src/components/ContactForm.jsx`.
3. Replace `REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY` with your Web3Forms access key.

## GitHub Pages Deployment

1. Update `homepage` in `package.json`:

```json
"homepage": "https://your-github-username.github.io/your-repository-name"
```

2. For project pages, set the Vite base path during build:

```bash
$env:VITE_BASE_PATH="/your-repository-name/"
npm run deploy
```

For a user or organization site, keep the base path as `/`:

```bash
npm run deploy
```

3. In GitHub, open repository settings and enable Pages from the `gh-pages` branch.

## Custom Domain Setup

1. Replace the value in `public/CNAME` with your real domain, for example:

```text
www.yourdomain.com
```

2. Update these files with the same production domain:

- `src/assets/siteData.js`
- `public/sitemap.xml`
- `public/robots.txt`

3. In your DNS provider, add the GitHub Pages DNS records:

- For `www`: create a `CNAME` record pointing to `your-github-username.github.io`
- For apex/root domain: create GitHub Pages `A` records from GitHub's latest Pages documentation

4. In GitHub Pages settings, add the custom domain and enable HTTPS.

## Production Notes

- Replace placeholder phone, email, address, social links, and portfolio examples in `src/assets/siteData.js`.
- Replace the Google Map placeholder in `src/pages/Contact.jsx` with your real embed iframe.
- Keep image assets compressed and use `loading="lazy"` for future raster images.
- Run Lighthouse after deployment and verify performance, SEO, accessibility, and best practices.
