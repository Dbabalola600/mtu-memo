import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";
import Inbox from "../../../../../model/InboxModel";





export default async function UnreadCollegeMemo(req, res) {
    if (req.method === "POST") {

        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { name, id } = JSON.parse(req.body)


        const inbox = await Inbox.find({ user: id })

        console.log(name)

        // return res.json(inbox)

        let UnreadId = []

        for (let i = 0; i < inbox[0].unread.length; i++) {
            UnreadId.push(inbox[0].unread[i])
        }

        const UnreadStruct = await Promise.all(UnreadId.map(async (info) => {
            const stuff = await Memo.findById(info).sort({ createdAt: -1 })
            return (
                stuff
            )
        }))

        let NewStruct = []

        for (let i = 0; i < UnreadStruct.length; i++) {
            if (UnreadStruct[i].college === name) {
                NewStruct.push(UnreadStruct[i])
            }
        }



        return res.json(
            NewStruct
        )

        // if (name === "None") {
        //     return res.status(202).json("none")
        // } else {
        //     const memo = await Memo.find({ department: name }).sort({ createdAt: -1 })
        //     return res.status(200).json(memo)
        // }



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
