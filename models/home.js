const cards=require('../schemas/cards');
module.exports=function(req,res){
    cards.find({},function(err,card)
    {
        // sending list of all the cards
        res.render('todo',{cards:card});
    });
    
    
}