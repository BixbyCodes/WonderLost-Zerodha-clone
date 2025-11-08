const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

const cookieOptions = {
  httpOnly: true,
  secure: true,        // ✅ HTTPS only (Render uses HTTPS)
  sameSite: "None",    // ✅ Required for cross-site cookies
  maxAge: 3 * 24 * 60 * 60 * 1000,
};

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Signup failed" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ message: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "Incorrect password or email" });

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) return res.json({ message: "Incorrect password or email" });

    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      message: "User logged in successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  }
};

module.exports.Logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Logout failed" });
  }
};
