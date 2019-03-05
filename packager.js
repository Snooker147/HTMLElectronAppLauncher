const packager = require("electron-packager");
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

packager({
    icon: "icon.ico",
    platform: "win32",
    arch: "x64",
    dir: "./",
    out: "electron",
    name: "App",
    appBundleId: "release",
    appCopyright: "Copyright 2019 - Dominik 'Snooker147' Rataj",
    appVersion: "1.0.0",
    overwrite: true,
    ignore: [
        "tsconfig.json",
        "packager.js",
    ]
}).then(p => {
    console.log("Done, cleaning up...");
    
    const srcDir = path.join(p.join("/"), "resources", "app", "src");
    rimraf.sync(srcDir);

    console.log("Finished. See your Application file inside the electron folder.");
});