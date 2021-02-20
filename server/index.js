import express from "express";
import morgan from "morgan";
import fetch from "node-fetch";
import path from "path";
import { OPEN_WEATHER_API_KEY } from "./apiKeys.js";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan("combined"));
app.get("/api/weather", async (req, res) => {
  console.log(req.query);
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${OPEN_WEATHER_API_KEY}&q=${req.query.q}&days=3`
  );
  res.status(response.status).json(await response.json());
});
app.use(
  express.static(path.resolve(process.env.PWD, "weather_frontend/build"))
);
app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(
    path.resolve(process.env.PWD, "weather_frontend/build", "index.html")
  );
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
