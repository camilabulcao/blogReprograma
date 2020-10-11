let postagemModel = require('../models/posts')

const helper = require('../helpers/helper');

const obterPostagens = (request, response) =>{
  response.status(200).json(postagemModel);
}

const criarPost = (request, response) =>{
    const {titulo, conteudo, tags} = request.body;
    const novoPost = {
        id: helper.obterNovoValor(postagemModel),
        data_criacao: helper.novaData(),
        titulo: titulo,
        conteudo: conteudo, 
        tags: tags 

    }
    postagemModel.push(novoPost)

    return response.status(200).json(novoPost)
}

const deletebyId = (request, response) =>{
    const id = request.params

    postagemModel.filter(item => item.id == id)

    response.json(postagemModel)

}

module.exports ={
    obterPostagens,
    criarPost,
    deletebyId
}