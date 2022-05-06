//exercício 1

  // resposta exercício um interpretação a) vai ser impresso no console os arrays com o nome, apelido e
  // o índice que essa posição ocupa. (0,1,2)

// exercício 2
//a) irá aparecer apenas os nomes devido ao filtro.

//exercício 3

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

