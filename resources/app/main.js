const {app, BrowserWindow} = require('electron')
let win
function createWindow () {
  win = new BrowserWindow({show:false,width: 901, height: 545,minWidth: 901, minHeight: 545,maxWidth: 901, maxHeight: 545, frame:false, resizable:false, icon: `${__dirname}/icon.png`})
win.loadURL(`file://${__dirname}/index.html`)
win.once('ready-to-show', () => {
  win.show()
})
win.on('closed', () => {
win = null
})
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
app.quit()
}
})
app.on('activate', () => {
if (win === null) {
createWindow()
}
})
