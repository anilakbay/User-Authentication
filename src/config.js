const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb: //localhost:27017/NodeJs-Blog");

// check database connected or not
connect
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

// create a schema
const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// collection Part
const collection = mongoose.model("users", LoginSchema);

module.exports = collection;
