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


// const p = document.querySelectorAll('p')

// p.forEach((element, index)=> {
//     element.style.color = "#FFF";
//     element.style.padding= "20px";
//     if(index === 0){
//         element.style.background = "blue";
//     }
//     if(index === 1){
//         element.style.background = "red";
//     }   
// });


const p = document.querySelector('p')
p.textContent = "Texto inserido via JS"
p.innerText = "Texto inserido via JS"

const div = document.querySelector('div')
div.innerHTML = `${div.innerHTML} <p>Texto inserido via JS</p>`;

const elementUl = document.querySelector('ul');
[1,2,3].forEach((element)=>{
    const elementLi = document.createElement('li');
    elementLi.innerText = element;
    elementUl.appendChild(elementLi); //adiciona o elemento filho
});

div.appendChild(elementUl); //adiciona o elemento filho