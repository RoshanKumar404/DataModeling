import mongoose, { NativeBuffer } from "mongoose";
const pataientDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    address: [
        {}
    ],
    gender: {
        type: String,
        enum: ["male", "female", "trans", "unknown"],
        default: "unknown",
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-", "NotTested"],
        default: "NotTested"
    },
    DignosedWith: {
        type: String,
        required: true
    },
    DiagnosedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }


}, { timestamps: true })

export const pataient = mongoose.model('patient', pataientDetailsSchema)