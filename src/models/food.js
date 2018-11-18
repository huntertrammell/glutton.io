var orm = require('../config/orm')

var food = {
    selectAll: function(table) {
        orm.selectAll("food", function(res){
            return res
        })
    },
    insertOne: function(table, col, item) {
        orm.insertOne("food", "food_name", item, function(res){
            return res
        })
    },
    updateOne: function (table, col, boolean, condition) {
        orm.updateOne("food", "eaten", "true", condition, function(res){
            return res
        })
    }
};

module.exports = food