import connectMongo from "../../../../utils/connectMongo";
import Inbox from "../../../../model/InboxModel";
import Memo from "../../../../model/MemoModel";
import User from "../../../../model/UserModel";





export default async function GetMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');




        const { id } = JSON.parse(req.body)

        const thing = await Memo.findById(id)

        const Fulluser = await User.findById(thing.user)



        return res.json({
            Memo:thing,
            User: Fulluser
        })

    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}