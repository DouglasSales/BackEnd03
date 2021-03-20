let express = require('express');
let router = express.Router();

router.get('/:param', (req, res) => {
  res.send("Você informou o parâmetro." + req.params.p);
});

router.get('/user/:u/nome/:n', (req, res) => {
  res.send("Você acessou informações do usuário." + req.params.u + "de nome " + req.params.n);
});


module.exports = router;
