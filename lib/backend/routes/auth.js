const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (email && password) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(401)
          .send({ status: false, message: "Email alredy exist" });
      }

      const bcryptSalt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_GEN_SALT_NUMBER));
      const hashPassword = await bcrypt.hash(password, bcryptSalt);

      const newUser = new User({
        username,
        email,
        password: hashPassword,
      });
      await newUser.save();
      const token = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.TOKEN_EXPIRES }
      );
      res
       .status(201)
       .send({ status: true, message: "User registered successfully",token });

    } else {
      res
        .status(400)
        .send({ status: false, message: "All fields are required" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res
          .status(401)
          .send({ status: false, message: "Invalid Email" });
      }

      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const token = jwt.sign(
          { userId: existingUser._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: process.env.TOKEN_EXPIRES }
        );
        res
          .status(200)
          .send({ status: true, message: "Login Successfull", token });
      } else {
        res.status(401).send({ status: false, message: "Wrong Password" });
      }
    } else {
      res
        .status(400)
        .send({ status: false, message: "All fields are required" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: error.message });
  }
});

module.exports = router;
