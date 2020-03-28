const express = require('express')
const app = express()

app.get('/', (request, response) =>{
    const params = request.params

    console.log(params)
    return response.json({
    evento:'Semana OmniStack 11.0',
    aluno:'Andre Rodrigues Lima'})
})

app.listen(3333)