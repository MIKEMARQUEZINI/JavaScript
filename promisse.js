const pedidoIfood = (pedidoIfood) => {
  return new Promise((resolve, reject) => { // Promise é uma função que recebe dois parâmetros: resolve e reject
    if(pedidoIfood === "hamburguer")
    return reject(`Não temos ${pedidoIfood} no cardápio`); // reject é executado apenas em caso de erro
    setTimeout(() => {
      resolve(`Pedido de ${pedidoIfood} efetuado com sucesso!`); // resolve é executado apenas em caso de sucesso
    }, 3000);
  });
};

pedidoIfood("hamburguer").then((pedidoEfetuado) => { //then é executado apenas em caso de sucesso
    console.log(pedidoEfetuado);
}).catch((erro) => { // catch é executado apenas em caso de erro
    console.log(erro);
}).finally(() => { // finally é executado independente de sucesso ou erro
    console.log("Pedido finalizado");
})
;
