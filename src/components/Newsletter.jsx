import { useState } from "react";
import { Send } from "lucide-react";
import { subscribeNewsletter } from "../api/newsletterApi.js";
import "../styles/newsletter.css";

export default function Newsletter() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);
setMessage("");
setStatus("");

try {
  await subscribeNewsletter(email);

  setStatus("success");
  setMessage(
    "Thank you for subscribing to our newsletter!"
  );

  setEmail("");
} catch (error) {
  setStatus("error");
  setMessage(
    error.message ||
      "Something went wrong. Please try again."
  );
} finally {
  setLoading(false);

  setTimeout(() => {
    setMessage("");
    setStatus("");
  }, 5000);
}


};

return ( <section className="newsletter"> <div> <p className="eyebrow">Newsletter</p> <h2>
Digital growth notes for busy business owners </h2> </div>

  <form
    className="newsletter-form"
    onSubmit={handleSubmit}
  >
    <label
      className="sr-only"
      htmlFor="newsletter-email"
    >
      Email address
    </label>

    <input
      id="newsletter-email"
      type="email"
      placeholder="Email address"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      required
    />

    <button
      className="btn btn-primary"
      type="submit"
      disabled={loading}
    >
      {loading
        ? "Subscribing..."
        : "Subscribe"}

      <Send size={17} />
    </button>
  </form>

  {message && (
    <div
      className={`form-message ${
        status === "success"
          ? "form-message-success"
          : "form-message-error"
      }`}
    >
      {message}
    </div>
  )}
</section>


);
}
