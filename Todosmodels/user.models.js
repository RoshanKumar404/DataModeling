import mongoose from "mongoose";
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },

    email:{
        type:String,
        unique:true,
        requied:true,
        lowercase:true
    },

    password:{
        type:String,
        unique:true,
        required:true
    }
},{timestamps:true})

export const  User= mongoose.model("User",UserSchema)