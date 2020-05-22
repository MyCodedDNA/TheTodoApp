const mongoose=require('mongoose');
const schema=mongoose.Schema();
// schema of the card is defined here
const cards=mongoose.model('cards',
{
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }

});
module.exports=cards;