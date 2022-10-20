const { time, timeEnd } = require("console");

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i ** i);
  }
}

time("duracion contar");
contar(5);
timeEnd("duracion contar");
