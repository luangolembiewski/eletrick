const connection = require("./connection");

const getById = async(id)=>{
    const query = `SELECT * FROM agendas WHERE Id=${id}`;
    const [agenda] = await connection.execute(query);
    return agenda;
};

const getByIdVeiculo = async(idVeiculo)=>{
    const query = `SELECT * FROM agendas WHERE IdVeiculo=${idVeiculo}`;
    const [agendas] = await connection.execute(query);
    return agendas;
};

const setAgenda = async(agenda)=>{ //quando criar um carro ja cria uma agenda
    const query = `INSERT INTO agendas(IdVeiculo,IdSolicitacao,Data,HorarioInicio,HorarioFinal) VALUE (${agenda.IdVeiculo},${agenda.IdSolicitacao},'${agenda.Data}','${agenda.HorarioInicio}','${agenda.HorarioInicio}')`;
    const [createdAgenda] = await connection.execute(query);
    return {insertId: createdAgenda.insertId};
};
const deleteAgenda = async(id)=>{
    const query = `DELETE FROM agendas WHERE Id=${id}`;
    const deletedAgenda = await connection.execute(query);
    return deletedAgenda;
};

module.exports = {
    getById,
    getByIdVeiculo,
    setAgenda,
    deleteAgenda
};