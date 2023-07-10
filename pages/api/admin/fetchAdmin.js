import connectMongo from "../../../utils/connectMongo";
import Admin from "../../../model/AdminModel";



export default async function FetchAdmin(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { _id } = JSON.parse(req.body)

        console.log('FETCHING DOCUMENTS');
        const user = await Admin.findById(_id)

        return res.status(200).json(user)

    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}