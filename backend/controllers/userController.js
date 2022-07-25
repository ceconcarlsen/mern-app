const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_KEY, { expiresIn: "3d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await User.signin(email, password); //static method
    res.status(200).json({ email, user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password); //static method

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
