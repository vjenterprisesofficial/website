import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';
import { blogPosts } from '../assets/blogData.js';
import '../styles/blog.css';

const baseUrl = import.meta.env.BASE_URL;

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Stay updated with the latest digital trends, technical insights, custom WordPress engineering tips, and business growth strategies from VJ Enterprises Digital Solutions."
        path="/blog"
      />
      
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Our Blog</p>
          <h1>Insights, guides, and engineering standards for digital growth.</h1>
          <p>
            We share practical insights on web engineering, custom WordPress configurations, WooCommerce optimization, and modern tracking frameworks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Latest Posts"
            title="Read our latest industry analysis and technical guides"
            description="Deep dives into why architecture, custom integrations, and server-side configurations define digital performance in 2026."
          />

          <div className="blog-grid">
            {blogPosts.map((post) => {
              const imageSrc = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image.replace(/^\//, '')}`;
              return (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-image-wrap">
                    <img
                      className="blog-card-image"
                      src={imageSrc}
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <Link className="blog-card-link" to={`/blog/${post.slug}`}>
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
