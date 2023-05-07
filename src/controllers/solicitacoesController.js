const solicitacoesModel = require("../models/solicitacoesModel");

const getById = async(request,response)=>{
    try {
        const {id} = request.params;
        const solicitacao = await solicitacoesModel.getById(id)
        return response.status(200).json(solicitacao[0]);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}
const getByQuery = async(request,response)=>{
    try {
        var solicitacoes = null;
        const qr = request.query;
        if(qr.idProprietario){
            const {idProprietario} = qr;
            solicitacoes = await solicitacoesModel.getByIdProprietario(idProprietario);
        }else if(qr.idUsuario){
            const {idUsuario} = qr;
            solicitacoes = await solicitacoesModel.getByIdUsuario(idUsuario);
        }
        return response.status(200).json(solicitacoes[0]);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}
const setSolicitacoes = async(request,response)=>{
    try {
        const solicitacao = request.body;
        const createdSolicitacao = await solicitacoesModel.setSolicitacoes(solicitacao)
        return response.status(201).json(createdSolicitacao);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}
const updateSolicitacoes = async(request,response)=>{
    try {
        const {id} = request.params;
        const {status} = request.body;
        const updatedSolicitacoes = await solicitacoesModel.updateSolicitacoes(id,status);
        return response.status(204).json(updatedSolicitacoes);
    } catch (e) {
        return response.status(500).json("Erro: "+e);
    }
}

module.exports = {
    getById,
    getByQuery,
    setSolicitacoes,
    updateSolicitacoes
}