import mongoose from "mongoose";
import { model, Schema, models} from "mongoose";

const shiftSchema = new mongoose.Schema({
    date:{type:Date, required:true},
    startTime:{type:Date, required:true},
    endTime:{type:Date, required:true},
    totalHours: {type:Number, required:true}
})

export default mongoose.models.Shift || mongoose.model("Shift", shiftSchema)