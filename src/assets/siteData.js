import {
  BadgeCheck,
  BarChart3,
  Brush,
  Code2,
  Compass,
  Film,
  Globe2,
  LineChart,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  Video,
  WandSparkles,
  Briefcase,
  BookOpen,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

export const company = {
  name: 'VJ Enterprises Digital Solutions',
  shortName: 'VJ Enterprises',
  email: 'contact@vjenterprisesdigitalsolutions.com',
  phone: '+91 7447411269',
  whatsapp: '917447411269',
  address: 'Kanpur, Uttar Pradesh, India',
  domain: 'https://www.vjenterprisesdigitalsolutions.com',
  tagline: 'IT services and digital marketing built for measurable growth.'
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' }
];

export const services = [
  {
    title: 'Website Development',
    slug: 'website-development',
    icon: Globe2,
    description: 'Conversion-focused websites with fast performance, responsive layouts, and premium visual polish.',
    benefits: ['SEO-ready structure', 'Mobile-first UI', 'High-speed Vite builds'],
    cta: 'Build a website'
  },
  {
    title: 'Web Application Development',
    slug: 'web-application-development',
    icon: MonitorSmartphone,
    description: 'Custom web applications, dashboards, portals, and workflow tools designed around business operations.',
    benefits: ['Scalable frontends', 'Reusable components', 'Clean UX flows'],
    cta: 'Plan an app'
  },
  {
    title: 'SEO Services',
    slug: 'seo-services',
    icon: Search,
    description: 'Technical SEO, content planning, local search, and on-page optimization to improve discoverability.',
    benefits: ['Keyword strategy', 'Technical audits', 'Search-ready content'],
    cta: 'Improve ranking'
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: Megaphone,
    description: 'Full-funnel campaigns that connect brand messaging, paid acquisition, reporting, and remarketing.',
    benefits: ['Campaign strategy', 'Funnel tracking', 'Growth reporting'],
    cta: 'Launch campaigns'
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    icon: MessageCircle,
    description: 'Platform calendars, creative direction, reels, community engagement, and brand-led content systems.',
    benefits: ['Content calendars', 'Creative hooks', 'Audience engagement'],
    cta: 'Grow social'
  },
  {
    title: 'Google Ads',
    slug: 'google-ads',
    icon: Target,
    description: 'Search, display, and remarketing campaigns tuned for qualified leads and clear budget control.',
    benefits: ['Intent targeting', 'Landing page alignment', 'Conversion tracking'],
    cta: 'Start Google Ads'
  },
  {
    title: 'Meta Ads',
    slug: 'meta-ads',
    icon: BarChart3,
    description: 'Facebook and Instagram ad funnels with structured testing, creatives, audiences, and optimization.',
    benefits: ['Creative testing', 'Audience segmentation', 'Lead generation'],
    cta: 'Start Meta Ads'
  },
  {
    title: 'Video Editing',
    slug: 'video-editing',
    icon: Video,
    description: 'Short-form and brand video editing for ads, reels, explainers, product promos, and social campaigns.',
    benefits: ['Motion graphics', 'Hook-first edits', 'Platform-ready exports'],
    cta: 'Edit videos'
  },
  {
    title: 'Branding and Design',
    slug: 'branding-and-design',
    icon: PenTool,
    description: 'Visual identity, brand systems, creative assets, pitch decks, and high-converting marketing design.',
    benefits: ['Brand identity', 'Campaign assets', 'Design systems'],
    cta: 'Shape a brand'
  },
  {
    title: 'Technical Consulting',
    slug: 'technical-consulting',
    icon: Compass,
    description: 'Practical technology advisory for digital transformation, vendor selection, architecture, and delivery.',
    benefits: ['Roadmaps', 'Stack decisions', 'Delivery guidance'],
    cta: 'Book consulting'
  }
];

export const serviceHighlights = [
  { title: 'Discovery', detail: 'We map goals, audience, competitors, and current digital gaps before design starts.' },
  { title: 'Build', detail: 'We ship responsive web experiences, campaign assets, funnels, and analytics foundations.' },
  { title: 'Optimize', detail: 'We track performance, learn from users, and improve campaigns after launch.' }
];

export const whyChooseUs = [
  { icon: ShieldCheck, title: 'Reliable execution', detail: 'Clear scopes, milestone updates, and delivery standards that protect your timeline.' },
  { icon: Sparkles, title: 'Premium creative', detail: 'A corporate look with the warmth, clarity, and polish modern buyers expect.' },
  { icon: LineChart, title: 'Performance mindset', detail: 'Every page, ad, and creative asset is tied to discovery, trust, or conversion.' },
  { icon: Users, title: 'Business-first team', detail: 'We translate technical work into decisions owners and marketing teams can act on.' }
];

export const portfolio = [
  {
    title: 'SaaS Landing Experience',
    category: 'Websites',
    description: 'A high-converting landing page system for a B2B software startup with analytics-ready sections.',
    tech: ['React', 'Vite', 'SEO', 'Analytics'],
    accent: '#e4422d'
  },
  {
    title: 'Local SEO Growth Program',
    category: 'SEO',
    description: 'Technical fixes, content clusters, and Google Business Profile optimization for a service brand.',
    tech: ['Technical SEO', 'Content', 'Local Search'],
    accent: '#f7bf45'
  },
  {
    title: 'D2C Meta Ads Funnel',
    category: 'Marketing',
    description: 'Creative testing, audience segmentation, retargeting, and weekly reporting for ecommerce leads.',
    tech: ['Meta Ads', 'Creative Testing', 'CRO'],
    accent: '#101a18'
  },
  {
    title: 'Corporate Brand Refresh',
    category: 'Branding',
    description: 'A sharper identity system with logo refinement, color standards, social templates, and pitch assets.',
    tech: ['Brand Design', 'Social Assets', 'Decks'],
    accent: '#f59e0b'
  },
  {
    title: 'Admin Workflow App',
    category: 'Apps',
    description: 'A responsive internal web application for tracking leads, service requests, and operational status.',
    tech: ['React', 'Dashboards', 'UX Systems'],
    accent: '#df6f32'
  },
  {
    title: 'Video Campaign Kit',
    category: 'Video',
    description: 'A set of short-form edits, ad variants, subtitles, and platform-specific exports for launch week.',
    tech: ['Video Editing', 'Motion', 'Reels'],
    accent: '#ef4444'
  }
];

export const testimonials = [
  {
    name: 'Ananya Rao',
    role: 'Founder, Urban Wellness Studio',
    rating: 5,
    quote: 'VJ Enterprises gave our brand a cleaner website and a steady lead engine. The team was practical, fast, and very clear about priorities.'
  },
  {
    name: 'Rahul Menon',
    role: 'Director, FinEdge Advisors',
    rating: 5,
    quote: 'Their SEO and content recommendations helped us rank for searches that actually matter to our business. Reporting was simple and useful.'
  },
  {
    name: 'Meera Shah',
    role: 'Marketing Lead, Nova Retail',
    rating: 5,
    quote: 'The ad creatives, landing pages, and tracking setup finally worked together. We saw better quality enquiries within the first campaign cycle.'
  },
  {
    name: 'Arjun Patel',
    role: 'Operations Head, BuildGrid',
    rating: 5,
    quote: 'They understood our web app requirements quickly and delivered an interface our team could use without training sessions.'
  }
];

export const faqs = [
  {
    question: 'Do you work with startups and established businesses?',
    answer: 'Yes. We support new brands that need a strong first launch and established companies that want to modernize websites, campaigns, and internal tools.'
  },
  {
    question: 'Can you manage both website development and marketing?',
    answer: 'Yes. Our work often combines websites, landing pages, SEO, social media, ads, creative assets, and performance reporting.'
  },
  {
    question: 'How quickly can a project start?',
    answer: 'Most projects begin with a discovery call, a short scope document, and a milestone plan. Smaller sites can start quickly once content and goals are clear.'
  },
  {
    question: 'Does the contact form need a backend?',
    answer: 'No. This site is configured for Web3Forms, so submissions can be sent to email without a custom backend or database.'
  }
];

export const processSteps = [
  { icon: Brush, title: 'Brand and UX clarity', detail: 'We define the right look, message hierarchy, and conversion paths.' },
  { icon: Code2, title: 'Clean implementation', detail: 'We build responsive, semantic, fast-loading interfaces with maintainable code.' },
  { icon: Rocket, title: 'Launch and improve', detail: 'We prepare deployment, SEO basics, tracking, and post-launch optimization.' }
];

export const team = [
  { name: 'Vijay Kumar', role: 'Digital Strategy Lead', specialty: 'Growth planning, client success, and solution architecture' },
  { name: 'Priya Nair', role: 'Creative Director', specialty: 'Brand identity, campaign visuals, and UI direction' },
  { name: 'Karan Iyer', role: 'Frontend Engineer', specialty: 'React websites, web apps, performance, and accessibility' },
  { name: 'Sneha Gupta', role: 'Marketing Specialist', specialty: 'SEO, paid ads, analytics, and social content systems' }
];

export const values = [
  'Business clarity before execution',
  'Transparent communication',
  'Responsive design by default',
  'Data-informed improvement',
  'Long-term digital ownership'
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vjenterpri1' },
  { label: 'Instagram', href: 'https://www.instagram.com/vjenterpri1' },
  { label: 'Facebook', href: 'https://www.facebook.com/vjenterpri1' },
  { label: 'YouTube', href: 'https://www.youtube.com/' }
];

export const statCards = [
  { value: '10+', label: 'Core service capabilities' },
  { value: '90+', label: 'Performance-first build target' },
  { value: '100%', label: 'Responsive project delivery' }
];

export const visualIcons = [WandSparkles, ShoppingBag, BadgeCheck, Film];

export const jobs = [
  {
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description: 'Build responsive, high-performance web applications using React and modern CSS. You\'ll work on client websites, dashboards, and web apps that shape business growth.',
    requirements: ['3+ years React experience', 'Strong CSS and responsive design', 'Git and deployment workflows', 'SEO best practices understanding'],
    benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Flexible work hours']
  },
  {
    title: 'SEO & Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description: 'Drive organic growth and paid campaigns for our clients. Manage SEO audits, content strategy, Google Ads, Meta Ads, and analytics dashboards.',
    requirements: ['2+ years SEO or SEM experience', 'Google Analytics and Search Console expertise', 'Campaign management skills', 'Data analysis and reporting'],
    benefits: ['Competitive salary', 'Performance bonus', 'Learning budget', 'Remote-friendly']
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description: 'Design websites, apps, and digital products from concept to delivery. Create wireframes, prototypes, and visual systems that balance business goals with user needs.',
    requirements: ['2+ years UI/UX design', 'Figma proficiency', 'Web design best practices', 'Ability to present designs to clients'],
    benefits: ['Competitive salary', 'Design tool subscriptions', 'Creative freedom', 'Collaborative team']
  },
  {
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description: 'Build scalable backend systems for web applications and services. Work with databases, APIs, and cloud infrastructure to power our digital solutions.',
    requirements: ['3+ years backend development', 'Node.js or Python experience', 'REST API design', 'Database design and optimization'],
    benefits: ['Competitive salary', 'Tech learning budget', 'Stock options', 'Flexible schedule']
  }
];

export const internships = [
  {
    title: 'Web Development Intern',
    duration: '3-6 months',
    location: 'Bengaluru, India',
    type: 'Remote-friendly',
    description: 'Learn modern web development by building real projects. Work with React, CSS, and JavaScript in a mentored environment. Ideal for engineering students.',
    requirements: ['Basic HTML, CSS, JavaScript knowledge', 'Currently pursuing BTech/Bachelor\'s', 'Willingness to learn', 'Communication skills'],
    skills: ['React basics', 'Responsive design', 'Git workflow', 'Component development'],
    stipend: '₹8,000 - ₹12,000/month'
  },
  {
    title: 'Digital Marketing Intern',
    duration: '3-6 months',
    location: 'Bengaluru, India',
    type: 'On-site',
    description: 'Gain hands-on experience in SEO, social media, and paid advertising. Work on real client campaigns and learn marketing analytics.',
    requirements: ['Marketing interest', 'Currently pursuing Bachelor\'s', 'Social media awareness', 'Analytical mindset'],
    skills: ['SEO basics', 'Google Analytics', 'Social media marketing', 'Content calendar management'],
    stipend: '₹6,000 - ₹10,000/month'
  },
  {
    title: 'UI/UX Design Intern',
    duration: '3-6 months',
    location: 'Bengaluru, India',
    type: 'Remote-friendly',
    description: 'Create beautiful, user-friendly interfaces for web and mobile. Learn design thinking, wireframing, and prototyping in Figma.',
    requirements: ['Design interest or coursework', 'Currently pursuing Bachelor\'s', 'Basic design software knowledge', 'Creative mindset'],
    skills: ['Figma basics', 'Wireframing', 'Visual design', 'User research'],
    stipend: '₹8,000 - ₹12,000/month'
  },
  {
    title: 'Content Writing Intern',
    duration: '3-6 months',
    location: 'Bengaluru, India',
    type: 'Remote',
    description: 'Write engaging, SEO-optimized content for websites and blogs. Build portfolio pieces for tech, business, and creative niches.',
    requirements: ['Strong English writing', 'Currently pursuing any Bachelor\'s', 'SEO awareness', 'Attention to detail'],
    skills: ['Blog writing', 'SEO copywriting', 'Research skills', 'Social media captions'],
    stipend: '₹5,000 - ₹8,000/month'
  }
];
