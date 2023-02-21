import React from "react";
import "./style.css";

function Languages() {
  const data = [
    {
      title: "Languages",
      contents: ["Python", "NodeJs", "Javascript", "SQL"],
    },
    {
      title: "Software",
      contents: ["Python", "NodeJs", "Javascript", "SQL"],
    },
    {
      title: "Database",
      contents: ["Mysql", "Sql Sever"],
    },
  ];
  return (
    <section id="languages" data-aos="fade">
      {data.map((item) => {
        return (
          <div className="language-box" key={item.title}>
            <h3>{item.title}</h3>
            <ul>
              {item.contents.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

export default Languages;
