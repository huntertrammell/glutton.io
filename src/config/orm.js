var con = require('./connection')

var orm = {
    selectAll: function(table) {
        var qstr = "SELECT * FROM ??";
        con.query(qstr, [table], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function(table, col, item) {
        var qstr = "INSERT INTO ?? (??) VALUES (??)";
        con.query(qstr, [table, col, item], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    },
    updateOne: function(table, col, boolean, condition) {
        var qstr = "UPDATE ?? SET ?? = ?? [WHERE ?? = ??]";
        con.query(qstr, [table, col, boolean, condition], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    }
}

module.exports = orm;