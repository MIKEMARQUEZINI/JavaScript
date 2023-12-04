let date = new Date();
console.log(date);

let date1 = new Date("March 11, 1993");
console.log(date1);

let newDate = new Date(2023, 12, 25, 23, 59, 59);
console.log(newDate);

console.log(`Full Year: ${newDate.getFullYear()} `);
console.log(`Month : ${newDate.getMonth()}`);
console.log(`Day of month: ${newDate.getDate()}`);
console.log(`Hours: ${newDate.getTime()}`);

let custom = {
  dateStyle: "short",
  timeStyle: "short",
};
console.log(`Localizacao en-US: ${date.toLocaleDateString("en-US")}`);
console.log(`Localizacao en-US: ${date.toLocaleTimeString("en-US")}`);
console.log(`Localizacao en-US: ${date.toLocaleString("en-US", custom)}`);

console.log(`Localizacao pt-br: ${date.toLocaleDateString("pt-br")}`);
console.log(`Localizacao pt-br: ${date.toLocaleTimeString("pt-br")}`);
console.log(`Localizacao pt-BR: ${date.toLocaleString("pt-BR", custom)}`);
