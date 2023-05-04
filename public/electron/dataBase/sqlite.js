const sqlite3 = require('sqlite3');
const {DB_NAME} = require("./constants");
const database = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
});

database.serialize(()=>{
    database.run(`CREATE TABLE IF NOT EXISTS  ${DB_NAME} (id INTEGER PRIMARY KEY AUTOINCREMENT, isActive NUMERIC(1), oneForm VARCHAR(30), twoForm VARCHAR(30), theeForm VARCHAR(30))`);
})


module.exports = database
