"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express = require("express");
exports.ROOT_DIR = "../app/build/";
var WebServer = (function () {
    function WebServer() {
        this._httpApp = express().use(express.static(exports.ROOT_DIR));
        this._httpServer = http.createServer(this._httpApp);
        this.createRoutes();
        this.init();
    }
    WebServer.prototype.createRoutes = function () {
        this._httpApp.get("/", function (req, res) { return res.sendFile("index.html"); });
    };
    WebServer.prototype.init = function () {
        console.log("WebServer (Node.js + Express)");
        var port = parseInt(process.env.PORT) || 8080;
        this._httpServer.listen(port, function () {
            console.log("HTTP server listening on port " + port + ".");
        });
    };
    return WebServer;
}());
exports.WebServer = WebServer;
if (require.main === module) {
    new WebServer();
}
