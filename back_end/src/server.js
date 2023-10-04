const cors = require('cors')
const express = require('express')

const dbModel = require('./db/dbModel')
const {sequelize} = require('./db/db')
const crud = require('./db/crud')
const routes = require('./routes/routes')



const server = express()
const port = 5500

server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())

crud.criarPagina('Home','',1)
crud.criarItem('Calendário',`images/favicon.svg`,null,null)


server.use('/',routes)
server.use((req,res) => {res.send('Caminho não encontrado  - error 404')})

server.listen(port, () => {console.log('Server Rodando na porta ' + port)})