import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      enum: ["buy", "sell"],
      required: true,
    },
    stockSymbol: {
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
  },
  { timestamps: true }
);

const Trade = mongoose.model("Trade", tradeSchema);

export { Trade };
