const express = require('express')
const router = express.Router();
const postagemController = require('../controllers/postagemControllers')
const cors = require("cors")

//@route GET postagens
//@desc Retornar todas as postagens
//@access Public 
//@endpoint http://localhost:porta/postagem
router.get('/postagem', cors(), postagemController.obterPostagens);

//@route POST postagens
//@params body
//@desc Cria uma nova postagem 
//@access Public
//@endpoint http://localhost:PORT/postagem

router.post('/postagem', cors(), postagemController.criarPost)

//@route DELETE postagens
//@params :id
//@desc Deleta uma postagem utilizando o id
//@access Public
//@endpoint http://localhost:PORT/postagem/:id

router.delete('/postagem/:id', cors(), postagemController.deletebyId)

module.exports = router