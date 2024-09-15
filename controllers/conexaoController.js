const express = require("express");
const cors = require("cors")
const port = 8080;
const app = express()

app.listen(port, () => {
  console.log(`localhost:${port}`)
})
//Cors
app.use(cors())

app.use(express.json())

//GET de teste:
app.get("/", async(req, res) => {
  res.send(`OK`)
})

//Outros arquivos com GET PUT POST DELETE
const consultarProdutos = require("./consultarProdController")
app.use(consultarProdutos);

const cadastroNewProduto = require("./cadastroProdController")
app.use(cadastroNewProduto);

const deleteDataProduto = require("./deleteProdController")
app.use(deleteDataProduto);

