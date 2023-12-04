let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

let fixo = num1.toFixed(3);
console.log(`Fixed: ${typeof fixo} Fixed Value: ${num1}`);

let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString("en-US")}`);
console.log(`SPAIN: ${num2.toLocaleString("es-ES")}`);
console.log(`BR: ${num2.toLocaleString("pt-BR")}`);

//

let salary = 20000;
let monthSalary = salary / 12;

console.log(`Month Salary: ${monthSalary.toFixed(2)}`);

//

let formatter1 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(`Us Dollars: ${formatter1.format(monthSalary)}`);

let formatter2 = new Intl.NumberFormat("ja-JA", {
  style: "currency",
  currency: "JPY",
});
console.log(`Yen: ${formatter2.format(monthSalary)}`);

let formatter4 = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(`Euros: ${formatter4.format(monthSalary)}`);

let formatter3 = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(`Reais: ${formatter3.format(monthSalary)}`);
