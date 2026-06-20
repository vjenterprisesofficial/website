import { useState } from "react";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function JobCard({ data, cardType, onApply }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="job-list-item">
      <div className="job-summary">
        <div className="job-info">
          <h3>{data.title}</h3>

          <div className="job-meta">
            <span
              className={`tag ${
                cardType === "internship" ? "internship-tag" : ""
              }`}
            >
              {data.type}
            </span>

            {cardType === "job" ? (
              <span className="job-location">
                <MapPin size={16} />
                {data.location}
              </span>
            ) : (
              <>
                <span className="job-location">
                  <Clock size={16} />
                  {data.duration}
                </span>

                <span className="job-location">
                  <MapPin size={16} />
                  {data.location}
                </span>
              </>
            )}
          </div>

          <p className="job-description">{data.description}</p>
        </div>

        <div className="job-actions">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => onApply(data)}
          >
            Apply Now
          </button>

          <button
            type="button"
            className="read-more-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="job-details">
          {cardType === "job" ? (
            <>
              <div>
                <h4>Requirements</h4>

                <ul className="job-list">
                  {data.requirements?.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Benefits</h4>

                <ul className="job-list">
                  {data.benefits?.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4>Skills You'll Learn</h4>

                <ul className="job-list">
                  {data.skills?.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Requirements</h4>

                <ul className="job-list">
                  {data.requirements?.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* {data.stipend && (
                  <div className="stipend-box">
                    <strong>Stipend:</strong> {data.stipend}
                  </div>
                )} */}
              </div>
            </>
          )}
        </div>
      )}
    </article>
  );
}
