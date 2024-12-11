//Gerador de número aleátorio

const lotterNumber =[];

const fistGame = [4, 8, 15, 16, 23, 42];

for (let index = 0; index < 6; index += 1) {
    lotterNumber.push(Math.ceil(Math.random() * 60));
    
}

console.log(lotterNumber);
