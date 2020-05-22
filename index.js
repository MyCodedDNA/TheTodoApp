
//  importing required files
const express=require('express');
const db =require("./db/db");
const cards =require("./schemas/cards");
const port=8000;

// inititalizing the app
const app=express();

// middlewares
app.use(express.urlencoded());
app.use(express.static('./static'));
app.use("/",require('./routes/home'));


// setting properties
app.set("view engine","ejs");
app.set("views","views");

app.listen(port,function(err){
    if(err)
    {
        console.log("error in listening");
        return ;
    }
    console.log("connected to express");

});