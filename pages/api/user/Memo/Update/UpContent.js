import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";



export default async function UpdateMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');





        const { id, content, department, college, role } = JSON.parse(req.body)



        if (content === "") {
            return res.status(290).json("done")
        } else {
            //update title
            const newContent = await Memo.findById(id).updateOne({ content: content })
        }




        return res.status(200).json(content)



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
