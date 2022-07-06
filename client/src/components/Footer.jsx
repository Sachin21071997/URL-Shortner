import React from "react";
import Data from "../components/data";

export default function Footer() {
  return (
    <div className="footer">
      <img
        id="footer_logo"
        src = {require("../components/images/shortlyicon.png")}
        alt="footer_icon"
      ></img>
      <div className="footer_text">
        <p>short.ly</p>
        <p id="dev_info">Developed with &#129293; by Sachin</p>
      </div>
      <div className="footer_links">
        {Data.map((element, index) => {
          const { alt, src, title, href } = element;
          return (
            <a href={href}>
              <img
                className={"footer_img"}
                src={src}
                alt={alt}
                title={title}
              ></img>
            </a>
          );
        })}
      </div>
    </div>
  );
}