const path = require('path')
const url = require('url')
const {app, BrowserWindow, ipcMain } = require('electron')



function createWindow() {
    let win = new BrowserWindow({
        width: 300,
        height: 450,
        // height: 150,
        icon:__dirname+'/img/sc.png',
        resizable: true,
        frame:false, //рамка
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false,
        }
    });
    win.loadURL('http://localhost:3000');
    win.on('close', () => {
        win = null
    })
}
app.whenReady().then(createWindow)
app.on('window-all-closed', ()=>{
    app.quit()
})
ipcMain.on('close',()=>app.quit())
