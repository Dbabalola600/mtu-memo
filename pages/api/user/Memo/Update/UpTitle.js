import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";



export default async function UpdateMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');





        const { id, title, content, department, college, role } = JSON.parse(req.body)



        if (title === "") {
            return res.status(290).json("done")
        } else {
            //update title
            const newTitle = await Memo.findById(id).updateOne({ title: title })
        }




        return res.status(200).json(title)



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
