// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path'); // Add this line

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

function executeScripts() {
  const script1 = require('./1.js');
  const script2 = require('./2.js');
  const script3 = require('./3.js');

  const output1 = script1();
  const output2 = script2();
  const output3 = script3();

  mainWindow.webContents.send('scripts-executed', { output1, output2, output3 });
}

app.on('ready', () => {
  const { ipcMain } = require('electron');

  ipcMain.on('button-clicked', () => {
    executeScripts();
  });
});
