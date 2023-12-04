let strValue = "Mike";
console.log(typeof strValue);
let numVaue = 30;
console.log(typeof numVaue);
let bolValue = true;
console.log(typeof bolValue);

//

let idade = 30;
let primeiroNome = "Mike";
let descricao = `Olá, me chamo ${primeiroNome} e tenho ${idade} anos`;

console.log(descricao);

//

let idadeString = "30";
let idadNumero = Number(idadeString);

console.log(typeof idadNumero);

let idadeNoveNumero = new Number(idadeString);
console.log(typeof idadeNoveNumero);

//

let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1: ${bool1} Num2: ${bool2}`);

let str1 = "Hi";
let bool3 = Boolean(str1);
let val1;
let bool4 = Boolean(val1);
console.log(`Bool3: ${bool3} Bool4: ${bool4}`);

//

let bool5 = true;
console.log(`Bool5 : ${bool5}`);

let strBool5 = bool5.toString();
console.log(typeof strBool5);
