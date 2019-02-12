const electron = require('electron');
var sb = require('satoshi-bitcoin');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', launchInfo => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('convert:submit', (event, btcVal) => {
  const satValue = sb.toSatoshi(btcVal);
  mainWindow.webContents.send('convert:result', satValue);
});