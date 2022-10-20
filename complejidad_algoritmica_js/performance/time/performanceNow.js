const performance = require("perf_hooks");

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i ** i);
  }
}

let inicioTiempo = performance.performance.now();
contar(5);
let finalTiempo = performance.performance.now();

let duracion = finalTiempo - inicioTiempo;
console.log(Number(duracion.toFixed(2)));
