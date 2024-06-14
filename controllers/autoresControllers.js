const { Autores } = require('../models');



const listarAutores = async (req, res) => {
  try {
    const autores = await Autores.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const obterAutor = async (req, res) => {
  try {
    const autor = await Autores.findByPk(req.params.id);
    if (autor) {
      res.json(autor);
    } else {
      res.status(404).json({ error: 'Autor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const criarAutor = async (req, res) => {
  try {
    const { name, age } = req.body;
    const autor = await Autores.create({ name, age });
    res.status(201).json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const atualizarAutor = async (req, res) => {
  try {
    const { name, age } = req.body;
    const autor = await Autores.findByPk(req.params.id);
    if (autor) {
      await autor.update({ name, age });
      res.json(autor);
    } else {
      res.status(404).json({ error: 'Autor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deletarAutor = async (req, res) => {
  try {
    const autor = await Autores.findByPk(req.params.id);
    if (autor) {
      await autor.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Autor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarAutores,
  obterAutor,
  criarAutor,
  atualizarAutor,
  deletarAutor
};