const grade = 80;
let message = "";

if (grade >= 80) {
    message = "Parabéns, Você faz parte do grupo de pessoas aprovadas!";
} else if (grade >= 60 && grade < 80) {
    message = "Você está na nossa lista de espera.";
} else {
    message = "Infelizmente, você reprovou.";
}

console.log(message);
