const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "No Token Found",
      });
    }

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decode;

    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }
};