const prompt = require('prompt-sync')();
console.log("Cálculo de Divisão Inteira (por subtrações sucessivas)");
let n1 = Number(prompt("Informe o dividendo (número a ser dividido): "));
let n2 = Number(prompt("Informe o divisor (número que divide): "));
let resultado = 0;
let dividendo = n1;
let divisor = n2;
if (divisor === 0) {
    console.log("Erro: Divisão por zero não é permitida.");
} else {
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        resultado = resultado + 1;
    }
    console.log(`\nO resultado da divisão inteira de ${n1} por ${n2} é: ${resultado}`);
    console.log(`O resto da divisão é: ${dividendo}`);
}