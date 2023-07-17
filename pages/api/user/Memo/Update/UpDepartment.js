import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";



export default async function UpdateMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');





        const { id, department } = JSON.parse(req.body)



        if (department === "") {
            return res.status(290).json("done")
        } else {
            //update title
            const newDepartment = await Memo.findById(id).updateOne({ department: department })
        }




        return res.status(200).json(department)



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
