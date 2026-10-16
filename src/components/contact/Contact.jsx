import { profile } from "../../content";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-copy">
        <p className="section-kicker">Contact</p>
        <h2>Have a project or role where thoughtful software could help? Let’s talk.</h2>
      </div>

      <div className="contact-actions" aria-label="Contact links">
        <a href={`mailto:${profile.email}`} className="contact-link primary">
          Email
        </a>
        <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="contact-link">
          LinkedIn
        </a>
        <a href={profile.resume} download className="contact-link">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
