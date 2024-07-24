// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num1 = 50;
let num2 = 50;
let num3 = 50;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é maior que ${num2} e maior que ${num3}`);

} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} é maior que ${num1} e maior que ${num3}`);

} else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} é maior que ${num1} e maior que ${num2}`);

} else if (num1 === num2 && num1 === num3) {
    console.log(`${num1} e ${num2} e ${num3} são iguais`);
}