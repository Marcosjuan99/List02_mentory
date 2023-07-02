const prompt = require("prompt-sync")()

var Name = prompt("Qual o seu nome ? ")
var Age = Number(prompt("Qual sua idade ? "))
var AgeInDays = 365 * Age

console.log(`Seu nome é ${Name} e você possui ${AgeInDays} dias de vida `);

