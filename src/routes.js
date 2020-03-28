const express = require('express')
const routes = require('./routes')
const app = express();

app.use(express.json())
app.use(routes)

app.get('/', (request, response) =>{
    const params = request.params

    console.log(params)
    return response.json({
    evento:'Semana OmniStack 11.0',
    aluno:'Andre Rodrigues Lima'})
})

app.listen(3333)