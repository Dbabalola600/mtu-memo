import connectMongo from "../../../../utils/connectMongo";
import User from "../../../../model/UserModel";


export default async function DelUser(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { user } = JSON.parse(req.body)

        // console.log(_id)

        const gone = await User.findByIdAndDelete({ _id: user })

        return res.status(200).json(gone)
    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}