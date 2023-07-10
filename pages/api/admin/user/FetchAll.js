import connectMongo from "../../../../utils/connectMongo";
import User from "../../../../model/UserModel";





export default async function FetchAll(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('CREATING DOCUMENT');



        const users = await User.find()

        return res.json(users)
    } catch (error) {
        console.log(error);
        res.json({ error });
    }

}