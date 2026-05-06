const prompt = require('prompt-sync')();
let termo1 = 0;
let termo2 = 1;

console.log("Sequência de Fibonacci até o 15º termo:");
prompt("Pressione ENTER para gerar a sequência...");
console.log(termo1);
console.log(termo2);
let i = 3; 
while (i <= 15) {
    let proximo_termo = termo1 + termo2;
    console.log(proximo_termo);
    termo1 = termo2;
    termo2 = proximo_termo;
    
    i++;
}