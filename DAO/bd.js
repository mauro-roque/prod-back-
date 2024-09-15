class Produto {
  constructor(idProduto, nomeProduto, descricaoProduto, custoProduto, vendaProduto){
    this.idProduto = idProduto;
    
    this.nomeProduto = nomeProduto;
    this.descricaoProduto = descricaoProduto;
    this.custoProduto = custoProduto;
    this.vendaProduto = vendaProduto;
  }
  static arrayProdutos = [];
  static addProduto = (nomeProduto, descricaoProduto, custoProduto, vendaProduto) => {
    let id = Produto.arrayProdutos.length + 1;
    let insProduto = new Produto(id, nomeProduto, descricaoProduto, custoProduto, vendaProduto)
    Produto.arrayProdutos.push(insProduto);
  }
}

Produto.addProduto("produto1", "desc prod", "50", "150")
Produto.addProduto("produto2", "desc prod", "100", "200")
Produto.addProduto("produto3", "desc prod", "200", "250")
Produto.addProduto("produto4", "desc prod", "250", "500")
Produto.addProduto("produto5", "desc prod", "400", "450")

console.log(Produto.arrayProdutos)

module.exports = {
  Produto
}

//let filtarCusto = Produto.arrayProdutos.filter((e) => e.custoProduto > 100)
