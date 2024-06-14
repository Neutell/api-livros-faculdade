const { Livro } = require('../models');


const criarLivro = async (req, res) => {
  try {
    const { name, year } = req.body;
    const livro = await Livro.create({ name, year });
    res.status(201).json(livro);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};


const listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};


const obterLivroPorId = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ erro: 'Livro não encontrado' });
    }
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};


const atualizarLivro = async (req, res) => {
  try {
    const { name, year } = req.body;
    const livro = await Livro.findByPk(req.params.id);
    if (livro) {
      livro.name = name;
      livro.year = year;
      await livro.save();
      res.status(200).json(livro);
    } else {
      res.status(404).json({ erro: 'Livro não encontrado' });
    }
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};


const deletarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (livro) {
      await livro.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ erro: 'Livro não encontrado' });
    }
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = {
  criarLivro,
  listarLivros,
  obterLivroPorId,
  atualizarLivro,
  deletarLivro
};