import React from "react";
import "./style.css";
function Contact() {
  return (
    <section id="contact" data-aos="fade-down">
      <strong>What's Next</strong>
      <h3>Let's work together!</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        veritatis quae recusandae quo molestiae animi soluta asperiores,
        dolorum, explicabo, facilis vero. Illum laudantium vitae magni porro
        debitis voluptatem inventore ab.
      </p>
      <a
        href="mailto:longnguyen.080401@gmail.com"
        className="btn-link contact-btn"
      >
        Write me an email <i className="fa-solid fa-envelope"></i>
      </a>
    </section>
  );
}

export default Contact;
