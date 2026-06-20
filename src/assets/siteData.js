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
  DollarSign,
} from "lucide-react";

export const company = {
  name: "VJ Enterprises Digital Solutions",
  shortName: "VJ Enterprises",
  email: "contact@vjenterprisesdigitalsolutions.com",
  phone: "+91 7447411269",
  whatsapp: "917447411269",
  address: "Kanpur, Uttar Pradesh, India",
  domain: "https://www.vjenterprisesdigitalsolutions.com",
  tagline: "IT services and digital marketing built for measurable growth.",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const services = [
  {
    title: "Website Development",
    slug: "website-development",
    icon: Globe2,
    description:
      "Conversion-focused websites with fast performance, responsive layouts, and premium visual polish.",
    benefits: [
      "SEO-ready structure",
      "Mobile-first UI",
      "High-speed Vite builds",
    ],
    cta: "Build a website",
  },
  {
    title: "Web Application Development",
    slug: "web-application-development",
    icon: MonitorSmartphone,
    description:
      "Custom web applications, dashboards, portals, and workflow tools designed around business operations.",
    benefits: ["Scalable frontends", "Reusable components", "Clean UX flows"],
    cta: "Plan an app",
  },
  {
    title: "SEO Services",
    slug: "seo-services",
    icon: Search,
    description:
      "Technical SEO, content planning, local search, and on-page optimization to improve discoverability.",
    benefits: ["Keyword strategy", "Technical audits", "Search-ready content"],
    cta: "Improve ranking",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: Megaphone,
    description:
      "Full-funnel campaigns that connect brand messaging, paid acquisition, reporting, and remarketing.",
    benefits: ["Campaign strategy", "Funnel tracking", "Growth reporting"],
    cta: "Launch campaigns",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: MessageCircle,
    description:
      "Platform calendars, creative direction, reels, community engagement, and brand-led content systems.",
    benefits: ["Content calendars", "Creative hooks", "Audience engagement"],
    cta: "Grow social",
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    icon: Target,
    description:
      "Search, display, and remarketing campaigns tuned for qualified leads and clear budget control.",
    benefits: [
      "Intent targeting",
      "Landing page alignment",
      "Conversion tracking",
    ],
    cta: "Start Google Ads",
  },
  {
    title: "Meta Ads",
    slug: "meta-ads",
    icon: BarChart3,
    description:
      "Facebook and Instagram ad funnels with structured testing, creatives, audiences, and optimization.",
    benefits: ["Creative testing", "Audience segmentation", "Lead generation"],
    cta: "Start Meta Ads",
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    icon: Video,
    description:
      "Short-form and brand video editing for ads, reels, explainers, product promos, and social campaigns.",
    benefits: ["Motion graphics", "Hook-first edits", "Platform-ready exports"],
    cta: "Edit videos",
  },
  {
    title: "Branding and Design",
    slug: "branding-and-design",
    icon: PenTool,
    description:
      "Visual identity, brand systems, creative assets, pitch decks, and high-converting marketing design.",
    benefits: ["Brand identity", "Campaign assets", "Design systems"],
    cta: "Shape a brand",
  },
  {
    title: "Technical Consulting",
    slug: "technical-consulting",
    icon: Compass,
    description:
      "Practical technology advisory for digital transformation, vendor selection, architecture, and delivery.",
    benefits: ["Roadmaps", "Stack decisions", "Delivery guidance"],
    cta: "Book consulting",
  },
];

export const serviceHighlights = [
  {
    title: "Discovery",
    detail:
      "We map goals, audience, competitors, and current digital gaps before design starts.",
  },
  {
    title: "Build",
    detail:
      "We ship responsive web experiences, campaign assets, funnels, and analytics foundations.",
  },
  {
    title: "Optimize",
    detail:
      "We track performance, learn from users, and improve campaigns after launch.",
  },
];

export const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Reliable execution",
    detail:
      "Clear scopes, milestone updates, and delivery standards that protect your timeline.",
  },
  {
    icon: Sparkles,
    title: "Premium creative",
    detail:
      "A corporate look with the warmth, clarity, and polish modern buyers expect.",
  },
  {
    icon: LineChart,
    title: "Performance mindset",
    detail:
      "Every page, ad, and creative asset is tied to discovery, trust, or conversion.",
  },
  {
    icon: Users,
    title: "Business-first team",
    detail:
      "We translate technical work into decisions owners and marketing teams can act on.",
  },
];

