import React, { useState } from 'react'


    const Use_stat = () => {

        const [Count, setCount] = useState(0)

        const handleIncrement = () => {
            setCount(Count + 1)
        }


        const handleDecrement = () => {
            if(Count>0){

                setCount(Count - 1)
            }
        }


        const handleReset = () => {
            setCount(0)
        }
        
        return(
            <>
        <div className='h-[300px] border-2 border-black w-[500px] bg-slate-700 mt-36 mx-36'>
               <h1 className='font-bold mt-20 flex items-center justify-center text-3xl text-white' >{Count}</h1>
               <div className='text-center m-14 justify-'>
               <button className='border-2 p-2 hover:border-black hover:bg-pink-300 px-4 mx-3 text-white hover:text-slate-700' onClick={handleIncrement}>Increment</button>
               <button className='border-2 p-2 hover:border-black hover:bg-pink-300 px-4 mx-3 text-white  hover:text-slate-700' onClick={handleDecrement}>Decrement</button>
               <button className='border-2 p-2 hover:border-black hover:bg-pink-300 px-6 mx-3 text-white  hover:text-slate-700' onClick={handleReset}>Reset</button>
               </div>
        </div>
        </>
    )
}


export default Use_stat