import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <p className="eyebrow">Newsletter</p>
        <h2>Digital growth notes for busy business owners</h2>
      </div>
      <form className="newsletter-form">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" type="email" placeholder="Email address" required />
        <button className="btn btn-primary" type="submit">
          Subscribe <Send size={17} />
        </button>
      </form>
    </section>
  );
}
