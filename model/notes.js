const orm = require("../db/orm.js")

class Notes{
    selectAll(){
        return orm.selectAll("notes")
    }

    create(values){
        return orm.create("notes", ["title", "text"], values)
    }

    remove(id){
        return orm.delete("notes", "id", id)
    }
}

var test = new Notes()
/*
test.create(["This is a title", "This is a text"])
.then (results => {
    console.log(results)
})


test.selectAll()
.then (results => {
    console.log(results)
})
*/

test.remove(1)
.then (results => {
    console.log(results)
})