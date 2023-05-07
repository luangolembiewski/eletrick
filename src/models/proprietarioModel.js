const connection = require('./connection');

const getById = async(id) => {
    const query = `SELECT Id,Nome,Email,Numero FROM proprietarios WHERE Id=${id}`;
    const [proprietario] = await connection.execute(query);
    return proprietario;
};

const getLogin = async(login) => {
    const query = `SELECT Id,CPF,Nome,Email,Numero FROM proprietarios WHERE CPF='${login.CPF}' and Senha='${login.Senha}'`;
    const [proprietario] = await connection.execute(query);
    return proprietario;
};

const setRegister = async(proprietario)=>{
    const query = `INSERT INTO proprietarios(CPF,Nome,Email,Senha,Numero) VALUES('${proprietario.CPF}','${proprietario.Nome}','${proprietario.Email}','${proprietario.Senha}',${proprietario.Numero})`;
    const [createdproprietario] = await connection.execute(query);
    return {insertId: createdproprietario.insertId};
};


/* const deleteProprietario = async (id) =>{
    const query = `DELETE FROM proprietarios WHERE Id=${id}`;
    const removeproprietario = await connection.execute(query);
    return removeproprietario;
} */

module.exports = {
    getById,
    getLogin,
    setRegister
};
    