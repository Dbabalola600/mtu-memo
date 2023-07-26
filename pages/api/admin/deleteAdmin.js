import connectMongo from "../../../utils/connectMongo";
import Admin from "../../../model/AdminModel";


export default async function DelAdmin(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { _id } = JSON.parse(req.body)

        console.log(_id)

        const gone = await Admin.findByIdAndDelete({ _id: _id })

        return res.status(200).json(gone)
    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}