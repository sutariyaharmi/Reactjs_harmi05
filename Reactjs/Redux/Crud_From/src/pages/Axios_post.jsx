import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Axios_post = () => {

    const data = {fname:'' , lname:''} 
    const [inputdata, setInputData] = useState(data)

    console.log(inputdata);

    const handleChange = (e) => {
        setInputData({...inputdata, [e.target.name]:e.target.value})
    }

    const handleSumbit= (e) => {
        e.preventDefault()
        axios.post('https://fakestoreapi.com/products' , inputdata)
        .then(response => console.log(response.data))
    }

    const handleUpdate= (e) => {
        e.preventDefault()
        axios.put('https://fakestoreapi.com/products/1' , inputdata)
        .then(response => console.log(response.data))
    }

    const handleDelete= (e) => {
        e.preventDefault()
        axios.delete('https://fakestoreapi.com/products/1' , inputdata)
        .then(response => console.log(response.data))
    }

    return (
        <div>
            <h1 className='bg-blue-950 text-white font-bold py-6 text-center text-xl '>Axios Post / Put / Delete Request</h1>
            <div className='flex justify-center h-screen items-center'>

            <div className='border border-black w-[500px] h-[300px] bg-blue-950 rounded-xl  '>

                <div className='mt-10'>
                    <label className='px-4  ml-4 text-white text-lg' htmlFor="FirstName">FirstName :</label>
                    <input className='border border-black rounded-lg ml-4 p-1 hover:bg-slate-200' type="text" name='FirstName' id='Firtname' onChange={handleChange} />
                </div>
                <div className='mt-10'>
                    <label className=' px-4 ml-4 text-white text-lg' htmlFor="LastName">LastName :</label>
                    <input className='border border-black rounded-lg ml-4 p-1 hover:bg-slate-200' type="text" name='LastName' id='Lastname' onChange={handleChange} />
                </div>
                <div className='space-x-5 mt-14 text-center'>

                    <button className='text-white border font-bold px-4 py-2 rounded-lg bg-yellow-700 hover:bg-yellow-500 hover:text-black' onClick={handleSumbit}>Sumbit</button>
                    <button className='text-white border font-bold px-4 py-2 rounded-lg bg-green-700 hover:bg-green-500 hover:text-black' onClick={handleUpdate}>Update</button>
                    <button className='text-white border font-bold px-4 py-2 rounded-lg bg-red-700 hover:bg-red-500 hover:text-black' onClick={handleDelete}>Delete</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Axios_post