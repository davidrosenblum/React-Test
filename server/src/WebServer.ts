import * as http from "http";
import * as express from "express";

export const ROOT_DIR:string = "../app/build/";

export class WebServer{
    private _httpApp:express.Application;
    private _httpServer:http.Server;

    constructor(){
        // express
        this._httpApp = express().use(express.static(ROOT_DIR));
        // http server
        this._httpServer = http.createServer(this._httpApp);

        this.createRoutes();
        this.init();
    }

    private createRoutes():void{
        // servers static pages
        this._httpApp.get("/", (req, res) => res.sendFile("index.html"));
    }

    private init():void{
        console.log("WebServer (Node.js + Express)");

        // PORT=<number> as first command line arg, default port 8080
        let port:number = parseInt(process.env.PORT) || 8080;

        // make http server listen on the port 
        this._httpServer.listen(port, () => {
            console.log(`HTTP server listening on port ${port}.`);
        });
    }
}

if(require.main === module){
    new WebServer();
}