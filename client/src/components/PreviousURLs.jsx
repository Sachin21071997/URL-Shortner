import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
function PreviousURLs() {
  const [copyUrl, setcopyUrl] = useState("");
  const [url_history, seturl_history] = useState([]);
  function response_handler() {
    const response = axios
      .get("http://localhost:3002/api/urls/")
      .then((result) => {
        seturl_history(result.data);
        /*
        let url_info = result.data;
        let recent_urls = [];
        for(let i=url_info.length-1;i<=url_info.length-4;i--){
            recent_urls[url_info.length-1-i] = url_info[i];
        }
        seturl_history(recent_urls);
        console.log(recent_urls);
        */
      });
  }
  useEffect(() => {
    response_handler();
  }, []);
  function copy(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div class="history">
      <h2 id="history_heading">Previous URLs</h2>
      {url_history.map((element, index) => {
        const { longUrl, shortUrl } = element;
        return (
            <div className="history_grid">
              <span className="history_cell">{longUrl}</span>
              <span id="myInput" className="history_cell">
                {shortUrl};
              </span>
              <span className="history_cell">
                <button
                  onClick={() => {
                    copy(shortUrl);
                  }}
                  className="copy_button"
                >
                  Copy<i class="fa fa-copy"></i>
                </button>
              </span>
            </div>
        );
      })}
    </div>
  );
}
export default PreviousURLs;
