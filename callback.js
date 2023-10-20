// setInterval(function () {
//     names();
// }, 4000);

// const names = () => {
//  setTimeout(() => { // setTimeout is a function that takes two arguments, a callback function and a time in milliseconds
//     console.log("Harvey Specter"); // callback function
//   }, 2000);
//  setTimeout(() => {
//     console.log("Mike Ross");
//   }, 3000);
//   setTimeout(() => {
//     console.log("Louis Litt");
//   }, 4000);
//   setTimeout(() => {
//     console.log("Donna Paulsen");
//   }, 5000); 
// };



setInterval(function () {
  returnHograts();
},2000);

const returnHograts = () => {
  setTimeout(() => {
    console.log("Harry Potter");
  }, 2000);
  setTimeout(() => {
    console.log("Ron Weasley");
  }, 3000);
  setTimeout(() => {
    console.log("Hermione Granger");
  }, 4000);
  setTimeout(() => {
    console.log("Draco Malfoy");
  }, 5000);
}