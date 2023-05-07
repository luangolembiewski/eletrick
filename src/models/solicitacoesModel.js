const connection = require("./connection");

const getById = async(id)=>{
    const query = `SELECT * FROM solicitacoes WHERE Id=${id}`;
    const solicitacao = connection.execute(query);
    return solicitacao;
}
const getByIdUsuario = async(idUsuario)=>{
    const query = `SELECT * FROM solicitacoes WHERE IdUsuario=${idUsuario}`;
    const solicitacoes = connection.execute(query);
    return solicitacoes;
}
const getByIdProprietario = async(idProprietario)=>{
    const query = `SELECT * FROM solicitacoes WHERE IdProprietario=${idProprietario}`;
    const solicitacoes = connection.execute(query);
    return solicitacoes;
}
const setSolicitacoes = async(solicitacao)=>{
    const query = `INSERT INTO solicitacoes(IdVeiculo,IdProprietario,IdUsuario,Data,HoraInicio,HoraFinal,HoraFuncionamento,HoraFuncionamentoCarona,HoraParado,HoraTotal,Status) VALUE(${solicitacao.IdVeiculo},${solicitacao.IdProprietario},${solicitacao.IdUsuario},'${solicitacao.Data}','${solicitacao.HoraInicio}','${solicitacao.HoraFinal}','${solicitacao.HoraFuncionamento}','${solicitacao.HoraFuncionamentoCarona}','${solicitacao.HoraParado}','${solicitacao.HoraTotal}','${solicitacao.Status}')`;
    const [createdSolicitacao] = await connection.execute(query);
    return {insertId: createdSolicitacao.insertId};
}
const updateSolicitacoes = async(id,status)=>{
    const query = `UPDATE solicitacoes SET Status='${status}' WHERE Id=${id}`;
    const [updatedSolicitacao] = await connection.execute(query);
    return updatedSolicitacao;
}

module.exports = {
    getById,
    getByIdUsuario,
    getByIdProprietario,
    setSolicitacoes,
    updateSolicitacoes
}