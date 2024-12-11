/**
 Exercício 10: Desafio da pirâmide de asteriscos
Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
 */

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine);
};