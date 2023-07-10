import User from "../../../../model/UserModel";
import Memo from "../../../../model/MemoModel"
import connectMongo from "../../../../utils/connectMongo";
import Inbox from "../../../../model/InboxModel";



export default async function NewMemo(req, res) {
    if (req.method === "POST") {

        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');


        const { user, type, title, content, sen, college, department, role } = JSON.parse(req.body)


        //person sending the memo
        const person = await User.findById(user)

        // get date
        const FullDate = new Date()
        let month = FullDate.toLocaleString('default', { month: 'long' })
        let day = FullDate.getDate()
        let year = FullDate.getFullYear()
        let ShortDate = day + "-" + month + "-" + year

        //getting users info
        const MaxUsers = await User.find()
        const CollegeUsers = await User.find({ College: college })
        const DepartmentUsers = await User.find({ Department: department })
        const RoleUsers = await User.find({ role: role })


        ///pop the individiual ids
        let MaxUsersNo = []
        let CollegeUsersNo = []
        let DepartmentUsersNo = []
        let RoleUsersNo = []


        //getting the user ids
        for (let i = 0; i < MaxUsers.length; i++) {
            MaxUsersNo.push(MaxUsers[i]._id)
        }
        for (let i = 0; i < CollegeUsers.length; i++) {
            CollegeUsersNo.push(CollegeUsers[i]._id)
        }
        for (let i = 0; i < DepartmentUsers.length; i++) {
            DepartmentUsersNo.push(DepartmentUsers[i]._id)
        }
        for (let i = 0; i < RoleUsers.length; i++) {
            RoleUsersNo.push(RoleUsers[i]._id)
        }




        //getting the different inboxes 
        const MaxInbox = await Inbox.find({ user: MaxUsersNo })
        let CollegeInbox = await Inbox.find({ user: CollegeUsersNo })
        let DepartmentInbox = await Inbox.find({ user: DepartmentUsersNo })
        let RoleInbox = await Inbox.find({ user: RoleUsersNo })







        // inbox handler




        if (type === "PDF") {

            //create the memo it self
            const memo = await Memo.create({
                type: "PDF",
                title: title,
                user: user,
                date: ShortDate,
                sen: person.firstname + " " + person.lastname,
                college: college,
                department: department,
                role: role,
                content: content
            })



            //inbox handlers
            if (college === "None") {
                if (department === "None") {
                    if (role === "None") {
                        return res.status(401).json("pick one damn")
                    } else {
                        for (let i = 0; i < RoleUsers.length; i++) {
                            const here = await Inbox.findById(RoleInbox[i]._id).updateOne({ unread: [memo._id, ...RoleInbox[i].unread] })
                        }
                    }

                } else {
                    for (let i = 0; i < DepartmentUsers.length; i++) {
                        const here = await Inbox.findById(DepartmentInbox[i]._id).updateOne({ unread: [memo._id, ...DepartmentInbox[i].unread] })
                    }
                }
            } else {

                for (let i = 0; i < CollegeUsers.length; i++) {
                    const here = await Inbox.findById(CollegeInbox[i]._id).updateOne({ unread: [memo._id, ...CollegeInbox[i].unread] })
                }
                // return res.json(NewInbox)
            }
            //end of inbox handlers
            return res.status(200).json(memo)

        } else {
            const memo = await Memo.create({
                type: "Raw",
                title: title,
                user: user,
                date: ShortDate,
                sen: person.firstname + " " + person.lastname,
                college: college,
                department: department,
                role: role,
                content: content

            })


            //inbox handlers
            if (college === "None") {
                if (department === "None") {
                    if (role === "None") {
                        return res.status(401).json("pick one damn")
                    } else {
                        for (let i = 0; i < RoleUsers.length; i++) {
                            const here = await Inbox.findById(RoleInbox[i]._id).updateOne({ unread: [memo._id, ...RoleInbox[i].unread] })
                        }
                    }

                } else {
                    for (let i = 0; i < DepartmentUsers.length; i++) {
                        const here = await Inbox.findById(DepartmentInbox[i]._id).updateOne({ unread: [memo._id, ...DepartmentInbox[i].unread] })
                    }
                }
            } else {

                for (let i = 0; i < CollegeUsers.length; i++) {
                    const here = await Inbox.findById(CollegeInbox[i]._id).updateOne({ unread: [memo._id, ...CollegeInbox[i].unread] })
                }
                // return res.json(NewInbox)
            }
            //end of inbox handlers
            return res.status(200).json(memo)
        }





    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}