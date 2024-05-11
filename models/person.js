import mongoose from "mongoose";
import { model, Schema, models} from "mongoose";

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
}, {timestamps: true})

export default mongoose.models.Tyson || mongoose.model("Tyson", personSchema)