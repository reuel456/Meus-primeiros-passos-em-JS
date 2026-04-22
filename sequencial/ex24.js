const prompt = require('prompt-sync')();
const base = parseFloat(prompt("Digite o valor da base: "));
const indice = parseFloat(prompt("Digite o valor do índice: "));
const raiz = Math.pow(base, (1 / indice));
console.log(`${raiz.toFixed(1)} (a raiz de índice ${indice} da base ${base} é ${raiz.toFixed(1)})`);