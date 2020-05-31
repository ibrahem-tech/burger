const connection = require('./connection.js');

var orm = {
    selectAllDB: function(callback){
       
        const queryString = `SELECT * FROM burgers`;
        connection.query(queryString, function(e,rawResults){
            if(e) throw e
            callback(rawResults);
        });
    },

    insertValueToDB: function(userInput, callback){
       
        console.log(userInput);
        const queryString = `INSERT INTO burgers (name) VALUES ("${userInput}")`;
        connection.query(queryString, function(e){
            if(e) throw e

            callback();
        });
    },

    updateDevour: function(burgerID, callback){
        
        const queryString = `UPDATE burgers SET devoured = TRUE WHERE id = ${burgerID}`;
        connection.query(queryString, function(e){
            if(e) throw e

            callback();
        });
    },

    deleteFromDb: function(burgerID, callback){
        const queryString = `DELETE FROM burgers WHERE id = ${burgerID}`;
        connection.query(queryString, function(e){
            if(e) throw e

            callback();
        });
    }

}
// Export the ORM object
module.exports = orm;