import { Schema, model, models } from 'mongoose';





const MemoSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["Raw", "PDF"],
        default: "Raw"
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    date: {
        type: String,
        required: true

    },
    sen: {
        type: String,
        required: true
    },
    refNo: {
        type: String
    },
    college: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Memo = models.Memo || model("Memo", MemoSchema)
export default Memo
