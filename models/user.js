var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    address_line_1: {
      type: String,
    },
    address_line_2: {
      type: String,
    },
    city: {
      type: String,
    },
    zipcode: {
      type: Number,
    },
    state: {
      type: String,
    },
  },
  contact: {
    type: Array,
  }, // [123, 3231],
  eduProgress: {
    type: Array,
  }, //  [{score: 32,class: highschool,school: amity school}]
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
