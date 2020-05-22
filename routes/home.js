const express=require("express");
const routes=express.Router();
// routes to different urls and associated functions are required from models
routes.get("/",require('../models/home'));
routes.post("/form",require('../models/form'));
routes.get("/delete",require('../models/delete'));

module.exports=routes;