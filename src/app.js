const express = require('express')
const app = express()
const router = require('./routes/postagemRoutes')

//rotas

app.use(express.json())
app.use('/', router)

module.exports = app