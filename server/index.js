import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan("combined"));
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
