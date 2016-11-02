const {app, BrowserWindow} = require('electron')
let win
function createWindow () {
  win = new BrowserWindow({show:false,width: 901, height: 605,minWidth: 901, minHeight: 605,maxWidth: 901, maxHeight: 605, frame:false, icon: `${__dirname}/icon.png`})
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
