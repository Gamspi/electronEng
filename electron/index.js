const {app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
// const notifier = require('node-notifier');
// const database = require('./dataBase/sqlite')
const DateEventEnum = require("./dbEvents");
const wordConverter = require("./converters/wordConverter");
const {addWord} = require("./dataBase/controller");
function createWindow() {
    let win = new BrowserWindow({
        width: 300,
        height: 450,
        // height: 150,
        icon:__dirname+'/img/sc.png',
        resizable: true,
        // frame:false, //рамка
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false,
        }
    });
    // win.loadURL('http://localhost:3000');
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    win.on('close', () => {
        win = null
    })
}
app.whenReady().then(createWindow)
app.on('window-all-closed', ()=>{
    app.quit()
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
ipcMain.on('close',()=> {
    app.quit()
    // notifier.notify(
    //     {
    //         title: 'fdsf', // String. Required
    //         message: 'sdfs', // String. Required if remove is not defined
    //         'app-name': 'node-notifier',
    //         urgency: undefined,
    //         category: undefined,
    //         hint: undefined
    //     },
    //     function (error, response) {
    //         console.log(response);
    //     }
    // );
})
ipcMain.on('send',(event,arg)=> {
event.reply('send', 'this is response')
})
ipcMain.on(DateEventEnum.ADD_WORD,(event,word)=> {
    addWord(wordConverter(word)).then((id)=>{
        console.log(id)
        event.reply(DateEventEnum.ADD_WORD, id)
    })
})
