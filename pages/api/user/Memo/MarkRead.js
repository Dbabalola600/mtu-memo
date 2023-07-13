import connectMongo from "../../../../utils/connectMongo";
import Memo from "../../../../model/MemoModel";
import Inbox from "../../../../model/InboxModel";


export default async function MarkRead(req, res) {
    if (req.method === "POST") {

        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { user, id } = JSON.parse(req.body)


        const inbox = await Inbox.find({ user: user })


        const currentIds = []


        for (let i = 0; i < inbox[0].read.length; i++) {
            currentIds.push(inbox[0].read[i])
        }



        // const NewRead = await Inbox.findById(inbox[0]._id).updateOne({ read: [id, ...currentIds] })
        const newstuff = await Inbox.updateOne(
            { _id: inbox[0]._id },
            { $push: { read: { $each: [id], $position: 0 } } },
            { new: true }
        ).exec();



        const RemoveId = []

        for (let i = 0; i < inbox[0].unread.length; i++) {
            if (inbox[0].unread[i].toString() !== id) {
                RemoveId.push(inbox[0].unread[i])
            }
        }

        //   return res.json(RemoveId)
        const newstuffUnread = await Inbox.findById(inbox[0]._id).updateOne({ unread: RemoveId })



        // const NewUnread = await Inbox.updateOne(
        //     { _id: inbox[0]._id },
        //     { $pull: { unread: id } }
        // );

        return res.json("new")











    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
