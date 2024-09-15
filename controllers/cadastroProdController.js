const { Produto } = require("../DAO/bd")
const express = require("express")

const router = express.Router();

router.get("/cadastroteste", async(req, res) => {
  res.send("arquivo carregando")
})

//cadastro por body da request 
router.post("/cadastro/produto", async(req, res) => {
  try {
    const dataBody = req.body
    Produto.addProduto(dataBody.nomeProduto, dataBody.descricaoProduto, dataBody.custoProduto, dataBody.vendaProduto)
    res.status(200)
  } catch (error) {
    res.status(400).json({menssage: "Error ao adicionar new produto"})
  }
})

module.exports = router