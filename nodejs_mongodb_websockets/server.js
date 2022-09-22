const express = require("express");
const port = 3000;
let app = express();

app.use("/", (request, response) => {
  response.send("Home");
});

app.listen(port, () => {
  console.log(`Server linten on port ${port}`);
});
