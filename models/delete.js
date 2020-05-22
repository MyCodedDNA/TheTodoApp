const cards=require('../schemas/cards');
module.exports=function(req,res){
    // storring url query data
        let q=req.query;
        // iterating over the data and removing the elements using id in database
        for(let i of Object.keys(q))
        {
            cards.findByIdAndDelete(q[i],function(err){
                if(err)
                {
                    console.log("error in delete");
                }
            });
        }
        res.redirect("back");
    
    
    
}