const database = require("./sqlite");

const addWord = (word) => {
    return new Promise((resolve) => {
        database.run("INSERT INTO dictionary (isActive, oneForm, twoForm, theeForm) VALUES (?,?,?,?)", word)
        database.get("SELECT last_insert_rowid() as id", function (err, row) {
            resolve(row['id'])
        });
    })

}

module.exports = {
    addWord
}
