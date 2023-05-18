const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("please provide email ane password", 400);
  }
  res.send("Fake Login/Register/SignUp Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `He is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
