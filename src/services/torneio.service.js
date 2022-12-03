const db = require('../models')
const Torneio = db.torneio

exports.findAll = async () => {
    try {
        const torneio = await Torneio.findAll({
            attributes: ['id', "nome", 'logo', 'descricaoLonga', 'descricaoBreve', 'imgFundo',  'thumbnail', 'participantes', 'gameId', 'chave', 'quantiaParticipantes', 'donoCriacao', 'admins']
        })
        return torneio
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os torneios. ERROR: ' + e.message)
    }
}

exports.findByPk = async (id) => {
    try {
        const torneio = await Torneio.findByPk(id, {
            attributes: ['id', "nome", 'logo', 'descricaoLonga', 'descricaoBreve', 'imgFundo',  'thumbnail', 'participantes', 'gameId', 'chave', 'quantiaParticipantes', 'donoCriacao', 'admins']
        })
        return torneio
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os torneio. ERROR: ' + e.message)
    }
}

exports.create = async (nome, logo, descricaoLonga, descricaoBreve, imgFundo, thumbnail, participantes, gameId, chave, quantiaParticipantes, donoCriacao, admins) => {
    try {
        const torneio = await Torneio.create({ nome: nome, logo: logo, imgFundo: imgFundo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve, thumbnail: thumbnail, participantes: participantes, gameId: gameId, chave: chave, quantiaParticipantes: quantiaParticipantes, donoCriacao: donoCriacao, admins: admins})
        return torneio
    } catch (e) {
        return e.message
    }
}

exports.update = async (id ,nome, logo, descricaoLonga, descricaoBreve, imgFundo, thumbnail, participantes, gameId, chave, quantiaParticipantes, donoCriacao, admins) => {
    try {
        await Torneio.update({
            nome: nome, logo: logo, imgFundo: imgFundo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve, thumbnail: thumbnail, participantes: participantes, gameId: gameId, chave: chave, quantiaParticipantes: quantiaParticipantes, donoCriacao: donoCriacao, admins: admins
        }, { where: { id: id } })

    } catch (e) {
        throw Error('Erro ao alterar o time: ' + nome + ' ERROR: ' + e.message)
    }
}

exports.delete = async(id) => {
    try{
        await Torneio.destroy({
            where: {id: id}
        })

    }catch(e){
        throw Error('Erro ao deletar o time: ' + id + ' ERROR: ' + e.message)
    }
}
