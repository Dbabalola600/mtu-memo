import connectMongo from "../../../../../utils/connectMongo";
import User from "../../../../../model/UserModel";




export default async function Update(req, res) {
    if (req.method == "POST") {

        await connectMongo();
        console.log('CONNECTED TO MONGO');


        const { id, fname, lname, Uid, department, college, role } = JSON.parse(req.body)

        if (lname === '') {
            return res.status(200).json({
                message: "BLANK UPDATED"
            })
        } else {
            const newName = await User.findById(id).updateOne({ lastname: lname })
        }
        return res.status(200).json({
            message: "UPDATED"
        })

    } else {
        return res.status(401).json({
            message: "WRONG REQUEST"
        })
    }
}
