import User from "../../../../model/UserModel";
import Memo from "../../../../model/MemoModel";
import Inbox from "../../../../model/InboxModel";
import connectMongo from "../../../../utils/connectMongo";

export default async function AllMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');



        const { id } = JSON.parse(req.body)


        const inbox = await Inbox.find({ user: id })


        console.log(inbox[0].unread.length)
        //read
        let ReadId = []
        for (let i = 0; i < inbox[0].read.length; i++) {
            ReadId.push(inbox[0].read[i])
        }
        const ReadStruct = await Promise.all(ReadId.map(async (info) => {
            const stuff = await Memo.findById(info).sort({ createdAt: -1 })
            return (stuff)
        }))


        //unread
        let UnreadId = []
        for (let i = 0; i < inbox[0].unread.length; i++) {
            UnreadId.push(inbox[0].unread[i])
        }
        const UnreadStruct = await Promise.all(UnreadId.map(async (info) => {
            const stuff = await Memo.findById(info).sort({ createdAt: -1 })
            return (stuff)
        }))



        let MaxId = []
        for (let i = 0; i < inbox[0].read.length; i++) {
            MaxId.push(inbox[0].read[i])
        }
        for (let i = 0; i < inbox[0].unread.length; i++) {
            MaxId.push(inbox[0].unread[i])
        }

        const MaxStruct = await Promise.all(MaxId.map(async (info) => {
            const stuff = await Memo.findById(info).sort({ createdAt: -1 })
            return (stuff)
        }))

        return res.json({
            read: ReadStruct,
            unread: UnreadStruct
        })

    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}