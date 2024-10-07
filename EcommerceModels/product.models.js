import mongoose from "mongoose";
const ProductDetailsSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category',
    required:true
},
Description:{
    required:true,
    type:String,
},
productImage:{
    type:String,
},
price:{
    type:Number,
    default:0
},
stock:{
    type:Number,
    default:0
},
productOwner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}

},{timestamps:true})

export const Product= mongoose.model('Product', ProductDetailsSchema)