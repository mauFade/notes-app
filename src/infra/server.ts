import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

const app: Application = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.info(`API run on port ${PORT}`);
});
