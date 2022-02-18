//== DEPENDENCIES ==//

const {app, BrowserWindow} = require('electron');
const path                 = require('path');

//== GLOBAL VARIABLES ==//

var window;

//== FUNCTIONS ==//

// Create the main app window
function CreateWindow()
{
   // Create the window object
   window = new BrowserWindow(
   {
      width: 800,
      height: 600
   }
   );

   // Load the main HTML file to the window object
   window.loadFile('index/index.html');
}

//== MAIN APP ==//

// Waht to do when app is launched and ready
app.whenReady().then(() =>
{
   // Create the main app window
   CreateWindow();

   // If app is activated and there are no windows open, open one
   app.on('activate', () =>
   {
      if (BrowserWindow.getAllWindows().length === 0)
      {
         CreateWindow();
      }
   });
});

// What to do when all app windows are closed
app.on('window-all-closed', () =>
{
   // Quit app if all windows are closed, except on Mac (because that's not the standard on Mac)
   if (process.platform !== 'darwin')
   {
      app.quit();
   }
});