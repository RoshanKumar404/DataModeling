import mongoose from "mongoose";
const orderItemScchema= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})
 const orderSchema = new mongoose.Schema({
     orderPrice:{
        type:Number,
        required:true
     },
     customer:{
        type:mongoose.Schema.ObjectId,
        ref:"User"

     },
     orderitem:{
        type:[orderItemScchema]
     },
     address:{
        type:String,
        required:true,  

     },
     status:{
        type:String,
        enum:["PENDING", "CANCELLED", "DELIVERED"], 
        default:"PENDING"


     }

 },{timestamps:true})


 export const order = mongoose.model('model',orderSchema)