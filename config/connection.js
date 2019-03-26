//Setting up node to connect to MYSQL

var mysql = require("mysql");
var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user:   "root",
    password:   "A2bruti07",
    database: "burgers_db"
});

//Make the connection
connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export the connection for the ORM
module.exports = connection;