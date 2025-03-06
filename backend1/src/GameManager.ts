import {Game} from "./Game";
import {INIT_GAME, MOVE} from "./Messages";
import { WebSocket } from "ws";

export class GameManager {
     private game: Game[];
     private pendingUsers: WebSocket | null;
     private users: WebSocket[];

     constructor(){
        this.game = [];
        this.pendingUsers = null;
        this.users = [];
    }

     addUser(socket: WebSocket){
        this.users.push(socket);
        this.addHandler(socket)
     }
     removeUser(socket: WebSocket){
        this.users = this.users.filter(user => user !== socket);
     }
     private addHandler(socket: WebSocket){
        socket.on('message',(data:any) =>{
            const message = JSON.parse(data.toString());
            if(message.type === INIT_GAME){
                if(this.pendingUsers){
                    const game = new Game(this.pendingUsers,socket);
                    this.pendingUsers = null;
                    this.game.push(game);
                }
                else{
                this.pendingUsers = socket;
                }
            }
            if(message.type === MOVE){
                console.log("inside move ");
                const game = this.game.find(game => game.player1 === socket || game.player2 === socket);
                if( game) {
                    console.log("inside game make move");
                    game.makeMove(socket, message.move);
                }
            }
        })
     }
}