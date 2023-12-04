let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

let fixo = num1.toFixed(3);
console.log(`Tipo fixado: ${typeof fixo} Valor Fixado: ${num1}`);

let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString("en-US")}`);
console.log(`SPAIN: ${num2.toLocaleString("es-ES")}`);
console.log(`BR: ${num2.toLocaleString("pt-BR")}`);

//

let salario = 20000;
let salarioMensal = salario / 12;

console.log(`Salario Mensal: ${salarioMensal.toFixed(2)}`);

//

let formatar1 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(`Us Dollars: ${formatar1.format(salarioMensal)}`);

let formatar2 = new Intl.NumberFormat("ja-JA", {
  style: "currency",
  currency: "JPY",
});
console.log(`Yen: ${formatar2.format(salarioMensal)}`);

let formatar3 = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(`Euros: ${formatar3.format(salarioMensal)}`);

let formatar4 = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(`Reais: ${formatar4.format(salarioMensal)}`);
