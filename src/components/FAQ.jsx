import SectionHeader from './SectionHeader.jsx';
import { faqs } from '../assets/siteData.js';

export default function FAQ() {
  return (
    <section className="section faq-section">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions clients ask before we start"
          description="Straight answers about scope, launch, marketing, and lead capture."
          align="center"
        />
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
