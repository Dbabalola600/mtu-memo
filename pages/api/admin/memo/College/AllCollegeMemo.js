import Memo from "../../../../../model/MemoModel";
import connectMongo from "../../../../../utils/connectMongo";
import User from "../../../../../model/UserModel";




export default async function GetColleges(req, res) {

    if (req.method === "GET") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');


        const users = await User.find()

        let MassCollege = []

        for (let i = 0; i < users.length; i++) {
            MassCollege.push(users[i].College)
        }

        const cleanStruct = [...new Set(MassCollege)]


        const coolStruct = []
        const results = await Promise.all(cleanStruct.map(async (name) => {
            const reep = Memo.find({ college: name })



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