const sqlite3 = require('sqlite3');
const DB_NAME = 'dictionary'
const database = new sqlite3.Database('./public/db.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
});

database.serialize(()=>{
    database.run(`CREATE TABLE IF NOT EXISTS  ${DB_NAME} (id INTEGER PRIMARY KEY AUTOINCREMENT, isActive NUMERIC(1), oneForm VARCHAR(30), twoForm VARCHAR(30), theeForm VARCHAR(30))`);


    // database.run(`DROP ${DB_NAME} lorem`);

    // const stmt = database.prepare("INSERT INTO lorem (isActive, oneForm, twoForm, theeForm) VALUES (?,?,?,?)");
    // for (let i = 0; i < 9; i++) {
    //     stmt.run([i, 'oneForm', 'twoForm', 'theeForm']);
    // }
    // stmt.finalize();
    //
    // database.each("SELECT * FROM lorem ORDER BY id DESC", (err, row) => {
    //     console.log(row);
    // });
})


module.exports = database
