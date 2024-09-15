const { JSON } = require("sequelize")

class ConsultarProduto{
  consultarTodosProdutos = async () => {
    return await fetch(`http://localhost:8080/produtos`)
    .then((response) => {return response.json()})
    .then((data) => {return data}) 
  }
  consultarIdProduto = async (id) => {
    return await fetch(`http://localhost:8080/produtos/buscar/${id}`)
    .then((response) => {return response.json()})
    .then((data) => {return data})
  }
}

consulta = new ConsultarProduto();
//GET TODOS
consulta.consultarTodosProdutos().then((e) => {console.log(e)})
//GET selecionando
let idProd = 1
consulta.consultarIdProduto(idProd).then((e) => {console.log(e)})
