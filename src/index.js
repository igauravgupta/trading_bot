import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import tradeRouter from "./routers/trade.router.js";
import userRouter from "./routers/user.router.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT_N0 || 8000;

app.use(express.json());
app.use("/api/trading", tradeRouter);
app.use("/api/users", userRouter);

await connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is started at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
