const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    selection: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("User", userSchema);
