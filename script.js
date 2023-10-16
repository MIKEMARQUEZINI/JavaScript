'use strict';

// const h1 = document.querySelector('h1');
// const classP = document.querySelector('.paragrafo');
// const idP = document.querySelector('#paragrafo')

// console.log(h1)
// console.log(classP)
// console.log(idP)

// let timer = 0;
// const title = document.querySelector('title');
// setInterval(()=>{
//     title.innerText = timer;
//     timer++;
// }, 1000);


const p = document.querySelectorAll('p')

p.forEach((element, index)=> {
    element.style.color = "#FFF";
    element.style.padding= "20px";
    if(index === 0){
        element.style.background = "blue";
    }
    if(index === 1){
        element.style.background = "red";
    }   
});
