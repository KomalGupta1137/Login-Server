const mysql = require('mysql');

const configuration = {
    secret:'36e8bc17434c3f71b468c9c2a5d68352fc811198f498bdbdfcf60de5f0a82f17f38eb5c804920d97c8d4da996f29b70fcbbe606ec42bccf0c7f7616ac190e69a',
    database:{
        host:'localhost',
        user:'root',
        password:'Mysql@1137',
        database:'users'

    }

}

const connection = mysql.createConnection(
    configuration.database

)

connection.connect((error) => {
    if(error){
        console.log("not connected to database")
    }
    else{
        console.log('connected to database')
    }
})

module.exports = {connection,configuration};