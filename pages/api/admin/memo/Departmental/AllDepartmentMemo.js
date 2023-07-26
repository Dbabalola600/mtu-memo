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


        const coolStruct = []
        const results = await Promise.all(cleanStruct.map(async (name) => {
            const reep = Memo.find({ department: name }).sort({ createdAt: -1 })



            return (
                reep
            )


        }))

        for(let i =0; i<results.length; i++){
            coolStruct.push(...results[i])
        }

     
        return res.status(200).json(coolStruct)





    }
    else {
        return res.status(400).json({
            notFound: true,
        });
    }
}