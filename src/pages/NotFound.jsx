import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found on the VJ Enterprises Digital Solutions website."
        path="/404"
      />
      <section className="page-hero not-found">
        <div className="container narrow">
          <p className="eyebrow">404 Page</p>
          <h1>This page is not available.</h1>
          <p>The link may have moved, or the page address may be incorrect.</p>
          <Link className="btn btn-primary" to="/">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
