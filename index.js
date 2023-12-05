import createPrompt from "prompt-sync";
let prompt = createPrompt();

let employee = {}; // empty object

let firstName = prompt("First Name: ");
if (!firstName) {
  console.error("First Name is required"); // console.error() is used to print error message
  process.exit(1);
}

employee.firstName = firstName; // adding firstName property to employee object

let lastName = prompt("Last Name: ");
if (!lastName) {
  console.error("Last Name is required");
  process.exit(1);
}

employee.lastName = lastName; // adding lastName property to employee object

let startDateYear = prompt("Start Date Year (1990 - 2023): ");
startDateYear = Number(startDateYear); // converting string to number

if (!Number.isInteger(startDateYear)) {
  // checking if startDateYear is integer
  console.error("Entera valid a start Date Year");
  process.exit(1);
}

if (!startDateYear < 1990 || startDateYear > 2023) {
  // checking if startDateYear is between 1990 and 2023
  console.error("Start Date Year should be between 1990 and 2021");
  process.exit(1);
}

let startDateMonth = prompt("Start Date Month (1 - 12): ");
startDateMonth = Number(startDateMonth); // converting string to number
if (!Number.isInteger(startDateMonth)) {
  // checking if startDateMonth is integer
  console.error("Enter a valid a start Date Month");
  process.exit(1);
}

if (!startDateMonth < 1 || startDateMonth > 12) {
  // checking if startDateMonth is between 1 and 12
  console.error("Start Date Month should be between 1 and 12");
  process.exit(1);
}

let startDateDay = prompt("Start Date Day (1 - 31): ");
startDateDay = Number(startDateDay); // converting string to number
if (!Number.isInteger(startDateDay)) {
  // checking if startDateDay is integer
  console.error("Enter a valid a start Date Day");
  process.exit(1);
}
if (!startDateDay < 1 || startDateDay > 31) {
  // checking if startDateDay is between 1 and 31
  console.error("Start Date Day should be between 1 and 31");
  process.exit(1);
}

employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay); // adding startDate property to employee object

let isActive = prompt("Is Active (true or false): ");
isActive = isActive.toLowerCase(); // converting string to lowercase
if (isActive !== "true" && isActive !== "false") {
  // checking if isActive is true or false
  console.error("Enter a yes or no for employee Active status");
  process.exit(1);
}

employee.isActive = isActive === "true"; // adding isActive property to employee object

const json = JSON.stringify(employee, null, 2); // converting employee object to json string
console.log(`Employee: ${json}`);
