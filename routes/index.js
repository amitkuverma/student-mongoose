const router = require("express").Router();

router.get("/", function (req, res, next) {
  res.send({ status: true, result: "Working..." });
});

module.exports = router;
