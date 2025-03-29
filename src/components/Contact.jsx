import React from 'react';
import '../global.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hi? Drop a message below!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </section>
  );
}
