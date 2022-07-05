import React from 'react';
import { useState } from "react";
import axios from 'axios'
import copy from "copy-to-clipboard";
function URLshortnertool() {
    const [longUrl, setlongUrl] = useState("");
    const [shortUrl,setshortUrl] = useState("");
    const [copied, setCopied] = useState(true);
    const copyUrl = () => {
        copy(shortUrl);
        setCopied(false);
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.post('http://localhost:3002/api/urls',{longUrl})
        const data = response.data.id;
        setshortUrl(data);
        copyUrl();
      }
      catch(error){
        console.log(error);
      }
    }
    return (
        <div className='shortner_tool'>
            <h2 id="shortner_heading">Get your URL shortened!</h2>

            <form onSubmit={handleSubmit} >
                <input className='shortner_inputs' placeholder='paste your long URL here '
                    type="text" 
                    value={longUrl}
                    onChange={(e) => setlongUrl(e.target.value)}
                />
                <input className='shortner_buttons' type="submit" />
        
            </form>
            <br></br>
            <span>
                <input className='shortner_inputs' placeholder='shortened URL' value = {shortUrl}></input>
                <button disabled = {copied} className='shortner_buttons'>Copy URL</button>
            </span>
        </div>
    
    )
}

export default URLshortnertool