import React from 'react';

function Header(){
    return (
    <span className='header'>
        <img  className = "header_logo" src = {require('../components/images/shortlyicon.png')} alt = "header_icon"></img> 
        <p className = "ToolName">short.ly</p>
        <a id ="header_about" href = "https://www.linkedin.com/in/sachin-beejawat-b7547b135/">About</a>
        <a id = "header_contact" href = "https://www.linkedin.com/in/sachin-beejawat-b7547b135/">Contact</a>
    </span>
    )
}
export default Header
