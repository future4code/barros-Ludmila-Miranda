//const usuarios = [
  //  { nome: "Amanda Rangel", apelido: "Mandi" },
   // { nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" }
  //]
  
  //const novoArrayA = usuarios.map((item, index, array) => {
    // console.log(item, index, array)
  //})

  // resposta exercício um interpretação a) vai ser impresso no console os arrays com o nome, apelido e
  // o índice que essa posição ocupa. (0,1,2)

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)