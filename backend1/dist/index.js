"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const wss = new ws_1.WebSocket.Server({ port: 8080 });
const gameManager = new GameManager_1.GameManager();
wss.on('connection', () => function connection(ws) {
    gameManager.addUser(ws);
    ws.on('disconnection', () => gameManager.removeUser(ws));
});
