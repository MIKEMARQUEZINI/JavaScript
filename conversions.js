let strValue = "Mike";
console.log(typeof strValue);
let numVaue = 30;
console.log(typeof numVaue);
let bolValue = true;
console.log(typeof bolValue);

//

let age = 30;
let firstName = "Mike";
let descriptions = `Hi, my name is  ${firstName} and have  ${age} years`;

console.log(descriptions);

//

let ageString = "30";
let ageNum = Number(ageString);

console.log(typeof ageNum);

let ageNewNum = new Number(ageString);
console.log(typeof ageNewNum);

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
