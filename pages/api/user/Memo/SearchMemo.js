import connectMongo from "../../../../utils/connectMongo";
import Memo from "../../../../model/MemoModel";
import Inbox from "../../../../model/InboxModel";



export default async function SearchMemo(req, res) {
    if (req.method === "POST") {


        await connectMongo()


        const { find, id } = JSON.parse(req.body)
        const target = await Memo.find({ title: { $regex: find, $options: "i" } })







        const inbox = await Inbox.find({ user: id })


        // console.log(inbox[0].unread.length)
        //read
        let ReadId = []
        for (let i = 0; i < inbox[0].read.length; i++) {
            ReadId.push(inbox[0].read[i])
        }
        const ReadStruct = await Promise.all(ReadId.map(async (info) => {
            const stuff = await Memo.findById(info).find({ title: { $regex: find, $options: "i" } }).sort({ createdAt: -1 })
            return (stuff)
        }))


        //unread
        let UnreadId = []
        for (let i = 0; i < inbox[0].unread.length; i++) {
            UnreadId.push(inbox[0].unread[i])
        }
        const UnreadStruct = await Promise.all(UnreadId.map(async (info) => {
            const stuff = await Memo.findById(info).find({ title: { $regex: find, $options: "i" } }).sort({ createdAt: -1 })
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
            const stuff = await Memo.findById(info).find({ title: { $regex: find, $options: "i" } }).sort({ createdAt: -1 })
            return (stuff)
        }))

        // console.log(MaxStruct)
        console.log(ReadStruct)
        return res.json({
            read: ReadStruct,
            unread: UnreadStruct
        })







        // return res.status(200).json(target)

    } else {
        return res.status(400).json({
            message: "wrong request"
        })
    }
}

