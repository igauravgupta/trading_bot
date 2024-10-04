import { User } from "../models/user.model.js";

// creates dummy user for trading
const register = aysnc((req, res) => {
  const { name } = req.params;
  const user = User.create({ name: name });
  res.status(500).json(user);
});

export { register };
