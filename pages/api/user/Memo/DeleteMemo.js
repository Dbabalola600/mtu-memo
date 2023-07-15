import User from "../../../../model/UserModel";
import Memo from "../../../../model/MemoModel";
import Inbox from "../../../../model/InboxModel";
import connectMongo from "../../../../utils/connectMongo";





export default async function DeleteMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');


        const { id } = JSON.parse(req.body)

        // delete memo
        // const gone1 = await Memo.findByIdAndDelete(id)


        const inbox = await Inbox.find()

        // go through all the read 

        for (let i = 0; i < inbox.length; i++) {
            for (let j = 0; j < inbox[i].unread.lenght; j++) {
                const gone2 = await Inbox.findById(inbox[i]._id).deleteMany({ unread: id })
            }
        }



        for (let i = 0; i < inbox.length; i++) {
            const gone3 = await Inbox.findById(inbox[i]._id).deleteOne({ read: id })
        }


        return res.json(inbox)


    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}