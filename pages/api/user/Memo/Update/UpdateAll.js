import connectMongo from "../../../../../utils/connectMongo";
import Memo from "../../../../../model/MemoModel";



export default async function UpdateMemo(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');





        const { id, title, content, department, college, role } = JSON.parse(req.body)



        // for (let i = 0; i < 5; i++) {
            if (title === "") {
                if (content === "") {
                    if (department === "") {
                        if (college === "") {
                            if (role === "") {
                                return res.status(200).json("done")
                            } else {
                                //update role 
                               const newRole = await Memo.findById(id).updateOne({role: role})
                            }
                        } else {
                            //update college
                            const newCollege = await Memo.findById(id).updateOne({college: college})
                        }
                    } else {
                        //update department
                        const newDepartment = await Memo.findById(id).updateOne({department: department})
                    }
                } else {
                    //update content
                    const newContent = await Memo.findById(id).updateOne({content: content})
                }
            } else {
                //update title
                const newTitle = await Memo.findById(id).updateOne({title: title})
            }
            // return res.json(i)
        // }



        return res.json()



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}
