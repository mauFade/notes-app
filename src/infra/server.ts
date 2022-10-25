import "dotenv/config";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import v1Routes from "./http/api/v1";
import { errors } from "celebrate";

const app: Application = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(errors());
app.use(v1Routes);

app.listen(PORT, () => {
  console.info(`API run on port ${PORT}`);
});
