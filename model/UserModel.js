import { Schema, model, models } from 'mongoose';


const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: false,
      },
      lastname: {
        type: String,
        required: true,
        unique: false,
      },
      UserId: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        unique: false,
      }, 
      College:{
        type: String,
      },
      Department:{
        type: String
      },
      role:{
        type: String,
        enum: [ "Admin", "Lecturer", "VC", "DSA", "DCBAS","DCHMS"],
        default: 'Lecturer'
      }
},
{timestamps:true}
)



const User = models.User || model("User", UserSchema);
export default User