const { Produto } = require("../DAO/bd")
const express = require("express")

const router = express.Router()

router.delete("/deletar/:id", async(req, res) => {
  let idDelete = req.params.id;
  try {
    Produto.arrayProdutos.splice(idDelete, 1)
    res.status(200).send(Produto.arrayProdutos); 
  } catch (error) {
    res.status(400).json({menssage: "Error ao excluir dados"})
  }
})

module.exports = router