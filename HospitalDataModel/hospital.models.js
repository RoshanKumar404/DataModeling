import mongoose from "mongoose";
const HospitalSchema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    specialiseIn:{
        type:String,
        required:true 
    },
    
       Hospitaladdress:[
        {
            city:{
                type:String,
            reqiured:true
            },locality:{
                type:String,
            reqiured:true
            },pincode:{
                type:String,
            reqiured:true
            },landmark:{
                type:String,
            reqiured:true
            },
        }
       ]
},{timestamps:true})


export const Hospital= mongoose.model('Hospital',HospitalSchema)