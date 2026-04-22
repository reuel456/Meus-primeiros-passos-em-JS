const prompt = require('prompt-sync')();
const salario = parseFloat(prompt("Digite o valor do salário mensal: "));
const aumentoPorcentagem = parseFloat(prompt("Digite a porcentagem de aumento (apenas números): "));
const aumentoConcedido = salario * (aumentoPorcentagem / 100);
const novoSalario = salario + aumentoConcedido;
console.log(`Novo salário: ${novoSalario.toFixed(2)}, Aumento concedido: ${aumentoConcedido.toFixed(2)}`);