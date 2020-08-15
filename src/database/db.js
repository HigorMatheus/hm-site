// inportando o Knex 
const Knex = require('knex');
// path utilizamos para lidar com caminhos dentro do nodeJS
const path = require('path');
//criando coneção com banco de dados 
const DB= Knex({
    client: 'sqlite3',
    connection:{
      filename: path.resolve(__dirname,'database.sqlite3')
    },
    useNullAsDefault: true
});
// exportando conection
module.exports = DB;
