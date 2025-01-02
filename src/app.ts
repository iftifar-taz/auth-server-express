import "dotenv/config";
import express, { Express, NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import env from "./utils/env";
import cors from "cors";
import { sessionRoutes, userRoutes } from "./routes";
import cookies from "cookie-parser";

// Initialize Express app
const app: Express = express();

app.use(cookies());

// CORS setup
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use routes
app.use("/api/sessions", sessionRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found!"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMesage = "An unknown error occurred!";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMesage = error.message;
  }
  res.status(statusCode).json({ error: errorMesage });
});

export default app;
