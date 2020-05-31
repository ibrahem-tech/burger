var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertInto: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table + " SET " + cols + " = ?";
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, cols, vals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + cols + " = " + vals + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    delete: function (table, cols, vals, cb) {
        var queryString = "DELETE FROM " + table + " WHERE " + cols + " = " + vals;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

// Export the orm object
module.exports = orm;
