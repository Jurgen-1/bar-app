import express from "express";
import cors from "cors";
import { getCategories, getMenuItems } from "./db.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/categories", (req, res) => {
  res.json(getCategories());
});

app.get("/menu-items", (req, res) => {
  res.json(getMenuItems());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
