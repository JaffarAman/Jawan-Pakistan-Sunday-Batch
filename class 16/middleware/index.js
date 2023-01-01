const jwt = require("jsonwebtoken");

const middlewares = {
  authMiddleware: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const isUserTrue = jwt.verify(token, "helloworld");
      console.log(isUserTrue._doc);
      // const user = true;
      if (isUserTrue) {
        next();
      } else {
        res.json({ message: "Invalid user" });
      }
    } catch (error) {
      res.json({ message: "Invalid user" });
    }
  },
};

module.exports = middlewares;
