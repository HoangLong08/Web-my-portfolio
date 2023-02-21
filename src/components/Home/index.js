import React from "react";
import "./style.css";
import Avatar from "../../assets/images/avatar.webp";
// https://caferati.me/portfolio/florense-nyc
// https://caferati.me/demo/react-awesome-slider/fall
function Home() {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, My name is</strong>
        <h1>Hoang Long</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure magni
          culpa voluptatum rem commodi, exercitationem cumque at magnam error
          facere, saepe tempora praesentium quaerat consequuntur repellendus
          quibusdam corrupti? Adipisci, nihil?
        </p>
        <a href="#summery" className="btn-link">
          Scroll for me
        </a>
      </div>
      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={Avatar} alt="avatar" />
          <h2>
            Dev H.Long <br /> <span>Full-Stack Developer</span>{" "}
          </h2>
          <div className="social">
            <a href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <a href="#!" className="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
