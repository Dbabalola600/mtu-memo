import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";



export default async function UpdateMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');





        const { id, college } = JSON.parse(req.body)



        if (college === "") {
            return res.status(290).json("done")
        } else {
            //update title
            const newCollege = await Memo.findById(id).updateOne({ college: college })
        }




        return res.status(200).json(college)



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
