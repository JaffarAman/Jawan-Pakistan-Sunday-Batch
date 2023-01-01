const express = require("express");
const authControllers = require("../controllers/authControllers");
const middlewares = require("../middleware");
const router = express.Router();

router.get("/sample", (req, res) => {
  const headers = req.headers;
  console.log(headers.authorization, "headers");
  res.json({
    message: "SAMPLE",
  });
});
router.post("/signup", authControllers.signUp);
router.post("/login", authControllers.login);

// post
router.post("/post", middlewares.authMiddleware, (req, res) => {
  res.json({
    message: "create post",
  });
});

module.exports = router;
