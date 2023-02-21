import React, { useState, useEffect } from "react";
import "./style.css";

function Theme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty("--bgColor", "#162052");
      document.documentElement.style.setProperty("--whiteColor", "#fff");
      // document.documentElement.style.setProperty("--grayColor", "#bbb");
      // document.documentElement.style.setProperty("--blueColor", "#689af8");
    } else {
      document.documentElement.style.setProperty("--bgColor", "#fdfdfd");
      document.documentElement.style.setProperty("--whiteColor", "#000");
      // document.documentElement.style.setProperty("--grayColor", "#bbb");
      // document.documentElement.style.setProperty("--blueColor", "#689af8");
    }
  }, [dark]);

  return (
    <div id="theme">
      {dark ? (
        <i className="fa-solid fa-sun" onClick={() => setDark(false)}></i>
      ) : (
        <i className="fa-solid fa-moon" onClick={() => setDark(true)}></i>
      )}
    </div>
  );
}

export default Theme;
