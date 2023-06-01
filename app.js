const express = require('express');
const path=require('path');
const bodyParser = require('body-parser');
const app=express();
const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop')
const contactroute=require('./routes/contactus');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroute);
app.use(shoproute);
app.use(contactroute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
});



app.listen(4000);