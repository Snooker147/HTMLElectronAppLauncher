import { app, BrowserWindow } from "electron";
import { join } from "path";
import Config from "./Config";

app.on("ready", () => {

    let window = new BrowserWindow({ width: Config.width, height: Config.height, resizable: Config.resizable, title: Config.awaitTitle });
    window.loadFile(join(__dirname, "..", Config.htmlFolder, Config.indexFile));
    
    window.on("closed", () => {
        app.quit();
    });

});

app.on("quit", () => {
    process.exit();
});