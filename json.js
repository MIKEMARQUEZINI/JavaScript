let tenisNIke = {
  modelo: "Nike Air",
  tamanho: 44,
  corPrimaria: "Azul",
  corSecundaria: "Branco",
  possuiEstoque: true,
  lançamento: new Date("May 10, 2022"),
  quantidade: 100,
};

let jsonValueNike = JSON.stringify(tenisNIke);
console.log(jsonValueNike);

jsonValueNike = JSON.stringify(tenisNIke, null, 2);
console.log(jsonValueNike);

let newTenisNike = JSON.parse(jsonValueNike);
console.log(newTenisNike);
