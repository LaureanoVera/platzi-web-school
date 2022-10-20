const express = require("express");
const router = express.Router();
const controller = require("./controller");

const response = require("../../network/response");

router.get("/", (req, res) => {
  if (req.query.error == "ok") {
    response.error(req, res, "Error Fake", 400, "Simulation");
  } else {
    response.success(req, res, "Message list");
  }
});

router.post("/", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send({ error: "", body: "Successfully created" });
});

router.delete("/", (req, res) => {
  res.send(`Delete message`);
});

module.exports = router;
