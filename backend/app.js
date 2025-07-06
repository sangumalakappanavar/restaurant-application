/*
import dotenv from "dotenv";
dotenv.config({ path: "backend/config.env" }); // ✅ Fix path

import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRouter.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// ✅ Connect to MongoDB
dbConnection();

// ✅ Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/v1/reservation", reservationRouter);

// ✅ Error Middleware
app.use(errorMiddleware);

export default app;*/
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRouter.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

dbConnection();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTER USE
app.use("/api/v1/reservation", reservationRouter);


// 👇 optional test route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.use(errorMiddleware);

export default app;



