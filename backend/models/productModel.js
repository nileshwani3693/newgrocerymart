const mongoose = require("mongoose")
var Schema= mongoose.Schema;

var productSchema =new Schema({
    name:{
        type:String,
        required: [true, "Please enter product name"],
        trim:true,
       
    },
    description:{
        type:String,
        required: [true, "Please enter product name"],
        
    }, 
    price:{
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [4, "Price can't exceed 8 characters"],
        
    },
   
    images:{
            
            type:String,
            required:true
            
           
        } ,
    
    
    category:{
        type:String,
        required: [true, "Please enter product category"],
        
    },
   
   
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Product",productSchema);