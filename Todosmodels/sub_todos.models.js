import mongoose from "mongoose"

const SubTodos = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,

        },
        complete:{
            type:Boolean,

        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    },
    {timestamps:true});

export const Subtodo=mongoose.model("Subtodo",SubTodos)
