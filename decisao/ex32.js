const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));
let temp; 
if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}
if (num1 > num3) {
    temp = num1;
    num1 = num3;
    num3 = temp;
}
if (num2 > num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}
console.log(`Ordem crescente: ${num1}, ${num2}, ${num3}`);