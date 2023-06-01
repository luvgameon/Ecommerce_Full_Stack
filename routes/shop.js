const express = require('express');
const path=require('path');
const router=express.Router();
const RootDir=require('../util/path');

router.get('', (req, res, next) => {
  res.sendFile(path.join(RootDir, 'view', 'shop.html'));
  });
  
module.exports=router;