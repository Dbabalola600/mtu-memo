import Memo from "../../../../model/MemoModel";
import Inbox from "../../../../model/InboxModel";
import connectMongo from "../../../../utils/connectMongo";






export default async function GetSent(req,res){
    if(req.method === "POST"){
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');



        const { user } = JSON.parse(req.body)


        const sent = await Memo.find({ user: user })


        return res.json(sent)

    }else{
        return res.status(400).json({
            notFound: true,
        });
    }
}