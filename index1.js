// import express from "express";
// import mongoose from "mongoose";
// import path from "path";

// //DB Code
// mongoose
//   .connect("mongodb://localhost:27017/sixppbackend")
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log("error DB");
//   });

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
// });

// const user = mongoose.model("users", userSchema);
// //DB Code End

// const app = express();

// //Setting the view engine (else you can also specify the extension eg: index.ejs)
// app.set("view engine", "ejs");

// //Specify the public (static) folder
// app.use(express.static(path.join(path.resolve(), "public")));

// //So that we can read form data
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res, next) => {
//   // we have to use render method with ejs
//   res.render("index", { name: "Om" });
// });

// app.get("/success", (req, res, next) => {
//   res.render("success");
// });

// app.get("/users", (req, res, next) => {
//   res.json({ users });
// });

// app.post("/contact", async (req, res, next) => {
//   const userData = { name: req.body.name, email: req.body.email };

//   await user.create(userData);

//   res.redirect("/success");
// });

// app.listen(5000, () => {
//   console.log("Server is working");
// });
