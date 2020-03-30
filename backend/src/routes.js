const express = require('express');

const {celebrate,Segments,Joi} = require('celebrate');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncindentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions',celebrate({
    [Segments.BODY]: Joi.object().keys({
        id:Joi.string().required(),
        
    })
    
}),SessionController.create);


routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.number().required(),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2),
    })
    
}),OngController.create);

routes.get('/ongs',OngController.index);


routes.post('/incidents',IncidentController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:Joi.number(),
    })
}),IncidentController.index);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:Joi.number().required()
    })
}),IncidentController.delete);



routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}),ProfileController.index);



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