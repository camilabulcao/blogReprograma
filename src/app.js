const express = require('express');
const postagem = require('./models/posts');
const app = express();

const tarefas = require('./');

app.use(express.json());
app.use('/', postagem);

module.exports = app;