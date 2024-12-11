/**
 Questão 5. Utilizando for, descubra o maior valor contido no array e imprima-o.


 */

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar o for com index = 1.

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
};

console.log(higherNumber);
