// Exercício 3

// Neste exercício vamos criar estruturas condicionais com operadores if/else e operadores lógicos será muito comum em sua carreira de pessoa desenvolvedora. Então, vamos praticar essa habilidade!

// Questão 1. Crie uma variável chamada grade que receba a nota de uma pessoa candidata em um desafio técnico e atribua um valor entre 1 e 100;

// Questão 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se está na lista de espera. Para isso, considere estas informações.

// ➡️ Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo e os operadores lógicos que se aplicam a cada situação.
// ➡️ Altere o valor da nota para verificar se as condições que você implementou funcionam

let grade = 80;
let message = "";

if (grade >= 80 && grade <= 100) {
    message = "Parabéns, você faz parte do grupo de pessoas aprovadas!";

} else if (grade <= 60) {
    message = "Você está na nossa lista de espera.";
} else {
    message = "Infelizmente, você reprovou.";
}
console.log(message);