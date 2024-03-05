import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/demo")
  .then((_) => console.log("Connceted to DB"))
  .catch(console.log);
