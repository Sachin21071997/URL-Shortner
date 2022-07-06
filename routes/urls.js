const express = require('express');
const validUrl = require('valid-url');
const short = require('shortid');

// creating express route handler
const router = express.Router();
const Url = require('../models/UrlModel');
const baseUrl = 'http:localhost:3002';
//Shortening a URL
router.post('/',(req,res)=>{
    //console.log(req.body)
    const {longUrl} = req.body;
    const urlCode = short();
    if(!validUrl.isUri(baseUrl)){
        res.status(401).send('Invalid base URL');
    }
    if(validUrl.isUri(longUrl)){
        const shortUrl = baseUrl + '/api/urls/' + urlCode;
        const url_entry = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date()
        })
        url_entry.save();
        res.status(201).send({id:shortUrl});

    }
    else{
        res.status(401).send("Invalid URL passed");
    }
    

})

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
//.catch(res.status(404).send("URL is invalid"));
//Showing List of Shortened URLs
router.get('/',(req,res)=>{
    const resp_info = [];
    Url.find().then(result=>{
        for(let i=0;i<result.length;i++){
            const url_info = {};
            url_info.longUrl = result[i].longUrl;
            url_info.shortUrl = result[i].shortUrl;
            console.log(url_info);
            resp_info.push(url_info);
            
        }
        res.status(200).send(resp_info);   
    })
});
module.exports = router;