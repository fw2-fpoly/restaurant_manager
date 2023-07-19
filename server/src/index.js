import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { kitchenNamespace } from "./socket/namespace/kitchen.js";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(morgan("tiny"));
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
  res.send("abc");
});
// database connect
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connect successful");
  } catch (err) {
    console.log(err);
  }
};

export const ioKitchen = io.of("/kitchen.io");

ioKitchen.on("connection", kitchenNamespace);

server.listen(8080, () => {
  connect();
  console.log("http://localhost:8080");
});
