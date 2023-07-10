import connectMongo from "../../utils/connectMongo";
import Admin from "../../model/AdminModel";
import User from "../../model/UserModel";


import { setCookie } from "cookies-next";

export default async function Login(req,res){
    if(req.method === "POST"){
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');



        const {user, password} = JSON.parse(req.body)


        const existingUser = await Admin.findOne({AdminId: user})

        if(existingUser===null){
            const existingUser = await User.findOne({UserId: user})

            if(existingUser === null){
                return res.status(402).json("not a user")
            }else{
                if(password=== existingUser.password){
                    setCookie("NormUser", existingUser._id,{ req, res, maxAge: 86400 })
                    return res.status(200).json(existingUser)
                }else{
                    return res.status(401).json("password")
                }
            }
        }else{
            if(password=== existingUser.password){
                setCookie("AdminUser", existingUser._id,{ req, res, maxAge: 86400 })
                return res.status(201).json(existingUser)
            }else{
                return res.status(401).json("password")
            }
        }

    }else{
        return (
            res.status(400).json("ERROR")
        )
    }
}



