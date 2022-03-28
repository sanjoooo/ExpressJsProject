const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let Menu=new Schema({
    id:Number,
    title:String,  //{    type:String  },
    category:String,
    price:Number,  //{ type:String},
    img:Buffer  
    
  },{
      collection:'menu'
  });


  //exporting my model 
module.exports=mongoose.model('Menu',Menu);