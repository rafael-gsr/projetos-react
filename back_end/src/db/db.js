const {Sequelize} = require('sequelize')
const bancoDeDados = new Sequelize({
    dialect:'sqlite',
    storage:'./src/db/database.db',
    logging:false
})

// try{
//     sequelize.authenticate();
//     console.log('Conexão realizada')

// }catch(error){
//     console.log('Erro na conexão: ' + error)
// }


module.exports = {bancoDeDados}