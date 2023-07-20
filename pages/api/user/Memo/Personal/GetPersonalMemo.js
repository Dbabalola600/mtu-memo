import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";





export default async function GetPersonlMemo(req, res) {


    if (req.method === "POST") {

        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { name } = JSON.parse(req.body)
        if (name === "Lecturer") {
            return res.status(202).json("none")
        }else{
            if (name === "None") {
                return res.status(202).json("none")
            } else {
                const memo = await Memo.find({ role: name }).sort({ createdAt: -1 })
                return res.status(200).json(memo)
            }
        }
      



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }


}
