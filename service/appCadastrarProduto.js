const { CreateObjProduto } = require("./CreateObjProduto")

class CadastrarProduto{
  cadastrarProduto = async (nomeProduto, descricaoProduto, custoProduto, vendaProduto) => {
    const objProduto = new CreateObjProduto(nomeProduto, descricaoProduto, custoProduto, vendaProduto)
    return await fetch(`http://localhost:8080/cadastro/produto`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objProduto)
    })
    .then((response) => {return response.json()})
    .then((data) => {return data})
    .catch((e) => {`Error: cadastro de um novo produto Error`})
  }
}

//Cadastro de produto
const cadastro = new CadastrarProduto()
cadastro.cadastrarProduto("masterProd", "descMaster", "2000", "5000").then((e) => {console.log(e)})
