const { CONNECTION_STRING } = require("../constants/dbSettings");
const { default: mongoose } = require("mongoose");

var express = require('express');
var router = express.Router();

// MONGOOSE
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_STRING);

const { Product } = require("../models");
// const products = require("../data/products.json")

/* GET ALL */
router.get("/", function (req, res, next) {
  const search = req?.query?.search
  try {
    Product.find({
      'title': { $regex: search ?? '' }
    })
      .populate("branch")
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    res.sendStatus(500);
  }
});

// GET:id
router.get("/:id", function (req, res, next) {
  try {
    const { id } = req.params;
    Product.findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
