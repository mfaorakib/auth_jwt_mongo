import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/user.js";
import postRouter from "./routes/index.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

 app.use("/user", userRouter);
 app.use("/service", postRouter);

 const CONNECTION_URL =
   "mongodb+srv://test_auth:sXZxS1JIqbFEMoOH@cluster0.ivvdq.mongodb.net/testauth?retryWrites=true&w=majority";
 const PORT = process.env.PORT || 5000;
 mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));


  
