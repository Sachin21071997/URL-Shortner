import React from 'react';
import Data from '../components/data';
function Footer() {
    return (
      <span className='footer'>
        <img  id = "footer_logo" src = {require('../components/images/shortlyicon.png')} alt = "footer_icon"></img> 
        <p id="footer_heading">short.ly</p>
        <p id="footer_text">Developed with &#129293; by Sachin</p>
        <span className='footer_social'>
        {
          Data.map((element,index) => {
            const {alt,src,title,href} = element;
            return (
                <span key={index} >
                    <a href={href} ><img className={alt} src={src} alt={alt} title={title}></img></a>
                  </span>
            )
        })
        }
        </span>
      </span>

    )
  }
export default Footer