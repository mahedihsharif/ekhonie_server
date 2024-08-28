const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (bearer.startsWith("Bearer ")) {
    const bearerToken = bearer.split("Bearer ")[1];

    if (!bearerToken) {
      return res.status(401).json({
        errorMessage: "No token, Authorization denied!",
      });
    } else {
      try {
        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
      } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
      }
    }
  }
};

module.exports = authMiddleware;
