const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
    required: true,
  },
  unique_id: {
    type: String,
    required: true,
    unique:true
  },
  // user: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Register",
  //   required: true,
  // },
});
module.exports = mongoose.model("text", productSchema);
