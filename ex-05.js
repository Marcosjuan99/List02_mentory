const prompt = require("prompt-sync")()

var ray = Number(prompt("Qual o raio do circulo ? "))
var area = 3.14 * ray ** 2

console.log(`A área do circulo é ${area}`);

