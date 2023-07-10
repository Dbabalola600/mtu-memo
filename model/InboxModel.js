import { Schema, model, models } from 'mongoose';


const InboxSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    read: {
        type: Array,
        required: true
    },
    unread: {
        type: Array,
        required: true
    }
   
},
    { timestamps: true }
)



const Inbox = models.Inbox || model("Inbox", InboxSchema)
export default Inbox