export const portfolio = [
  {
    title: "Nunchaku Association of India",
    category: "Websites",
    description:
      "Official national website development and social media management program, enhancing digital visibility and online registries for martial arts.",
    tech: ["Wordpress", "Custom PHP"],
    accent: "#e4422d",
    image: "/portfolio/nunchaku-india.png",
  },
  {
    title: "Karate Bharat Portal",
    category: "Websites",
    description:
      "Custom national sports portal and registry database application designed to manage athlete memberships, event registrations, and belt ranks.",
    tech: ["Wordpress"],
    accent: "#f7bf45",
    image: "/portfolio/karate-bharat.png",
  },
  {
    title: "Swami Connector",
    category: "Websites",
    description:
      "Website development and technical product consulting for a leading supplier and distributor of electrical connectors, wire harness components, and automotive terminal solutions in India.",
    tech: ["Wordpress", "Technical Consulting"],
    accent: "#101a18",
    image: "/portfolio/swami-connector.png",
  },
  {
    title: "Sincere Advisors Campaign",
    category: "Marketing",
    description:
      "Strategic Facebook Ads campaign and lead generation funnels, successfully acquiring qualified wealth advisor client enquiries.",
    tech: ["Facebook Ads", "Meta Pixel", "Lead Generation", "Copywriting"],
    accent: "#df6f32",
    image: "/portfolio/sincere-advisors.png",
  },
  {
    title: "Nunchaku Haryana Website",
    category: "Websites",
    description:
      "State-level sports organization website highlighting regional tournament schedules, regional rules, and student registries.",
    tech: ["Wordpress"],
    accent: "#10b981",
    image: "/portfolio/nunchaku-haryana.png",
  },
];

export const testimonials = [
  {
    name: "Babul Verma",
    role: "General Secretary, Nunchaku Association of India",
    rating: 5,
    quote:
      "VJ Enterprises did an exceptional job building our official association website and managing our social media. The digital portal has greatly boosted our national reach and registrations.",
  },
  {
    name: "R P Sharma",
    role: "Presdient, Karate Bharat",
    rating: 5,
    quote:
      "The custom sports registry database and web portal developed by their team has streamlined our entire athlete registration process and tournament records. The system is extremely fast and robust.",
  },
  {
    name: "Rohit",
    role: "Director, Swami Connector India Pvt Ltd",
    rating: 5,
    quote:
      "Their web development and technical product consulting services have been crucial for our electrical connector distribution platform. They built a highly responsive site that elegantly showcases our catalog.",
  },
  {
    name: "Ali Shaikh",
    role: "Founder, Sincere Advisors",
    rating: 5,
    quote:
      "The Facebook Ads campaign and optimized lead generation funnel they set up delivered high-quality wealth management client enquiries, reducing our cost per lead significantly.",
  },
];

export const faqs = [
  {
    question: "What are the key benefits of partnering with VJ Enterprises?",
    answer:
      "Our mission is to empower businesses to leverage technology for growth and efficiency. We provide comprehensive digital solutions, from website development to online marketing, enabling you to focus on your core business while we handle the rest. Our team is dedicated to streamlining your operations and maximizing your digital potential.",
  },
  {
    question: "How do you ensure that your team is the right fit for my company's unique needs?",
    answer:
      "Our team of tech-savvy developers and creative marketers brings a unique blend of expertise. We carefully select team members based on your specific needs, ensuring a personalized and effective approach to crafting digital solutions that fit your goals.",
  },
  {
    question: "Do you offer integration options for businesses that already use specific software?",
    answer:
      "Yes, we provide custom solutions designed to integrate effortlessly with your existing systems, ensuring minimal disruption and maximum efficiency. We tailor our modules to your specific needs, providing a seamless experience for both you and your customers.",
  },
  {
    question: "What type of technical support do you provide post-implementation?",
    answer:
      "Our commitment to post-implementation support is unwavering. Our dedicated team is always available to troubleshoot issues, provide system updates, and ensure optimal performance. We offer flexible engagement models to meet your specific needs.",
  },
  {
    question: "How do you ensure your software solutions are scalable as the business grows?",
    answer:
      "We prioritize long-term sustainability in our solutions. We design systems and websites with flexible data handling, modern technologies, and exceptional coding standards. This robust foundation ensures seamless scalability and enduring value as your business grows.",
  },
];

export const processSteps = [
  {
    icon: Brush,
    title: "Brand and UX clarity",
    detail:
      "We define the right look, message hierarchy, and conversion paths.",
  },
  {
    icon: Code2,
    title: "Clean implementation",
    detail:
      "We build responsive, semantic, fast-loading interfaces with maintainable code.",
  },
  {
    icon: Rocket,
    title: "Launch and improve",
    detail:
      "We prepare deployment, SEO basics, tracking, and post-launch optimization.",
  },
];

export const team = [
  {
    name: "Om Prakash",
    role: "Founder",
    specialty: "Growth planning, client success, and solution architecture",
  },
  {
    name: "Shweta Kushwaha",
    role: "CEO, Creative Director",
    specialty: "Brand identity, campaign visuals, and UI direction",
  },
  {
    name: "Vijay Kushwaha",
    role: "Website Specialist",
    specialty: "React websites, web apps, performance, and accessibility",
  },
];

