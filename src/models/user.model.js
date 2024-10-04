import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  balance: {
    type: number,
    default: 100000,
    required: true,
  },
});

const User = mongoose.model(User, userSchema);
export { User };
