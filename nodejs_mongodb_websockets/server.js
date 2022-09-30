const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const router = require("./network/routes");

let app = express();

// USES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
router(app);

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}/`);
});
