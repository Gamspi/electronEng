const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path');
const url = require('url');
// const notifier = require('node-notifier');
// const database = require('./dataBase/sqlite')
const DateEventEnum = require("./dbEvents");
const WordConverter = require("./converters/wordConverter");
const {DataBaseController} = require("./dataBase/controller");


const startUrl = app.isPackaged ? url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
}) : 'http://localhost:3000'
let win

function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 1000,
        minHeight: 500,
        minWidth: 768,
        icon: __dirname + '/img/sc.png',
        resizable: true,
        frame: false, //рамка
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false,
        }
    });
    win.loadURL(startUrl);
    win.on('close', () => {
        win = null
    })
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    app.quit()
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
ipcMain.on('CLOSE', () => {
    app.quit()
})
ipcMain.on('HIDE', () => {
    win.minimize()
})
ipcMain.on('MAX', () => {
    win.maximize()
})
ipcMain.on('send', (event, arg) => {
    event.reply('send', 'this is response')
})
ipcMain.on(DateEventEnum.ADD_WORD, (event, word) => {
    DataBaseController.addWord(WordConverter.toArray(word)).then((id) => {
        event.reply(DateEventEnum.ADD_WORD, id)
    })
})

ipcMain.on(DateEventEnum.REMOVE_WORD, (event, id) => {
    DataBaseController.removeWord(id).then((success) => {
        event.reply(DateEventEnum.REMOVE_WORD, success)
    })
})
ipcMain.on(DateEventEnum.GET_WORDS, (event) => {
    DataBaseController.getWords().then((result) => {
        const response = result.map(item => WordConverter.toObject(item))
        event.reply(DateEventEnum.GET_WORDS, response)
    })
})
ipcMain.on(DateEventEnum.CHANGE_ACTIVE_WORDS, (event, {id, isActive}) => {
    console.log({id, isActive})
    DataBaseController.change({id, value: isActive, label: 'isActive'}).then((result) => {
        event.reply(DateEventEnum.CHANGE_ACTIVE_WORDS, true)
    })
})
ipcMain.on('DEV', () => {
    win.webContents.openDevTools()
})

ipcMain.on('ALERT', (event, {title, content}) => {
    dialog.showMessageBox(win, {
        buttons: ["Yes"],
        title,
        message: content
    }).then(()=>{
        event.reply('ALERT')
    })
})
ipcMain.on('CONFIRM', (event, {content}) => {
    dialog.showMessageBox(win, {
        buttons: ["No", "Yes"],
        message: content
    }).then(({response}) => {
        event.reply('CONFIRM', !!response)
    })
})
