import React from 'react'

const Blog = () => {
  return (
    <>  <div className='bg-gray-700 flex justify-between px-2 '>
    <div className=''>
        <img className='h-20 rounded-full py-2 px-2' src="https://t4.ftcdn.net/jpg/04/51/74/43/360_F_451744391_932DU0eXgGbpDZhcemuTjz1jTlqiCuIF.jpg" alt="" />
    </div>
    {}
    <div className=''>
        <nav className='flex'>
            <ul className='flex justify-between w-96 h-20 items-center'>
                <li><a className='text-white font-bold' href="">Home</a></li>
                <li><a className='text-white font-bold' href="">Services</a></li>
                <li><a className='text-white font-bold' href="">Blog</a></li>
                <li><a className='text-white font-bold' href="">About US</a></li>
                
            </ul>
        </nav>
    </div>
   </div>
    <div>
        <h1 className=''>This is Blog page</h1>
    </div>
    
    </>
  )
}

export default Blog
