const express = require('express');
const path=require('path');
const router=express.Router();
const RootDir=require('../util/path');

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(RootDir, 'view', 'contactus.html'));
  });

  router.post('/success',(req, res, next) => {
    console.log(req.body);
    res.send(`<h1>Form Submit Successfull</h1>`)
   
  });


  
module.exports=router;