import connectMongo from "../../../utils/connectMongo";
import Admin from "../../../model/AdminModel";




export default async function YeetAdmin(req, res) {
    if (req.method === "POST") {
        await connectMongo();


        const { user } = JSON.parse(req.body)


        const gone = await Admin.findByIdAndDelete({ _id: user })

        return res.status(200).json(gone)



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}

