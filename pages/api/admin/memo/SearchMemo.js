import connectMongo from "../../../../utils/connectMongo";
import Memo from "../../../../model/MemoModel";







export default async function SearchMemo(req, res) {
    if (req.method === "POST") {


        await connectMongo()


        const { find } = JSON.parse(req.body)
        const target = await Memo.find({ title: { $regex: find, $options: "i" } })

        console.log(target)
        return res.status(200).json(target)

    }
    else {
        return res.status(400).json({
            message: "wrong request"
        })
    }

}