const express = require("express");
const pasth = require("path");
const bcrypt = require("bcrypt");

const app = express();

// use ejs as view engine
app.set("view engine", "ejs");

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
