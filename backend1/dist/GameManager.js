"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const Game_1 = require("./Game");
const Messages_1 = require("./Messages");
class GameManager {
    constructor() {
        this.game = [];
        this.pendingUsers = null;
        this.users = [];
    }
    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket) {
        this.users = this.users.filter(user => user !== socket);
    }
    addHandler(socket) {
        socket.on('message', (data) => {
            const message = JSON.parse(data.toString());
            if (message.type === Messages_1.INIT_GAME) {
                if (this.pendingUsers) {
                    const game = new Game_1.Game(this.pendingUsers, socket);
                    this.pendingUsers = null;
                    this.game.push(game);
                }
                else {
                    this.pendingUsers = socket;
                }
            }
            if (message.type === Messages_1.MOVE) {
                console.log("inside move ");
                const game = this.game.find(game => game.player1 === socket || game.player2 === socket);
                if (game) {
                    console.log("inside game make move");
                    game.makeMove(socket, message.move);
                }
            }
        });
    }
}
exports.GameManager = GameManager;
