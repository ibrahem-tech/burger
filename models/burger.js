var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insert: function (vals, cb) {
        orm.insertInto('burgers', 'burger_name', vals, function (res) {
            cb(res);
        });
    },

    update: function (vals, condition, cb) {
        orm.update('burgers', 'devoured', vals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (cb) {
        orm.delete('burgers', 'devoured', 'true', function (res) {
            cb(res);
        });
    }
};

module.exports = burger;