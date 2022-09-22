const express = require("express");
const response = require("./network/response");
const bodyParser = require("body-parser");
const router = express.Router();
const port = 3000;

let app = express();

// USES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// ROUTES
router.get("/message", (req, res) => {
  // console.log(req.headers);
  // res.header({
  //   "custom-header": "Our custom value",
  //   // Hacer un NPM para verificar que el author no lo cambien jajaja
  //   "author-name": "Laureano Ivan Gerardo Vera",
  // });
  if (req.query.error == "ok") {
    response.error(req, res, "Error Fake", 400);
  } else {
    response.success(req, res, "Message list");
  }
  // res.send("List message");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send({ error: "", body: "Successfully created" });
});

router.delete("/message", (req, res) => {
  res.send(`Delete message`);
});

// app.use("/", (request, response) => {
//   response.send("Home");
// });

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}/`);
});
