// preload.js

const { contextBridge, ipcRenderer } = require('electron');

// Expose selected Node.js modules to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  sendIpcMessage: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  receiveIpcMessage: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});
