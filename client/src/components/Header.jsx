import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src={require("../components/images/shortlyicon.png")}
        alt="header_icon"
      ></img>
      <p className="ToolName">short.ly</p>
      <div className="links">
        <a
          id="header_about"
          href="https://www.linkedin.com/in/sachin-beejawat-b7547b135/"
        >
          About
        </a>
        <a
          id="header_contact"
          href="https://www.linkedin.com/in/sachin-beejawat-b7547b135/"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
export default Header;
