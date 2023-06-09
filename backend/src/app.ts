import * as dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

import { errorHandler, notFound } from "./middlewares/ErrorMiddleware";
import { userRoute } from "./routes/user";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: Number = parseInt(process.env.PORT as string, 10);

const app = express();

const allowedOrigins = [
  "capacitor://localhost",
  "ionic://localhost",
  "http://localhost",
  "http://localhost:8080",
  "http://localhost:8100",
  "http://localhost:5173",
  "http://localhost:5174",
  "https://stonks-app.webdrip.in"
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  // @ts-expect-error
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  }
};

// Enable preflight requests for all routes
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.json({
    success: true,
    data: "Welcome to Stonks API"
  });
});

app.use("/api/user", userRoute);

// custom error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});
