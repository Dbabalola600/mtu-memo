import connectMongo from "../../../../utils/connectMongo";
import User from "../../../../model/UserModel";
import Inbox from "../../../../model/InboxModel";


export default async function newUser(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('CREATING DOCUMENT');


        const { firstname, lastname, UserId, password, College, Department, role } = JSON.parse(req.body)


        const user = await User.create({
            firstname,
            lastname,
            UserId,
            password,
            College,
            Department,
            role

        })

        if (user._id === undefined) {
            return res.status(401).json("couldn't create")
        } else {
            const inside = await Inbox.create({
                user: user._id
            })
        }


        return res.status(200).json("good job")

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}