import cors from "cors";
import express from "express";
import crypto from "crypto";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let data = [];

app.post("/", (req, res) => {
  data.push({ id: crypto.randomUUID(), ...req.body });
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  const sortedData = data.sort((a, b) => {
    if (a.sponsored === b.sponsored) return 0;
    return a.sponsored ? -1 : 1;
  });
  res.status(200).json(sortedData);
});

app.delete("/:id", (req, res) => {
  data = data.filter((item) => item.id !== req.params.id);
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Server listening");
});
