const mongoose = require("mongoose");
const orders = require("./orderModel");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  order: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
      }
    ]
  }
});