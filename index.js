import express from "express";
import router from "./router.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(express.urlencoded(false))
app.use(express.json());
app.use("/",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})