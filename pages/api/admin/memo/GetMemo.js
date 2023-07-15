import connectMongo from "../../../../utils/connectMongo";
import Memo from "../../../../model/MemoModel";


export default async function GetMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');




        const { id } = JSON.parse(req.body)

        const thing = await Memo.findById(id)



        return res.json(thing)

    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}