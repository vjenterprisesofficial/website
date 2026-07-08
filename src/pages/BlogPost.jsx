import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import CTA from '../components/CTA.jsx';
import NotFound from './NotFound.jsx';
import { blogPosts } from '../assets/blogData.js';
import { company } from '../assets/siteData.js';
import '../styles/blog.css';

const baseUrl = import.meta.env.BASE_URL;

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const imageSrc = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image.replace(/^\//, '')}`;
  const canonicalUrl = `${company.domain}/blog/${post.slug}`;
  const fullImageUrl = post.image.startsWith('http') ? post.image : `${company.domain}${post.image}`;

  // Structured Data Schema for Search Engines (JSON-LD)
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": [fullImageUrl],
    "datePublished": "2026-07-08T10:00:00+05:30",
    "dateModified": "2026-07-08T10:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": company.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${company.domain}/vj-enterprises-logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  // Helper function to format list items (bold text before colon)
  const formatItemText = (text) => {
    if (text.includes(': ')) {
      const parts = text.split(': ');
      const title = parts[0];
      const desc = parts.slice(1).join(': ');
      return (
        <>
          <strong>{title}:</strong> {desc}
        </>
      );
    }
    return text;
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.image}
        schema={schema}
      />

      <article className="blog-post-container container">
        <Link className="back-to-blog-btn" to="/blog">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="blog-post-header">
          <div className="blog-post-meta">
            <span className="blog-post-category">{post.category}</span>
            <span><Calendar size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {post.date}</span>
            <span><Clock size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {post.readTime}</span>
            <span><User size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> By {post.author}</span>
          </div>
          <h1>{post.title}</h1>
        </header>

        <div className="narrow">
          <img
            className="blog-post-hero-image"
            src={imageSrc}
            alt={post.title}
          />

          <div className="blog-post-content">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return <p key={index}>{block.text}</p>;
                case 'heading':
                  if (block.level === 3) {
                    return <h3 key={index}>{block.text}</h3>;
                  }
                  return <h2 key={index}>{block.text}</h2>;
                case 'quote':
                  return <blockquote key={index}>{block.text}</blockquote>;
                case 'list':
                  if (block.style === 'ordered') {
                    return (
                      <ol key={index}>
                        {block.items.map((item, i) => (
                          <li key={i}>{formatItemText(item)}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <ul key={index}>
                      {block.items.map((item, i) => (
                        <li key={i}>{formatItemText(item)}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          <footer className="blog-post-footer">
            <h3>Target & Secondary Keywords</h3>
            <div className="blog-tags">
              {post.keywords.map((kw, idx) => (
                <span key={idx} className="blog-tag">
                  #{kw.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </article>

      <CTA />
    </>
  );
}