export const values = [
  "Business clarity before execution",
  "Transparent communication",
  "Responsive design by default",
  "Data-informed improvement",
  "Long-term digital ownership",
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vjenterpri1" },
  { label: "Instagram", href: "https://www.instagram.com/vjenterpri1" },
  { label: "Facebook", href: "https://www.facebook.com/vjenterpri1" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

export const statCards = [
  { value: "10+", label: "Core service capabilities" },
  { value: "90+", label: "Performance-first build target" },
  { value: "100%", label: "Responsive project delivery" },
];

export const visualIcons = [WandSparkles, ShoppingBag, BadgeCheck, Film];

export const jobs = [
  {
    title: "Frontend Developer",
    type: "Remote",
    location: "Kanpur, India",
    description:
      "Build responsive, high-performance web applications using React and modern CSS. You'll work on client websites, dashboards, and web apps that shape business growth.",
    requirements: [
      "3+ years React experience",
      "Strong CSS and responsive design",
      "Git and deployment workflows",
      "SEO best practices understanding",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Learning budget",
      "Flexible work hours",
    ],
  },
  {
    title: "SEO & Digital Marketing Specialist",
    type: "Remote",
    location: "Kanpur, India",
    description:
      "Drive organic growth and paid campaigns for our clients. Manage SEO audits, content strategy, Google Ads, Meta Ads, and analytics dashboards.",
    requirements: [
      "2+ years SEO or SEM experience",
      "Google Analytics and Search Console expertise",
      "Campaign management skills",
      "Data analysis and reporting",
    ],
    benefits: [
      "Competitive salary",
      "Performance bonus",
      "Learning budget",
      "Remote-friendly",
    ],
  },
  {
    title: "UI/UX Designer",
    type: "Remote",
    location: "Kanpur, India",
    description:
      "Design websites, apps, and digital products from concept to delivery. Create wireframes, prototypes, and visual systems that balance business goals with user needs.",
    requirements: [
      "2+ years UI/UX design",
      "Figma proficiency",
      "Web design best practices",
      "Ability to present designs to clients",
    ],
    benefits: [
      "Competitive salary",
      "Design tool subscriptions",
      "Creative freedom",
      "Collaborative team",
    ],
  },
  {
    title: "Backend Engineer",
    type: "Remote",
    location: "Kanpur, India",
    description:
      "Build scalable backend systems for web applications and services. Work with databases, APIs, and cloud infrastructure to power our digital solutions.",
    requirements: [
      "3+ years backend development",
      "Node.js or Python experience",
      "REST API design",
      "Database design and optimization",
    ],
    benefits: [
      "Competitive salary",
      "Tech learning budget",
      "Stock options",
      "Flexible schedule",
    ],
  },
];

export const internships = [
  {
    title: "Web Development Intern",
    duration: "3-6 months",
    location: "Kanpur, India",
    type: "Remote",
    description:
      "Learn modern web development by building real projects. Work with React, CSS, and JavaScript in a mentored environment. Ideal for engineering students.",
    requirements: [
      "Basic HTML, CSS, JavaScript knowledge",
      "Currently pursuing BTech/Bachelor's",
      "Willingness to learn",
      "Communication skills",
    ],
    skills: [
      "React basics",
      "Responsive design",
      "Git workflow",
      "Component development",
    ],
    stipend: "",
  },
  {
    title: "Digital Marketing Intern",
    duration: "3-6 months",
    location: "Kanpur, India",
    type: "Remote",
    description:
      "Gain hands-on experience in SEO, social media, and paid advertising. Work on real client campaigns and learn marketing analytics.",
    requirements: [
      "Marketing interest",
      "Currently pursuing Bachelor's",
      "Social media awareness",
      "Analytical mindset",
    ],
    skills: [
      "SEO basics",
      "Google Analytics",
      "Social media marketing",
      "Content calendar management",
    ],
    stipend: "₹6,000 - ₹10,000/month",
  },
  {
    title: "UI/UX Design Intern",
    duration: "3-6 months",
    location: "Kanpur, India",
    type: "Remote",
    description:
      "Create beautiful, user-friendly interfaces for web and mobile. Learn design thinking, wireframing, and prototyping in Figma.",
    requirements: [
      "Design interest or coursework",
      "Currently pursuing Bachelor's",
      "Basic design software knowledge",
      "Creative mindset",
    ],
    skills: ["Figma basics", "Wireframing", "Visual design", "User research"],
    stipend: "₹8,000 - ₹12,000/month",
  },
  {
    title: "Content Writing Intern",
    duration: "3-6 months",
    location: "Kanpur, India",
    type: "Remote",
    description:
      "Write engaging, SEO-optimized content for websites and blogs. Build portfolio pieces for tech, business, and creative niches.",
    requirements: [
      "Strong English writing",
      "Currently pursuing any Bachelor's",
      "SEO awareness",
      "Attention to detail",
    ],
    skills: [
      "Blog writing",
      "SEO copywriting",
      "Research skills",
      "Social media captions",
    ],
    stipend: "₹5,000 - ₹8,000/month",
  },
];
