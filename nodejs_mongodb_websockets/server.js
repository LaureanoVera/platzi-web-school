const express = require("express");
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
  console.log(req.headers);
  res.header({
    "custom-header": "Our custom value",
    "author-name": "Laureano Ivan Gerardo Vera",
  });
  res.send("List message");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send(`Add '${req.body.text}' message!`);
});

router.delete("/message", (req, res) => {
  res.send("Delete message");
});

// app.use("/", (request, response) => {
//   response.send("Home");
// });

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}/`);
});
