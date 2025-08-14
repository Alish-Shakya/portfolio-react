import connectDB from "./src/ConnectDB/connectDB.js";
import express from "express";
import contactRouter from "./src/Route/contactRoute.js";

import cors from "cors";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/contact", contactRouter);
