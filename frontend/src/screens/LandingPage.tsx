import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='pt-1 bg-slate-600 max-h-full'>
             <div className='flex grid-cols-2 gap-4 md:grid-cols-4 justify-center'>
                <div className='flex justify-center'> 
                    <img src="./Chess.jpg" alt="image" 
                    className="max-w-screen-sm"/>
                </div>
                <div className='pt-20'>
                    <h1 className='text-3xl font-serif font-semibold justify-items-center m-3 p-1 hover:text-orange-500'>
                        Welcome to the Chess Game World Largest `IQ` Chess Game
                    </h1>
                    <p className='font-mono'> just Click to play icon enjoy the Game </p>
                    <h4 className='text-sm font-light text-green-500 flex justify-center'>Good blesses!</h4>
                    <div className='mt-4 flex justify-center'>
                        <button  onClick={() => navigate('/game')}  className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
                            Click Play
                        </button>
                    </div>
                </div>
             </div>
             <div className='justify-items-center text-xl text-orange-500'>
                <h2>
                    Hey There, Free Played to Chess with online Friend's
                </h2>
             </div>
        </div>
    )
}