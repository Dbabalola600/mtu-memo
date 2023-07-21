import Memo from "../../../../../model/MemoModel";
import connectMongo from "../../../../../utils/connectMongo";
import User from "../../../../../model/UserModel";




export default async function GetDepartments(req, res) {
    if (req.method === "GET") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');


        const users = await User.find()

        let MassDepartment = []

        for (let i = 0; i < users.length; i++) {
            MassDepartment.push(users[i].Department)
        }

        const cleanStruct = [...new Set(MassDepartment)]
        return res.json(cleanStruct)

    }
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');




        const { name } = JSON.parse(req.body)

        console.log(name)

        if (name === "None" ) {
            return res.status(202).json("none")
        } else {
            const memo = await Memo.find({ department: name }).sort({ createdAt: -1 })
            return res.status(200).json(memo)
        }

    }
    else {
        return res.status(400).json({
            notFound: true,
        });
    }
}