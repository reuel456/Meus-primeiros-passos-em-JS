const prompt = require('prompt-sync')();
console.log("Tabela de Conversão: Celsius para Fahrenheit (10°C a 100°C)");
prompt("Pressione ENTER para exibir a tabela...");
for (let grauCelsius = 10; grauCelsius <= 100; grauCelsius += 10) {
    let grauFahrenheit = (grauCelsius * 9/5) + 32;
    console.log(`${grauCelsius}°C = ${grauFahrenheit}°F`);
}