import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';

// Route-level code splitting for high performance
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const FastbilloDetail = lazy(() => import('./pages/FastbilloDetail.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Career = lazy(() => import('./pages/Career.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const TermsConditions = lazy(() => import('./pages/TermsConditions.jsx'));
const SummerInternship = lazy(() => import('./pages/SummerInternship.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div 
        style={{
          width: '36px',
          height: '36px',
          border: '3px solid rgba(228, 66, 45, 0.15)',
          borderTopColor: '#e4422d',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}
        aria-label="Loading page"
        role="status"
      />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/fastbillo" element={<FastbilloDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/summer-internship" element={<SummerInternship />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
