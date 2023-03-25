import express from "express";
import { connectDB } from "./data/database.js";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";

import { config } from "dotenv";
import cookieParser from "cookie-parser";

import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

const app = express();

config({
  path: "./data/config.env",
});

connectDB();

//Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("/ is working");
});

//Using error middleware
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode....`);
});
