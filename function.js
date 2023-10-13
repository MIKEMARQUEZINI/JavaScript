//9 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado.

let kmDia = 0.15;
let carroDia = 60;
let diasAlugados = 10;
let kmPercorrido = 100;

// function kmUtilizado(){ //Function Declaration;
//     return kmDia * kmPercorrido;
// }

// function aluguelCarro(){//Function Declaration;
//     return carroDia * diasAlugados;
// }

// function valorAluguel(){//Function Declaration;
//     return kmUtilizado() + aluguelCarro(); 
// }   


const aluguelCarro = function(){//Function Expression;
    return carroDia * diasAlugados;
}
const kmUtilizado = function(){ //Function Expression;
    return kmDia * kmPercorrido;
}
const valorAluguel = function(){//Function Expression;
    return kmUtilizado() + aluguelCarro(); 
}



// const kmUtilizado = () => kmDia * kmPercorrido; //Arrow Function;
// const aluguelCarro = () => carroDia * diasAlugados; //Arrow Function;
// const valorAluguel = () => kmUtilizado() + aluguelCarro();//Arrow Function;



console.log("O valor total do aluguel é de R$" + valorAluguel());
