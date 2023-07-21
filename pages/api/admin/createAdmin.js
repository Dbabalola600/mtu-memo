import Admin from "../../../model/AdminModel"
import connectMongo from "../../../utils/connectMongo";
import Inbox from "../../../model/InboxModel"


export default async function NewAdmin(req,res){
    if(req.method === "POST"){
        console.log("CONNECTING TO MONGO")
        await connectMongo();
        console.log("CONNECTED TO MONGO")
        console.log("CREATING ADMIN")

        const { firstname, lastname, AdminId, email, password, role } = JSON.parse(req.body)



        const admin = await Admin.create({
            firstname: firstname,
            lastname: lastname,
            AdminId: AdminId,
            email: email,
            password: password,
            role: "Admin"
        })

        if (admin._id === undefined) {
            return res.status(401).json("couldn't create")
        } else {
            const inside = await Inbox.create({
                user: admin._id
            })
        }


        console.log("created admin")

      return   res.status(200).json({ admin })
    }else{
        console.log(error)
        res.json({ error })
    }
}