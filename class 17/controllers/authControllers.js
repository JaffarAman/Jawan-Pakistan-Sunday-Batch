const userModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authControllers = {
  signUp: async (req, res) => {
    const { name, email, password, mobileNumber } = req.body;

    if (!name || !email || !password || !mobileNumber) {
      res.json({ message: "Requried Fields are missing." });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const objToSend = {
      name,
      email,
      password: hashPassword,
      mobile_number: mobileNumber,
    };
    console.log(objToSend, "objToSend");
    userModel.findOne({ email }, (err, user) => {
      if (err) {
        console.log(err, "error");
        res.status(500).json({
          message: " SomeThing Went Wrong! ",
        });
      } else {
        console.log(user, "user");
        if (user) {
          res.status(400).json({ message: "email address already use!" });
        } else {
          userModel.create(objToSend, (error, data) => {
            if (error) {
              console.log(error, "error");
              res.status(500).json({
                message: "SomeThing Went Wrong!",
              });
            } else {
              res.status(200).json({
                message: "user successfully signup!",
                data: data,
                status: true,
              });
            }
          });
        }
      }
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Required fields are missing!" });
      return;
    }

    userModel.findOne({ email }, async (err, user) => {
      if (err) {
        console.log(err, "error");
        res.status(500).json({
          message: "SomeThing Went Wrong!",
        });
      } else {
        if (user) {
          const isPasswordMatch = await bcrypt.compare(password, user.password);
          console.log(isPasswordMatch, "isPasswordMatch");
          if (isPasswordMatch) {
            const tokenObj = {
              ...user,
            };
            const token = jwt.sign(tokenObj, "helloworld");
            console.log(token, "token");
            res.status(200).json({
              message: "user successfully login",
              data: user,
              status: true,
              token,
            });
          } else {
            res.status(400).json({
              message: "credential error!",
            });
          }
        } else {
          res.status(400).json({
            message: "credential error!",
          });
        }
      }
    });
  },
};

module.exports = authControllers;
