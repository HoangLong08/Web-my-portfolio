import React from "react";
import "./style.css";
import CV from "../../assets/cv/Nguyen-Vo-Hoang-Long-FT.pdf";
function Summery() {
  return (
    <section id="summery">
      <div className="summery-heading" data-aos="fade-right">
        <strong>My skillet</strong>
        <h2>Lorem ipsum dolor sit amet consectetur. Nostrum, dicta!</h2>
        <a href={CV} download className="btn-link">
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summery-details" data-aos="fade-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vero.
          Reiciendis, quas quasi. Eum, odit soluta facilis totam, error
          accusamus vitae consectetur vero aspernatur aut quia esse nulla? Natus
          ea qui nihil voluptatum iusto quasi perspiciatis quos, laboriosam
          eveniet quod animi reprehenderit. Impedit praesentium nesciunt, iusto
          esse voluptas laudantium minus odit ullam illum tenetur eum et nihil,
          perferendis at libero facilis eligendi! Beatae velit reiciendis minima
          necessitatibus, porro perspiciatis, perferendis non assumenda, tenetur
          quasi omnis suscipit deserunt corrupti expedita repellat modi? Laborum
          officiis quas adipisci tempora voluptate sunt voluptates minus
          doloribus totam quo. Totam tempora quasi qui consequatur assumenda
          quae?
        </p>
      </div>
    </section>
  );
}

export default Summery;
