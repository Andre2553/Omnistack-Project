const express = require('express')
const crypto = require('crypto')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents',IncidentController.index)
routes.post('/incidents',IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete,)
module.exports = routes;