import {WebSocket} from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocket.Server({ port: 8080 });

const gameManager = new GameManager();
wss.on('connection',() => function connection(ws:any) {
    gameManager.addUser(ws);

    ws.on('disconnection', () => gameManager.removeUser(ws));
})