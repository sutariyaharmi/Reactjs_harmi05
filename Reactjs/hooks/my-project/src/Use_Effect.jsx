import React from 'react'
import { useEffect , useState } from 'react'

const Use_Effect = () => {

    const [count1 , setCount1] = useState(0) 
    const [count2 , setCount2] = useState(0) 

    useEffect(() => {
        console.log(`${count1}`)
    })


  return (
    <div>
      <h1 className='text-center bg-purple-700 text-white p-2 text-4xl'>React useEffect Hooks</h1>
      <button className='btn' onClick={() => setCount1(count1 + 1)}>Count{count1}</button>
      <button className='btn' onClick={() => setCount2(count2 + 1)}>Count{count2}</button>
    </div>
  )
}

export default Use_Effect

