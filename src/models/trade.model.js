import mongoose from "mongoose";
import { User } from "./user.model.js";

const tradeSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      enum: ["buy", "sell"],
      required: true,
    },
    stockName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    owner: {
      id: mongoose.Schema.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

const Trade = mongoose.model("Trade", tradeSchema);

export { Trade };
