//Gerador de número aleátorio

const lotterNumber =[];

const firstGame = [4, 8, 15, 16, 23, 42];

for (let index = 0; index < 6; index += 1) {
    let randomNumber = Math.ceil(Math.random() * 60);
    if (lotterNumber.includes(randomNumber)) {
        index -= 1;
    } else {
        lotterNumber.push(randomNumber);
    }
    
}

//console.log(lotterNumber);

//Comparação de sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];
for (let indexLottery = 0; indexLottery < lotterNumber.length; indexLottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
        if (lotterNumber[indexLottery] === firstGame[indexGame]) {
            numberOfHits += 1
            hits.push(lotterNumber[indexLottery]);
        }
    }
}

//Quantidade de acerto

console.log(`Números sorteados: ${lotterNumber}`);
console.log(`Jogo: ${firstGame}`);
console.log(`Quantidade de acerto: ${numberOfHits}`);
console.log(`Números acertados: ${hits}`);



