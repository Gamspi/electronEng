const {app, BrowserWindow, ipcMain } = require('electron')
const notifier = require('node-notifier');


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
    win.loadURL('http://localhost:3000');
    win.on('close', () => {
        win = null
    })
}
app.whenReady().then(createWindow)
app.on('window-all-closed', ()=>{
    app.quit()
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
