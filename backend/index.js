require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const authRoute = require("./Routes/AuthRoutes");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

/* ✅ FULL CORS FIX */
app.use(
  cors({
    origin: [
      "https://wonderlost.onrender.com",
      "https://wonderlost-zerodha-clonedashboard.onrender.com"
    ],
    credentials: true,
  })
);


/* ✅ Needed for cookies & JSON */
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

/* ✅ Routes */
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order Saved");
  } catch (e) {
    console.error(e);
    res.status(500).send("Failed to save order");
  }
});

/* ✅ DB connect BEFORE starting server */
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));
