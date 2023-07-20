import connectMongo from "../../../utils/connectMongo";
import Admin from "../../../model/AdminModel";


export default async function FetchAllAdmin(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('CREATING DOCUMENT');



        const users = await Admin.find()

        return res.json(users)
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}