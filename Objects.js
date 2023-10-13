let tenis = {
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }, { nome: "Puma" }],
    tamanho: [{ numero: 38 }, { numero: 39 }, { numero: 40 }],
    cor: [
      {
        corPrimaria: [{ corPrincipal: "Branco" }, { corPrincipal: "Preto" }],
        corSecundaria: [{ corAlternativa: "Vermelho" }, { corAlternativa: "Azul" }],
      },
    ],
    estoque: true,
    preco: [{ preco: 100 }, { preco: 200 }, { preco: 300 }],
    palmilha: [{ material: "Gel" }, { material: "Espuma" }],
    
  };
  
  console.log(`Marca: ${tenis.marcas[0].nome}, Tamanho: ${tenis.tamanho[0].numero}, Cor Primária: ${tenis.cor[0].corPrimaria[0].corPrincipal}, Cor Alternativa: ${tenis.cor[0].corSecundaria[1].corAlternativa}, Preço: ${tenis.preco[0].preco}, Material da Palmilha: ${tenis.palmilha[0].material}`);