import Admin from "../../../model/AdminModel"
import connectMongo from "../../../utils/connectMongo";



export default async function NewAdmin(req,res){
    try{
        console.log("CONNECTING TO MONGO")
        await connectMongo();
        console.log("CONNECTED TO MONGO")
        console.log("CREATING ADMIN")



        const admin = await Admin.create(req.body)


        console.log("created admin")

        res.json({ admin })
    }catch(error){
        console.log(error)
        res.json({ error })
    }
}