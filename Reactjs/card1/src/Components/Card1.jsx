import React from 'react'
// import img from '../assets/chess.jpg'

const Card1 = (props) => {
  return (
    <>
    <div className='flex justify-center'>
        <div className='w-80 my-4 mx-7 border-2 border-gray-400 rounded-md shadow-lg shadow-gray-700'>
            <img className='h-[200px] w-80' src={props.img} alt="" />
            <div className='flex justify-center'>
            <h1 className='font-bold text-2xl mt-11 text-gray-600 mb-4 '>{props.name}</h1>
            </div>
            <div>
                <p className='px-6 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptatum similique tempore eligendi atque Lorem ipsum dolor sit,Lorem ipsum dolor sit. elit. Eos, harum!</p>
            </div>
            <div className='flex justify-center mt-3 mb-6'>
            <button className='border-2 border-gray-400 rounded-md p-1 text-gray-500 '>Go AnyWhere</button>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Card1
