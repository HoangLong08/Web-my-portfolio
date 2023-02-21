import React from "react";
import "./style.css";

function Process() {
  const data = [
    {
      id: "01",
      title: "Pre-Process",
      content: [
        "Collect information",
        "Personas",
        "Setup Goals",
        "Project Folder",
      ],
    },
    {
      id: "02",
      title: "Pre-Process",
      content: [
        "Collect information",
        "Personas",
        "Setup Goals",
        "Project Folder",
      ],
    },
    {
      id: "03",
      title: "Pre-Process",
      content: [
        "Collect information",
        "Personas",
        "Setup Goals",
        "Project Folder",
      ],
    },
  ];
  return (
    <section id="process" data-aos="fade">
      <div className="process-heading">
        <h3>Process</h3>
      </div>
      <div className="process-container">
        {data.map((item) => (
          <div className="process-box" key={item.id}>
            <span>{item.id}</span>
            <strong>{item.title}</strong>
            <ul>
              {item.content.map((conte) => (
                <li key={conte}>{conte}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
