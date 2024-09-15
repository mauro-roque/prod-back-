const express = require("express")
const { Produto } = require("../DAO/bd")

const router = express.Router()

router.get("/produtos", async(req, res) => {
  try {
    if(Produto.arrayProdutos.length == 0){
      res.status(404).json({menssage: `Produtos Zerados ;(`})
    }else{
      res.status(200).json(Produto.arrayProdutos)
    }
  } catch (error) {
    res.status(404).json({menssage: `Error: produtos não encontrados`})
  }
})

router.get("/produtos/buscar/:id", async(req, res) => {
  let id = req.params.id;
  try {
    if(Produto.arrayProdutos.length < id){
      res.status(404).json({menssage: `Error: id de produto invalido ou não cadastrado`})
    }
    let filtarProd_id = Produto.arrayProdutos.filter((obj) => obj.idProduto == id)
    res.status(200).json(filtarProd_id)
  } catch (error) {
    res.status(404).json({menssage: `Error: produtos não encontrados`})
  }
})

module.exports = router


