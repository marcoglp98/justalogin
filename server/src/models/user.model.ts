import { Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  password: String;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "userdata" }
);

const User = model<User>("User", userSchema);

export default User;
