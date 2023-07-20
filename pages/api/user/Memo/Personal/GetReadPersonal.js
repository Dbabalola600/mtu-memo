import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";
import Inbox from "../../../../../model/InboxModel";






export default async function readPersonalMemo(req, res) {
    if (req.method === "POST") {

        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { name, id } = JSON.parse(req.body)


        const inbox = await Inbox.find({ user: id })

        // console.log(name)

        // return res.json(inbox)

        let readId = []

        for (let i = 0; i < inbox[0].read.length; i++) {
            readId.push(inbox[0].read[i])
        }

        const ReadStruct = await Promise.all(readId.map(async (info) => {
            const stuff = await Memo.findById(info).sort({ createdAt: -1 })
            return (
                stuff
            )
        }))

        let NewStruct = []

        for (let i = 0; i < ReadStruct.length; i++) {
            if (ReadStruct[i].role === name && name !== "None" && name !=="Lecturer") {
                NewStruct.push(ReadStruct[i])
            }
        }



        return res.json(
            NewStruct
        )

       



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
