let tenisNIke = {
  model: "Nike Air",
  size: 44,
  collorPrimary: "Azul",
  collorSecundary: "Branco",
  ownStock: true,
  news: new Date("May 10, 2022"),
  amount: 100,
};

let jsonValueNike = JSON.stringify(tenisNIke);
console.log(jsonValueNike);

jsonValueNike = JSON.stringify(tenisNIke, null, 2);
console.log(jsonValueNike);

let newTenisNike = JSON.parse(jsonValueNike);
