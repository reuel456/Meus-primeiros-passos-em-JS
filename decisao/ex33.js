const prompt = require('prompt-sync')();
const n1 = parseInt(prompt("Digite o 1º número: "));
const n2 = parseInt(prompt("Digite o 2º número: "));
const n3 = parseInt(prompt("Digite o 3º número: "));
const n4 = parseInt(prompt("Digite o 4º número: "));
console.log("Valores divisíveis por 2 e 3:");
if (n1 % 2 === 0 && n1 % 3 === 0) {
    console.log(n1);
}

if (n2 % 2 === 0 && n2 % 3 === 0) {
    console.log(n2);
}

if (n3 % 2 === 0 && n3 % 3 === 0) {
    console.log(n3);
}

if (n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(n4);
}