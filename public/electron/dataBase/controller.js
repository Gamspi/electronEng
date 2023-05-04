const database = require("./sqlite");
const {DB_NAME} = require("./constants");

class DataBaseController {
    static addWord = (word) => {
        return new Promise((resolve) => {
            database.run(`INSERT INTO ${DB_NAME} (isActive, oneForm, twoForm, theeForm) VALUES (?,?,?,?)`, word)
            database.get("SELECT last_insert_rowid() as id", function (err, row) {
                resolve(row['id'])
            });
        })
    }
    static removeWord = (id) => {
        return new Promise((resolve) => {
            database.run(`DELETE FROM ${DB_NAME} WHERE id=${id}`)
            resolve(true)
        })
    }
    static getWords = () => {
        return new Promise( (resolve) => {
            database.all(`SELECT ID, * FROM ${DB_NAME} `, (err, rows) =>{
                resolve(rows)
            })

        })
    }
    static change = ({label, value, id}) => {
        return new Promise( (resolve) => {
            database.run(`UPDATE ${DB_NAME} SET ${label}=? WHERE id=${id}`, [value],(err, rows) =>{
                if (!err)resolve()
            })

        })
    }
}

module.exports = {
    DataBaseController
}
