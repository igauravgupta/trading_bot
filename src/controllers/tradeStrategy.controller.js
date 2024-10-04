import { Trade } from "../models/trade.model.js";
import { User } from "../models/user.model.js";
import { getStockData } from "./stockData.controller.js";

const tradeStrategyController = async (req, res) => {
  const { name, stockName } = req.params;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // getting details of stock :[shortTermMA, longTermMA, lastDayPrice]
    const stockData = await getStockData(stockName);
    if (!stockData) {
      return res.status(404).json({ message: "Stock data not found" });
    }

    const price = stockData[2];
    let action, quantity;

    if (stockData[0] > stockData[1]) {
      // if shortTermMA > longTermMA : sell
      action = "sell";
      quantity = 10;
      user.balance += price * quantity;
    } else {
      // if shortTermMA < longTermMA : sell
      action = "buy";
      quantity = Math.floor(user.balance / price);
      user.balance -= price * quantity;
    }

    // updating balance
    await User.findOneAndUpdate({ name }, { balance: user.balance });

    const trade = await Trade.create({
      action,
      stockName,
      price,
      quantity,
      owner: { id: user._id },
    });

    return res.status(200).json(trade);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unable to perform operations", error });
  }
};

export { tradeStrategyController };
