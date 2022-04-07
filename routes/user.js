const router = require("express").Router();
const User = require("../models/user");

router.get("/", function (req, res, next) {
  User.find().then((data) => res.send({ status: true, result: data }));
});

router.post("/", function (req, res, next) {
  const newuser = new User(req.body);
  newuser.save().then((data) => res.send({ status: true, result: data }));
});

router.put("/:_id", function (req, res, next) {
  User.findByIdAndUpdate({ _id: req.params._id }, req.body).then((data) =>
    res.send({ status: true, result: data })
  );
});

router.delete("/:_id", function (req, res, next) {
  User.deleteOne({ _id: req.params._id }).then((data) =>
    res.send({ status: true, result: data })
  );
});

module.exports = router;
