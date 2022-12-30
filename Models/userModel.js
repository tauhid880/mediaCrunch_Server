import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    university: String,
    address: String,
    profileImg: String,
    coverImg: String,
    followers: [],
    following: [],
  },

  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
