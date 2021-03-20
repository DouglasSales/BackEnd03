const express = require('express');

const app = express();

let port = 3000;

app.get("/", function(req, res){
  let caminho = res.sendFile(__dirname + "/index.html");
});

app.get("/sobre", function(req, res){
  let caminho = res.sendFile(__dirname + "/sobre.html");
});


app.get('/json', (req, res) => {
  res.status(200).json({usuario: "douglas", id: 123456 });
});

app.get('/ab[0-9]cd', (req, res) => {
  res.send("Essa é uma expressão regular.");
});

let params_module = require('./params.js');

app.use('/', params_module);


app.post('/post/teste_post', (req, res) => {
  res.send("Você acessou uma página via método POST.")
});


app.get('/', (req, res) => {
  res.send("Olá! Seja bem-vindo!")
});


app.get('*', (req, res) => {
  res.send("Link inválido: 404");
});


app.listen(port, () => console.log(`Escutando na porta ${port}`));
