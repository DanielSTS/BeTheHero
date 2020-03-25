const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncindentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);


module.exports = routes;

/* 
Métodos Http

Get: buscar/listar uma informação no back-end
Post: criar uma informação no back-end
Put: alterar uma informação no back-end
Delete: deletar uma informação no back-end

*/


/*
Tipos de Parâmetros

Query: Parâmetros nomeados enviados na rota usando "?" (filtros/paginação) "?nome=daniel" 
Route: Parâmetros utilizados para identificar recursos 
Request Body: Corpo da requisição utilizado para criar ou alterar recursos 
*/

/*
Driver: "select * from usuario"
Query Builder: table('usuario').select('*').where()
*/