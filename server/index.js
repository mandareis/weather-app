import express from "express";
import morgan from "morgan";
import fetch from "node-fetch";
import { OPEN_WEATHER_API_KEY } from "./apiKeys.js";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan("combined"));
app.get("/api/current-condition", async (req, res) => {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.q}&units=imperial&units=metric&appid=${OPEN_WEATHER_API_KEY}
    `);
  res.status(response.status).json(await response.json());
  //   res.set("Content-type", "application/json");
  //   res.status(response.status).send(await response.text());
});
app.get("/api/forecast", async (req, res) => {
  console.log(req.query);
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.q}&units=imperial&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  );
  res.status(response.status).json(await response.json());
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
