import Memo from "../../../../model/MemoModel";
import connectMongo from "../../../../utils/connectMongo";


export default async function All(req,res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');


        const all =  await Memo.find()

        // const here = await Promise.all(all)

        return res.status(200).json(all).sort({ createdAt: -1 })

    } catch (error) {
        console.log(error)
        res.json({ error })
    }
}