//Import connection from connection.js
var connection = require('./connection.js');

function questionMarks(num){
    var arr = [];

    for(var i=0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

//function to convert object key to SQL syntax 
function objToSql(ob){
    var arr = [];

    //loop through all the keys and push the value as a string
    for (var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            //if string has spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = " " + value + " ";
            }
        
            arr.push(key + "=" + value);
        }
    }

//turns array of strings to a single comma-sepeated string

            return arr.toString();
}

//Object for all the SQL functions

var orm = {

    selectAll:  function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString =+ cols.toString();
        queryString += " )";
        queryString += "VALUES (";
        queryString += questionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connnection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql (objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;