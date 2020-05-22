const cards=require('../schemas/cards');
module.exports=function(req,res){
        // storing all the data from the form to database
        cards.create(req.body);
        res.redirect("back");
    
    
    
}