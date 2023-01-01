const jwt = require("jsonwebtoken");

const middlewares = {
  authMiddleware: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const isValid = jwt.verify(token, process.env.JWT_KEY);

      if (isValid) {
        next();
      } else {
        res.json({ message: "Invalid user" });
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid user" });
    }
  },
};

module.exports = middlewares;
