import express from "express";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { FRONTEND_URL } from "./config.js";
config();

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", productsRoutes);

export default app;
