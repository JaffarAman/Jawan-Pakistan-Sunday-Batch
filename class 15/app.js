const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/userSchema");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middlewares = require("./middleware");

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URI = `mongodb+srv://admin:admin12345@cluster0.jp1i58x.mongodb.net/auth_app`;

mongoose
  .connect(BASE_URI)
  .then((res) => console.log("mongoDb Connect"))
  .catch((err) => console.log(err, "error"));

app.use(express.json());
app.use(cors());

app.post("/api/signup", async (req, res) => {
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

  userModel.findOne({ email }, (err, user) => {
    if (err) {
      console.log(err, "error");
      res.json({
        message: "SomeThing Went Wrong!",
      });
    } else {
      console.log(user, "user");
      if (user) {
        res.json({ message: "email address already use!" });
      } else {
        userModel.create(objToSend, (error, data) => {
          if (error) {
            console.log(error, "error");
            res.json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.json({
              message: "user successfully signup!",
              data: data,
              status: true,
            });
          }
        });
      }
    }
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({ message: "Required fields are missing!" });
    return;
  }

  userModel.findOne({ email }, async (err, user) => {
    if (err) {
      console.log(err, "error");
      res.json({
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
          res.json({
            message: "user successfully login",
            data: user,
            status: true,
            token,
          });
        } else {
          res.json({
            message: "credential error!",
          });
        }
      } else {
        res.json({
          message: "credential error!",
        });
      }
    }
  });
});

app.get("/api/check", middlewares.authMiddleware, (request, response) => {
  response.send("API hit....!");
});

// app.get("/api/user/:id", (req, res, next) => {
//   // const id = req.query;
//   const { id } = req.params;
//   const _id = id;
//   userModel.findById(_id, (err, data) => {
//     if (err) {
//       res.json({
//         message: `error : ${err}`,
//       });
//     } else {
//       res.json({ data, message: "find user" });
//     }
//   });
// });

// app.post("/api/user", (req, res, next) => {
//   console.log("body", req.body);

//   userModel.create(req.body, (error, data) => {
//     if (error) {
//       res.send("error", error);
//     } else {
//       res.json({
//         message: "user successfully create.",
//         data,
//       });
//     }
//   });
// });

// app.put("/api/user", (req, res, next) => {
//   const { id, isActive, name } = req.body;

//   userModel.findByIdAndUpdate(
//     id,
//     { isActive, name },
//     { new: true },
//     (err, data) => {
//       if (err) {
//         res.json({
//           message: `error : ${err}`,
//         });
//       } else {
//         res.json({
//           message: "user update",
//           data: data,
//         });
//       }
//     }
//   );
// });

// app.delete("/api/user", (req, res, next) => {
//   res.send("delete single user");
// });

// app.get("/api/alluser", (req, res) => {
//   userModel.find({}, (err, users) => {
//     if (err) {
//       res.json({
//         message: err,
//       });
//     } else {
//       res.json({
//         message: "all user",
//         users,
//       });
//     }
//   });
// });

app.listen(PORT, () =>
  console.log(`server  running on http://localhost:${PORT}`)
);
