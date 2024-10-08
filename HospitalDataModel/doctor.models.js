import mongoose from "mongoose";
const DoctorDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    ExperienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },

    ],
    DoctorAddress: [
        {
            city: {
                type: String,
                reqiured: true
            }, locality: {
                type: String,
                reqiured: true
            }, pincode: {
                type: String,
                reqiured: true
            }, landmark: {
                type: String,
                reqiured: true
            },
        }
    ]
}, { timestamps: true })

export const Doctor = mongoose.model('Doctor', DoctorDetailSchema)