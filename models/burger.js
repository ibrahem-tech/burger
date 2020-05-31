const orm = require('../config/orm.js')


var burger = {
    selectAllBurgers: function(callback){
        orm.selectAllDB(function(rawResults){
            
            const processedResult = rawResults.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    isDevour: item.devoured
                }
            })
            callback(processedResult)
        })
    },

    passToDbForInsert: function(userInput,callback){
        orm.insertValueToDB(userInput, callback)
    },

    passToDbForUpdate: function(burgerID, callback){
        orm.updateDevour(burgerID, callback)
    },

    passToDbForDelete: function(burgerID, callback){
        orm.deleteFromDb(burgerID,callback);
    }
}


module.exports = burger;