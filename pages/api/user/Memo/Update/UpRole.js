import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";



export default async function UpdateMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');





        const { id, role } = JSON.parse(req.body)



        if (role === "") {
            return res.status(290).json("done")
        } else {
            //update title
            const newRole = await Memo.findById(id).updateOne({ role: role })
        }




        return res.status(200).json(role)



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
