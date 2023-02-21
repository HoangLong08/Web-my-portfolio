import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="footer">
      <span>Copyright &copy;2023</span>
      <div className="social-links">
        <a href="#!">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#!">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#!">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <a href="#!" className="footer-logo">
        Hoang Long dev
      </a>
    </footer>
  );
}

export default Footer;
