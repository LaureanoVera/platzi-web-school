const express = require("express");
const router = express.Router();
const port = 3000;

let app = express();

// ROUTER
app.use(router);

router.get("/message", (req, res) => {
  res.send("List message");
});

router.post("/message", (req, res) => {
  res.send("Add message!");
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
