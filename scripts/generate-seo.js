import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/assets/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');
const DOMAIN = 'https://vjenterprisesdigitalsolutions.com';

// Verify build exists
if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error('Error: Build files not found in dist. Run "npm run build" first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf-8');

// Define static routes and their SEO data
const staticRoutes = [
  {
    path: '',
    title: 'VJ Enterprises Digital Solutions | IT Services & Digital Marketing Agency',
    description: 'VJ Enterprises Digital Solutions builds premium websites, web applications, SEO, ads, social media, branding, video editing, and technical consulting solutions.'
  },
  {
    path: 'about',
    title: 'About Us | VJ Enterprises Digital Solutions',
    description: 'Learn about VJ Enterprises Digital Solutions, our mission, vision, values, and team approach to IT services and digital marketing.'
  },
  {
    path: 'services',
    title: 'Services | VJ Enterprises Digital Solutions',
    description: 'Explore website development, SEO, digital marketing, social media marketing, Google Ads, Meta Ads, video editing, branding, and consulting services.'
  },
  {
    path: 'portfolio',
    title: 'Portfolio | VJ Enterprises Digital Solutions',
    description: 'View portfolio examples across website development, web applications, SEO, digital marketing, branding, and video editing.'
  },
  {
    path: 'careers',
    title: 'Careers | VJ Enterprises Digital Solutions',
    description: 'Join VJ Enterprises and build innovative digital solutions.'
  },
  {
    path: 'contact',
    title: 'Contact Us | VJ Enterprises Digital Solutions',
    description: 'Contact VJ Enterprises Digital Solutions for websites, web applications, SEO, digital marketing, social media, ads, branding, video editing, and consulting.'
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | VJ Enterprises Digital Solutions',
    description: 'Privacy policy for VJ Enterprises Digital Solutions website visitors and enquiry form users.'
  },
  {
    path: 'terms-and-conditions',
    title: 'Terms & Conditions | VJ Enterprises Digital Solutions',
    description: 'Terms and conditions for using the VJ Enterprises Digital Solutions website.'
  },
  {
    path: 'summer-internship',
    title: 'Summer Training & Internship Program 2026 | VJ Enterprises Digital Solutions',
    description: 'Kickstart your career this summer with VJ Enterprises. Choose from 6 specialized domains. Hands-on projects, certification, LOR, and expert mentorship.'
  },
  {
    path: 'blog',
    title: 'Blog & Insights | VJ Enterprises Digital Solutions',
    description: 'Stay updated with the latest digital trends, technical insights, custom WordPress engineering tips, and business growth strategies from VJ Enterprises Digital Solutions.'
  }
];

// Helper to inject SEO tags into HTML template
function generateSeoHtml(title, description, routePath, options = {}) {
  let html = baseHtml;
  const canonicalUrl = routePath === '' ? `${DOMAIN}/` : `${DOMAIN}/${routePath}/`;
  const imageUrl = options.image 
    ? (options.image.startsWith('http') ? options.image : `${DOMAIN}${options.image}`)
    : `${DOMAIN}/vj-enterprises-logo.png`;

  // 1. Replace title
  const titleRegex = /<title>[\s\S]*?<\/title>/i;
  const newTitle = `<title>${title}</title>`;
  if (titleRegex.test(html)) {
    html = html.replace(titleRegex, newTitle);
  } else {
    html = html.replace('</head>', `  ${newTitle}\n</head>`);
  }

  // 2. Replace description
  const descRegex = /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i;
  const newDesc = `<meta name="description" content="${description}" />`;
  if (descRegex.test(html)) {
    html = html.replace(descRegex, newDesc);
  } else {
    html = html.replace('</head>', `  ${newDesc}\n</head>`);
  }

  // 3. Construct other meta tags
  let extraMeta = `
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${options.type || 'website'}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  `;

  if (options.keywords && options.keywords.length > 0) {
    extraMeta += `  <meta name="keywords" content="${options.keywords.join(', ')}" />\n`;
  }

  if (options.schema) {
    extraMeta += `  <script type="application/ld+json" data-schema="page">${JSON.stringify(options.schema)}</script>\n`;
  }

  html = html.replace('</head>', `${extraMeta}\n</head>`);
  return html;
}

console.log('Generating pre-rendered static HTML files for SEO...');

// Process static routes
for (const route of staticRoutes) {
  const dirPath = path.join(DIST_DIR, route.path);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const seoHtml = generateSeoHtml(route.title, route.description, route.path);
  fs.writeFileSync(path.join(dirPath, 'index.html'), seoHtml, 'utf-8');
  console.log(`- Generated static route: /${route.path}`);
}

// Process blog routes
for (const post of blogPosts) {
  const routePath = `blog/${post.slug}`;
  const dirPath = path.join(DIST_DIR, routePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const postTitle = `${post.title} | VJ Enterprises Digital Solutions`;
  const postDesc = post.metaDescription || post.excerpt;

  // JSON-LD Blog Schema
  const fullImageUrl = post.image.startsWith('http') ? post.image : `${DOMAIN}${post.image}`;
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": postDesc,
    "image": [fullImageUrl],
    "datePublished": "2026-07-08T10:00:00+05:30",
    "dateModified": "2026-07-08T10:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "VJ Enterprises Digital Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/vj-enterprises-logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${DOMAIN}/${routePath}/`
    }
  };

  const seoHtml = generateSeoHtml(postTitle, postDesc, routePath, {
    type: 'article',
    image: post.image,
    keywords: post.keywords,
    schema: postSchema
  });

  fs.writeFileSync(path.join(dirPath, 'index.html'), seoHtml, 'utf-8');
  console.log(`- Generated blog route: /${routePath}`);
}

// Update sitemap.xml
console.log('Generating dynamic sitemap.xml...');
let sitemapUrls = [
  ...staticRoutes.map(r => ({
    loc: r.path === '' ? `${DOMAIN}/` : `${DOMAIN}/${r.path}/`,
    priority: r.path === '' ? '1.0' : (r.path === 'services' ? '0.9' : '0.8')
  })),
  ...blogPosts.map(p => ({
    loc: `${DOMAIN}/blog/${p.slug}/`,
    priority: '0.8'
  }))
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent, 'utf-8');
// Also write to public/sitemap.xml so it persists in the source directory
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapContent, 'utf-8');
console.log('- Generated sitemap.xml in dist/ and public/');

console.log('SEO generation complete!');
