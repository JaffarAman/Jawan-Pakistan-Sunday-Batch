const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URI = `mongodb+srv://admin:admin12345@cluster0.jp1i58x.mongodb.net/auth_app`;

mongoose
  .connect(BASE_URI)
  .then((res) => console.log("mongoDb Connect"))
  .catch((err) => console.log(err, "error"));

app.use(express.json());
app.use(cors());

app.use("/api", router);

// app.get("/api/check", middlewares.authMiddleware, (request, response) => {
//   response.send("API hit....!");
// });

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
