import cors from "cors";
import path from "path";
import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();

const app = express();

import usersRoute from "./routes/userRoutes.js";
import authRoute from "./routes/authRoutes.js";
import movieRoute from "./routes/movieRoutes.js";
import genreRoute from "./routes/genreRoutes.js";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

import "./config/db.js";

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
