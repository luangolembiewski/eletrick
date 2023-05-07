const connection = require('./connection');

const getById = async(id) => {
    const query = `SELECT Id,Nome,Cidade,Email,Numero FROM usuarios WHERE Id=${id}`;
    const [usuario] = await connection.execute(query);
    return usuario;
};

const getLogin = async(login) => {
    const query =`SELECT Id,CPF,Nome,DataNascimento,NomeMae,Cidade,Email,Numero FROM usuarios WHERE CPF='${login.CPF}' and Senha='${login.Senha}'`;
    const [usuario] = await connection.execute(query);
    return usuario;
};

const setRegister = async(usuario)=>{
    const query = `INSERT INTO usuarios(CPF,Nome,DataNascimento,NomeMae,Cidade,Email,Senha,Numero) VALUES('${usuario.CPF}','${usuario.Nome}','${usuario.DtNascimento}','${usuario.mae}','${usuario.Email}','${usuario.Cidade}','${usuario.Senha}',${usuario.Numero})`;
    const [createdUsuario] = await connection.execute(query);
    return {insertId: createdUsuario.insertId};
};

module.exports = {
    getById,
    getLogin,
    setRegister
};
    