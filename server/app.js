const express = require("express");
const cors = require("cors");
const app = express();
const productsRouter = require("./products.router");

app.use(express.json());
app.use(cors());

app.listen(4000, () => {
  console.log("Server Started at 4000");
});

app.use("/", productsRouter);

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Server Running on 4000",
  });
});

module.exports = app;
