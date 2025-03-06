import React from "react"
//import { Chess } from "chess.js"
import { Color, PieceSymbol, Square } from 'chess.js'
import { useState } from "react"
import { MOVE } from "../screens/Game"

export const ChessBoard = ({ chess, board, socket, setboard }: {
    setboard: any;
    chess:any;
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
    
}) =>{
    const [from , setFrom] = useState<Square | null>(null);
    const [to , setTo] = useState <Square | null>(null);
    return <div className="bg-slate-600 max-h-full">
    {board.map((row, i) => {
        return <div key = {i} className="flex justify-center text-lg font-bold text-green-800">
            {row.map((square,j) => {
                const squareRepresentation = String.fromCharCode(65+(j % 8 )) + "" + (8 - (i)) as Square;
                return <div onClick={ () => {
                   if(!from){
                       setFrom(squareRepresentation);
                   }else{
                      // setTo(square?.square ?? null);
                       socket.send(JSON.stringify({
                        type:MOVE,
                        payload:{
                            from,
                            to
                        }
                    }));
                    setFrom(null);
                    chess.move(MOVE);
                    setboard(chess.board());

                    console.log({
                        from,
                        to
                    });
                   }
                }}
                 key ={i} className={`w-16 h-16 ${((i + j )% 2 === 0) ? 'bg-black' : "bg-white"}`}>
                    <div className="w-full h-full justify-center flex ">
                        <div className="h-full justify-center flex flex-col">
                         {square ? square.type :""}
                        </div>
                     </div>
                  </div>
            })}

        </div>
    })}
   </div>

}