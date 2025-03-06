import React, { useEffect,useState } from 'react'
import { ChessBoard } from '../compounds/ChessBoard'
import { useSocket } from '../hooks/useSocket'
import { Chess } from 'chess.js'


// TODO: Moving Together there reputation Code: here,
export const INIT_GAME = "init_game";
export const MOVE = "MOVE";
export const GAME_OVER = "game_over";
export const Game = () => {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board())
    useEffect(() => {
        if(!socket) return
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data)
            console.log(message);
            switch (message.type){
                case INIT_GAME:
                    setChess(new Chess());
                    setBoard(chess.board());
                    console.log("Game Initialized.")
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Make Move ");
                    break;
                case GAME_OVER:
                    console.log("Game Over")
                    break;
            }
        }
    },[socket]
)
    if(!socket) return <div className='bg-gray-200 font-medium '>
        loading...
    </div>
    return (
        <div className='justify-center flex-row '>
            <div className='pt-4 max-w-screen-xl'>
                <div className='grid grid-cols-6 gap-4 justify-center'>
                    <div className=' col-span-4  justify-center '>
                         <ChessBoard chess={chess} setboard= {setBoard} socket={socket} board={board} />
                    </div>
                    <div className='col-span-2 bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded   '>
                        <div className=" bg-green-600  hover:bg-green-700 flex justify-center py-1 px-2 cursor-pointer ">
                            <button  onClick={ () => {
                                socket.send(JSON.stringify({
                                  type:INIT_GAME,
                                  payload:{}
                                     
                                }))
                            }}>
                                Just Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}