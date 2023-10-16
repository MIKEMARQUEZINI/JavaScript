const crescente = [
  { nome: "Nike", modelo: "Air Max", tamanho: "40", cor: "Preto", preco: 200.00},
  { nome: "Adidas", modelo: "Super Star", tamanho: "41", cor: "Branco", preco: 600.00 },
  { nome: "Puma", modelo: "Ferrari", tamanho: "42", cor: "Cinza", preco: 400.00},
  { nome: "Reebok", modelo: "Classic", tamanho: "42", cor: "Azul", preco: 500.00 },
  { nome: "Asics", modelo: "Gel", tamanho: "44", cor: "Vermelho", preco: 600.00 },
];


for (let i = 0; i < crescente.length; i++) {
  console.log(crescente[i].nome, crescente[i].modelo);
}

console.log(crescente.sort((a,z) => a.nome.localeCompare(z.nome)));


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}


//for Of

for(let item of crescente){
  if(item.nome === 'Nike')
  {
    console.log('Encontrado') //condição para encontrar o item (continue o loop)
    continue;
  }

  if(item.nome === 'Puma'){
    console.log('Puma encontrado') //condição para encontrar o item (trava o loop)
    break;
  }
  console.log(item)
}

//for In

const pessoa = {nome: 'João', idade: 30};

for (let item in pessoa){
  console.log(item)
}

//for Each

crescente.forEach((element, index) =>{ 
  if(element.nome === 'Nike') {
    return console.log('Encontrado') //condição para encontrar o item (continue o loop)
  }
  console.log(element.nome, index);
}); 

//Map

crescente.map((item, index) =>{
  if(item.nome === 'Nike' && item.cor === 'Preto' ){ //verifica a condição dentro do objeto
    return (item.nome = "Nike Hiper Venom")  //substitui o nome do item se for verdadeiro a condição
  } 
})

console.log(crescente)

//Filter

const filterCor = crescente.filter((item, index) =>{
  return item.cor === 'Cinza' //filtra o item que tem a cor preta
});

console.log(filterCor);


//Find

const findPreco = crescente.find((item, index) =>{
  return item.preco === 'R$ 600,00' //encontra o item que tem o preço de R$ 600,00
})

console.log(findPreco);

//Every

const everyTamanho = crescente.every((item, index) =>{
  return item.tamanho === '42' //verifica se todos os itens tem o tamanho 42
})
console.log(everyTamanho);

//Some

const existeTamanho = crescente.some((item, index) =>{
  return item.tamanho === '42' //verifica se existe o tamanho 42
})

console.log(existeTamanho);

//Reduce

const reducePreco = crescente.reduce((total, item, index) =>{
  return total + item.preco //soma todos os preços dos itens
},0); //valor inicial e depois vai substituindo o valor total

console.log(reducePreco);