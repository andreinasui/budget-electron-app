const { app, BrowserWindow, Menu } = require("electron");
const { MenuBarTemplate } = require("./src/menu_bar");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
    backgroundColor: "#FFF",
    frame: false,
    // title: app.getName(),
  });

  win.loadFile("src/index.html");

  win.webContents.openDevTools();
  const menuBar = Menu.buildFromTemplate(MenuBarTemplate);

  Menu.setApplicationMenu(menuBar);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
