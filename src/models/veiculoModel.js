const connection = require("./connection");

const getById = async(id)=>{
    const query = `SELECT * FROM veiculos WHERE Id=${id}`;
    const [veiculo] = await connection.execute(query);
    return veiculo;
}
const getByDono = async(idDono)=>{
    const query = `SELECT * FROM veiculos WHERE IdProprietario=${idDono}`;
    const [veiculos] = await connection.execute(query);
    return veiculos;
}
const getByCity = async(cidade)=>{
    const query = `SELECT * FROM veiculos WHERE Cidade='${cidade}'`;
    const [veiculos] = await connection.execute(query);
    return veiculos;
}
const setVehicle = async(veiculo)=>{
    const query = `INSERT INTO veiculos(IdProprietario,Modelo,Ano,Cor,Placa,Cidade,Endereco,CustoMovimento,CustoHrPassageiro,CustoParado,CustoPassageiro,CustoMulta,HorarioUso,IntervaloContratacao) VALUE (${veiculo.IdProprietario},'${veiculo.Modelo}',${veiculo.Ano},'${veiculo.Cor}','${veiculo.Placa}','${veiculo.Cidade}','${veiculo.Endereco}',${veiculo.CustoMovimento},${veiculo.CustoHrPassageiro},${veiculo.CustoParado},${veiculo.CustoPassageiro},${veiculo.CustoMulta},'${veiculo.HorarioUso}',${veiculo.IntervaloContratacao})`;
    const [createdVehicle] = await connection.execute(query);
    return {insertId: createdVehicle.insertId};
}
const updateVehicle = async(id,veiculo)=>{
    const query = `UPDATE veiculos SET Modelo='${veiculo.Modelo}',Ano=${veiculo.Ano},Cor='${veiculo.Cor}',Placa='${veiculo.Placa}',Cidade='${veiculo.Cidade}',Endereco='${veiculo.Endereco}',CustoMovimento=${veiculo.CustoMovimento},CustoHrPassageiro=${veiculo.CustoHrPassageiro},CustoParado=${veiculo.CustoParado},CustoPassageiro=${veiculo.CustoPassageiro},CustoMulta=${veiculo.CustoMulta},HorarioUso='${veiculo.HorarioUso}',IntervaloContratacao=${veiculo.IntervaloContratacao} WHERE Id=${id}`; 
    const [updatedVehicle] = await connection.execute(query);
    return updatedVehicle;
}
const deleteVehicle = async(id)=>{
    const query = `DELETE FROM veiculos WHERE Id=${id}`;
    const deletedVehicle = await connection.execute(query);
    return deletedVehicle;
}

module.exports = {
    getById,
    getByDono,
    getByCity,
    setVehicle,
    updateVehicle,
    deleteVehicle
}