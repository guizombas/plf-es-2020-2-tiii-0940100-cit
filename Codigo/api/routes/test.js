const { Router } = require('express')
var Database = require('../utils/database');
const router = Router()

// Test route
router.get('/test', (req, res, next) => { // caminho da rota, ver resultado em pages/index.vue
  let db = new Database();
  req.session.views = 1
  console.log(req.session.views)
  var connection = db.connect(); // Abrir conexão com o banco
  connection.query('SELECT COUNT(denuncia.id) AS cnt FROM denuncia', function (error, results, fields) {
    if (error) console.log(error);
    res.json(results[0])
  });
  connection.end(); // Fechar conexão com o banco (Dá ruim se ficar só abrindo)
})

router.get('/test/:id', (req, res, next) => {  // Rota com id dinamico, para consultas com filtros, tipo buscar as contribuições de uma denuncia com o id
  const id = parseInt(req.params.id)
  console.log('aaa')
  res.json(id)
})

router.get('/tests', (req, res, next) => {  // Rota com id dinamico, para consultas com filtros, tipo buscar as contribuições de uma denuncia com o id
  console.log(req.session.views)
  res.json(req.session.views)
})


module.exports = router