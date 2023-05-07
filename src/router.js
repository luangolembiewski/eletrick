const express = require("express");
const router = express.Router();

const usuarioController =  require("./controllers/usuarioController");
const proprietarioController =  require("./controllers/proprietarioController");
const veiculoController = require("./controllers/veiculoController");
const solicitacaoController = require("./controllers/solicitacoesController");
const agendaController = require("./controllers/agendaController");
const consultaEleitor = require("./controllers/consultaEleitor");

//Usuario
router.get('/usuarios/:id', usuarioController.getById);
router.get('/usuarios', usuarioController.getLogin);
router.post('/usuarios', usuarioController.setRegister);

//Proprietario
router.get('/proprietarios/:id', proprietarioController.getById);
router.get('/proprietarios', proprietarioController.getLogin);
router.post('/proprietarios', proprietarioController.setRegister);

//Veiculos
router.get('/veiculos/:id',veiculoController.getById);
router.get('/veiculos',veiculoController.getByQuery);
router.post('/veiculos',veiculoController.setVehicle);
router.put('/veiculos/:id',veiculoController.updateVehicle);
router.delete('/veiculos/:id',veiculoController.deleteVehicle);

//Solicitações
router.get('/solicitacoes/:id',solicitacaoController.getById);
router.get('/solicitacoes/',solicitacaoController.getByQuery);
router.post('/solicitacoes/',solicitacaoController.setSolicitacoes);
router.put('/solicitacoes/:id',solicitacaoController.updateSolicitacoes);

//Agendas
router.get('/agendas/:id',agendaController.getById);
router.get('/agendas/',agendaController.getByIdVeiculo);
router.post('/agendas/',agendaController.setAgenda);
router.delete('/agendas/:id',agendaController.deleteAgenda);

//Eleitor
router.get('/eleitor', consultaEleitor.consulta);

module.exports = router;