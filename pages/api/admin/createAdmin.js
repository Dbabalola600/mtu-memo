import Admin from "../../../model/AdminModel"
import connectMongo from "../../../utils/connectMongo";
import Inbox from "../../../model/InboxModel"


export default async function NewAdmin(req,res){
    try{
        console.log("CONNECTING TO MONGO")
        await connectMongo();
        console.log("CONNECTED TO MONGO")
        console.log("CREATING ADMIN")



        const admin = await Admin.create(req.body)

        if (admin._id === undefined) {
            return res.status(401).json("couldn't create")
        } else {
            const inside = await Inbox.create({
                user: admin._id
            })
        }


        console.log("created admin")

      return   res.status(200).json({ admin })
    }catch(error){
        console.log(error)
        res.json({ error })
    }
}