const prompt = require("prompt-sync")()

var height = Number(prompt("Qual a altura da parede ? "))
var widthy = Number(prompt("Qual a largura da parede ? "))
var squareMeters = height * widthy
var paintCans = (squareMeters * 0.3) / 2

console.log(`Serão ${paintCans} latas de tinta`);