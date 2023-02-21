import React from "react";
import CV from "../../assets/cv/Nguyen-Vo-Hoang-Long-FT.pdf";

import "./style.css";

function Carrer() {
  const carrers = [
    {
      title: "Front end Developer",
      name: "Software",
      year: "2018-2022",
    },
    {
      title: "Back end Developer",
      name: "Software",
      year: "2018-2022",
    },
  ];

  const educations = [
    {
      title: "Front end Developer a",
      name: "Software",
      year: "2018-2022",
    },
    {
      title: "Back end Developer as",
      name: "Software",
      year: "2018-2022",
    },
  ];

  return (
    <section id="carrer">
      <div className="carrer-education">
        <div className="carrer" data-aos="fade-right">
          <h3>Carrer</h3>

          <div className="c-b-container">
            {carrers.map((item, index) => (
              <div className="c-box" key={index + item.title}>
                <h4>{item.title}</h4>
                <strong>{item.name}</strong>
                <span>{item.year}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="carrer edu" data-aos="fade-left">
          <h3>Education</h3>

          <div className="c-b-container">
            {educations.map((item, index) => (
              <div className="c-box" key={index + item.title}>
                <h4>{item.title}</h4>
                <strong>{item.name}</strong>
                <span>{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btn-c">
        <a href={CV} download className="btn-link">
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  );
}

export default Carrer;
