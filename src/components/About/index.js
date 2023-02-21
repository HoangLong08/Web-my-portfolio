import React from "react";
import "./style.css";

function About() {
  return (
    <section id="about">
      <div className="about-heading" data-aos="flip-left">
        <strong>About me</strong>
        <h3>Designing with passion for Problem Solving</h3>
        <a href="tel:0999999" className="btn-link">
          099-9999-999 <i className="fa-solid fa-phone-flip"></i>
        </a>
      </div>

      <div className="about-details" data-aos="fade-right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
          sapiente officiis, natus eligendi cupiditate ab perspiciatis minima
          maxime vero perferendis porro ullam commodi odio quos! Commodi
          aspernatur voluptate vel eos necessitatibus ducimus a, sequi eaque
          omnis impedit? Ea, illo quas beatae et aperiam perferendis, doloribus
          voluptatem est eveniet eum ex, sit dignissimos aliquam excepturi
          laboriosam iste nihil qui voluptate rerum nemo maiores. Eveniet quas
          fugiat laboriosam quos voluptatibus eum velit iste doloremque tempore
          incidunt dolore quod temporibus recusandae placeat sapiente impedit
          beatae numquam, cumque facere, voluptatem, id adipisci. Ullam maiores
          repellendus quidem! Porro harum natus excepturi numquam doloremque
          dolor.
        </p>
      </div>
    </section>
  );
}

export default About;
