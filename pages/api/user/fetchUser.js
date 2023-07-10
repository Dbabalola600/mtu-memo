import connectMongo from "../../../utils/connectMongo";
import User from "../../../model/UserModel";





export default async function FetchUser(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { _id } = JSON.parse(req.body)

        console.log('FETCHING DOCUMENTS');



        const user = await User.findById(_id)

        return res.status(200).json(
            user
        )


    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}