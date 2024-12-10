let chessPiece = "Bispo";

switch (chessPiece.toLowerCase()) {
    case "rei":
        console.log("REi -> Uma casa para qualquer direção");
        break;

    case "bispo":
        console.log("Bispo -> Diagonais.");
        break;

    case "rainha":
        console.log("Rainha -> Diagonal, horizontal e vertical.");
        break;

    case "cavalo":
        console.log("Cavalo -> 'L' Pode pular sobre as peças");
        break;

    case "torre":
        console.log("Torre -> Horizontal e vertical.");
        break;

    case "peao":
        console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;

    default:
        console.log("Erro, peça inválida!");
     
        
}