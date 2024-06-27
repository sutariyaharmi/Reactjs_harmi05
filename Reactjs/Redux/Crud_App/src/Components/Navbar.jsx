import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='bg-gray-500 text-white p-4'>
            <div className="flex justify-around items-center">
                <div>
                    <Link to="/">
                        <span className='text-3xl'>DEPOT</span>
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex space-x-16">
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/aboutus">AboutUs</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/contactus">ContactUs</Link>
                            </li>
                            <li>
                                <Link className='text-lg font-semibold hover:text-black hover:underline' to="/Shop">Shop</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                <div>
        <input
        class="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach Users"
      />
        </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar