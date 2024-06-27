import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuWalletCards } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {


    return (
        <div>
            <h1 className='hidden md:block text-white text-center font-semibold bg-[#586946] p-2 text-md tracking-wide'>Free delivery on orders over $1499. Don't miss discount.</h1>
            <div className='flex justify-between items-center p-5 border-2 '>
                <p className='md:hidden  text-2xl'><IoMenu /></p>
                <img className='h-10 w-32 sm:w-42' src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/2022/12/emart-011.webp" alt="" />
                <div>
                    <nav>
                        <ul className="hidden md:flex   space-x-10 ">
                            <div className="dropdown ">
                                <li>
                                    <Link
                                        className="text-black text-lg font-semibold   hover:text-black hover:underline" > Demo
                                    </Link>
                                </li>

                                <div className="dropdown-content ">
                                    <div>
                                        <div className='grid grid-cols-4 ms-28 mb-16 pb-14 mt-8 w-[1400px]  border-t-2 border-b-2'>
                                            <div className='border-e-2 max-w-80'>

                                            </div>

                                            <div className='border-e-2 mt-7 ms-10 max-w-52'>

                                                <Link to="/" className='text-gray-500 p-2' href="">Fashion Hub</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Kids Wear</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Women Fashion</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Big Fashion</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Fashion Store</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Handicraft</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">intearior</Link>
                                            </div>
                                            <div className='border-e-2 mt-7 max-w-36'>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Plant Garden</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Kids Toys</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Electronic Gadget</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Bathroom</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Bicycle</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Shoes</Link>
                                                <Link to="/About_us" className='text-gray-500 p-2' href="">Bags</Link>

                                            </div>
                                            < div>
                                                <div className=' mt-7 '>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Shop</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Skin Care</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2 ' href="">Grocery Outlet
                                                        <button className='border bg-red-700 text-white text-xs px-2 rounded-xl ms-4'>New</button>
                                                    </Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Hiking Heaven
                                                        <button className='border bg-red-700 text-white text-xs px-2 rounded-xl ms-4'>New</button>
                                                    </Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Exotic Fragrances
                                                        <button className='border bg-red-700 text-white text-xs px-2 rounded-xl ms-4'>New</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="ml-[950px] -mt-12 mb-3"><span className='text-red-700'>Summer Sale 65% off</span> Shop Now</h1>
                                </div>
                            </div>
                            {/* -------- */}
                            <ul className="hidden md:flex   space-x-10 ">
                                <div className="dropdown ">
                                    <li>
                                        <Link
                                            className="text-black text-lg font-semibold   hover:text-black hover:underline" >Product
                                        </Link>
                                    </li>

                                    <div className="dropdown-content ">
                                        <div>
                                            <div className='grid grid-cols-4 ms-28 mb-16 pb-14 mt-8 w-[1400px]  border-t-2 border-b-2 p-10'>
                                                <div className=''>

                                                </div>

                                                <div className='border-e-2 mt-7 ms-10 '>
                                                      <h1 className='font-semibold text-lg'>Product Styles</h1>
                                                    <Link to="/" className='text-gray-500 p-2' href="">Style one</Link>
                                                    <Link to="/Product" className='text-gray-500 p-2' href="">Style Two</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Style Three</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Style Four</Link>
                                                    
                                                </div>
                                                <div className='border-e-2 mt-7 ms-10 max-w-56'>
                                                <h1 className='font-semibold text-lg'>Product gallery</h1>
                                                    <Link to="/" className='text-gray-500 p-2' href="">Vertical Carousel</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Carousel</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Horizontal Style</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Gride Style</Link>

                                                </div>
                                                < div>
                                                    <div className=' mt-7 ms-10'>
                                                    <h1 className='font-semibold text-lg'>Product type</h1>
                                                    <Link to="/" className='text-gray-500 p-2' href="">Simple Product</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Variable Product</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="ml-[950px] -mt-12 mb-3"><span className='text-red-700'>Summer Sale 65% off</span> Shop Now</h1>
                                    </div>
                                </div>
                                {/* ---------- */}
                                <div className="dropdown ">
                                    <li>
                                        <Link
                                            className="text-black text-lg font-semibold   hover:text-black hover:underline">
                                            shop
                                        </Link>
                                    </li>

                                    <div className="dropdown-content ">
                                        <div>
                                            <div className='grid grid-cols-4 ms-28 mb-16 mt-8 w-[1400px] border-t-2 border-b-2'>
                                                <div className='border-e-2 '>
                                                    <h1 className='font-bold py-7'>Listing Layouts</h1>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">4 column</Link>
                                                    <Link to="/Feq_page" className='text-gray-500 p-2' href="">4 column + sidebar</Link>
                                                    <Link to="/Column5" className='text-gray-500 p-2' href="">5 column</Link>
                                                    <Link to="/Contect_us" className='text-gray-500 p-2' href="">5 column + sidebar</Link>
                                                    <h1 className='font-bold py-7 '>Shop pages</h1>
                                                    <Link to="/About_us" className='text-gray-500 p-2 ' href="">Wishlist</Link>
                                                    <Link to="/Feq_page" className='text-gray-500 p-2' href="">Cart </Link>
                                                    <Link to="/Contect_us" className='text-gray-500 p-2' href="">Checkout</Link>
                                                </div>

                                                <div className='border-e-2 ms-6 max-w-64'>
                                                    <h1 className='font-bold py-7'>Sidebar Widget</h1>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Product Filer At Top</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Product Filer At Left</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Product Filer At Right</Link>
                                                </div>
                                                <div className='border-e-2 ms-6 max-w-48'>
                                                    <h1 className='font-bold py-7'>Shop Box style</h1>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Shop Style one</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Shop Style Two</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Shop Style Three</Link>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Shop Style Four</Link>

                                                </div>
                                                < div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* --------------- */}
                                <div className="dropdown ">
                                    <li>
                                        <Link
                                            className="text-black text-lg font-semibold   hover:text-black hover:underline"
                                        >
                                            Blog
                                        </Link>
                                    </li>

                                    <div className="dropdown-Blog ">
                                        <div>
                                            <div className='mb-8 mt-8 me-20'>
                                                <div>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Default Blog</Link>
                                                    <Link to="/Feq_page" className='text-gray-500 p-2' href="">Blog one</Link>
                                                    <Link to="/Contect_us" className='text-gray-500 p-2' href="">Blog Two</Link>
                                                    <Link to="/Feq_page" className='text-gray-500 p-2' href="">Blog Three</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------- */}
                                <div className="dropdown ">
                                    <li>
                                        <Link
                                            className="text-black text-lg font-semibold   hover:text-black hover:underline"
                                        >
                                            Contact
                                        </Link>
                                    </li>

                                    <div className="dropdown-Blog ">
                                        <div>
                                            <div className='mb-8 mt-8 ms-5'>
                                                <div>
                                                    <Link to="/About_us" className='text-gray-500 p-2' href="">Contact one</Link>
                                                    <Link to="/Feq_page" className='text-gray-500 p-2' href="">Contact Two</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center'>
                    <CiSearch className='hidden sm:block  size-6  mx-2' />
                    <Link to="/Signin"><FiUser className='size-6  mx-2' /> </Link>
                    <CiHeart className='hidden md:block  size-6  mx-2' />
                    <LuWalletCards className='size-6 mx-2' />
                </div>
            </div>
        </div>

    )
}

export default Navbar