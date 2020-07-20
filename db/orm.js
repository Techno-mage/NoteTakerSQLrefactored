const connection = require("../db/connection.js");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    printQuestionMarks(numberOfValues){
        const questionMarks = [];
    
        for (var i = 0; i < numberOfValues; i++) {
          questionMarks.push("?");
        }
    
        return questionMarks.join(', ');
    }

    selectAll(table) {
        //console.log(typeof table);
        const queryString = 'SELECT * FROM  ??';
        return this.connection.query(queryString, [table])
    }

    create(table, variables, values){
        const queryString = `INSERT INTO ??(${variables.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`
        //console.log(queryString)
        //console.log([table].concat(variables.concat(values)))
        return this.connection.query(queryString, [table, ...values])
    }

    delete(table, column, value){
        var queryString = `DELETE FROM ?? WHERE ?? = ?`;
    
        return this.connection.query(queryString, [table, column, value] )
    }

}

module.exports = new ORM(connection);