import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import { feedbackRoutes } from "./routes/feedbackRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/feedbacks", feedbackRoutes);

app.get("/", (_, res) => {
  res.send({ status: "OK" });
});

async function start() {
  await connectDB();

  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
}
start();
