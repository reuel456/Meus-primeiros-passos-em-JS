const prompt = require('prompt-sync')();
const celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C equivale a ${fahrenheit}°F`);