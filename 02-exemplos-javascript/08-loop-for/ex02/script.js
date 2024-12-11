const lotterNumber = [4, 8, 15, 16, 23, 42];

for (let index = 0; index < lotterNumber.length; index += 1) {
    console.log(`Número ${index} = ${lotterNumber[index]}`);
    
}

//console.log(Math.ceil(1.9999));//arredonda para cima
//console.log(Math.floor(1.9999));//arredonda para baixo
//console.log(Math.random()); //gera um número aleatório entre 0 e 1

//console.log(Math.random() * 60); //gera um número aleátorio entre 0 e 60

console.log(Math.ceil(Math.random() * 60)); //gera um número aleátorio de 1 a 60 arredondando para cima




