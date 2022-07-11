const express = require('express');
const router = express.Router();

//Redirecting Short URLs to Original URLs
router.get('/:short_url',(req,res)=>{
    let userurl= req.params.short_url;
    //console.log(userurl);  // need to be written in terms of async function (pending to incorporate catch block)
    try{
        Url.findOne({"urlCode":userurl}).then(url=>res.status(301).redirect(url.longUrl));
    }
    catch{
        res.status(404).send("URL is invalid");
    }
        
});