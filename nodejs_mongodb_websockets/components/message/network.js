const express = require("express");
const router = express.Router();

const response = require("../../network/response");

router.get("/message", (req, res) => {
  // console.log(req.headers);
  // res.header({
  //   "custom-header": "Our custom value",
  //   // Hacer un NPM para verificar que el author no lo cambien jajaja
  //   "author-name": "Laureano Ivan Gerardo Vera",
  // });
  if (req.query.error == "ok") {
    response.error(req, res, "Error Fake", 400, "Simulation");
  } else {
    response.success(req, res, "Message list");
  }
  // res.send("List message");
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
