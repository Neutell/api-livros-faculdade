const express = require ('express')
const router = express.Router()
const autoresControllers = require ('../controllers/autoresControllers')
const livroscontrollers = require ('../controllers/livrosControllers')
router.get('/oi',(req,res)=>{
    res.send('oi')
})

router.get('/autores', autoresControllers.listarAutores);
router.get('/autores/:id', autoresControllers.obterAutor);
router.post('/autores', autoresControllers.criarAutor);
router.put('/autores/:id', autoresControllers.atualizarAutor);
router.delete('/autores/:id', autoresControllers.deletarAutor);

router.post('/livros', livroscontrollers.criarLivro);
router.get('/livros', livroscontrollers.listarLivros);
router.get('/livros/:id', livroscontrollers.obterLivroPorId);
router.put('/livros/:id', livroscontrollers.atualizarLivro);
router.delete('/livros/:id', livroscontrollers.deletarLivro);

module.exports = router