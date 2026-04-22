const prompt = require('prompt-sync')();
const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
const celsius = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F equivale a ${celsius.toFixed(2)}°C`);