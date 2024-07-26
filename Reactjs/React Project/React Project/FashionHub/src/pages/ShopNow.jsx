import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import footerimg from '../assets/footer.jpg'
import ShopNow from '../../ShopNow.json'
import { AiOutlineMail } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";



const Shopnow = () => {
    return (
        <div>

            <div className=' max-h-16 py-16 px-24'>
                <h1 className='font-semibold text-sm'>Home / Shop</h1>
                <h1 className='text-gray-600'>Showing all 12 result</h1>
            </div>
            <div className='  grid lg:grid-cols-3 md:grid-cols-3 llmd:grid-cols-3 '>
                <div className=' grid col-span-2 lg:grid-cols-4 grid-cols-1 slg:grid-cols-2 mlg:grid-cols-3  '>
                    {
                        ShopNow.map((item) => {
                            return (
                                <div key={item.id}>

                                    <div className='box  group w-32 vsm:w-40 lmd:w-52 lg:w-52 msm:w-72 lmd:w-72 lllmd:w-72 vsm:w-72 text-center relative mx-1  py-4 '>
                                        <div className='relative' >
                                            <div className='pop absolute duration-500 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-6  group-hover:translate-x-2 '>
                                                <CiHeart className='size-7 sm:size-10 p-1 border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                                <FaRegEye className='size-7 sm:size-10 p-1  border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                            </div>
                                            <div className='relative'>
                                                <img src={item.img1} className="md:max-w-48x duration-100 ease-in-out hovertransition-all  hover:scale-100" alt="Imagem de perfil" />
                                                <img src={item.img2} className="md:max-w-48x absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover:duration-700 hover:transition-all hover:scale-100 hover:opacity-100" alt="Nova imagem" />
                                            </div>
                                            
                                                <div className='flex opacity-0 group-hover:opacity-100 duration-500  absolute left-2 vsm:left-5 lmd:left-20 md:left-20 top-[110px] vsm:top-[150px] lmd:top-[300px] md:top-80'>
                                                    <CiHeart className='size-7 lmd:size-9 mx-1 border-2 rounded-full p-1 bg-white hover:bg-black hover:text-white mt-3' />
                                                    <FaRegEye className='size-7 mx-1 lmd:size-9 border-2 rounded-full p-1 bg-white hover:bg-black hover:text-white mt-3' />
                                                    <LuShoppingBag className='size-7 lmd:size-9 mx-1 border-2 rounded-full bg-white p-1 hover:bg-black hover:text-white mt-3' />
                                                </div>

                                        </div>
                                        <div>
                                            <h1 className='md:text-xl text:sm font-medium text-gray-800 my-3'>{item.name}</h1>
                                            <h3 className='sm:text-lg text-gray-800 mb-5'>${item.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='px-16 py-3'>
                    <h1 className='font-semibold text-lg'>Product Categories</h1>
                    <p className='text-gray-800 py-1'>Accessories<span className='px-2 text-sm text-gray-700'>(3)</span></p>
                    <p className='text-gray-800 py-1'>Bags<span className='px-2 text-sm text-gray-700'>(3)</span></p>
                    <p className='text-gray-800 py-1'>Best Selling<span className='px-2 text-sm text-gray-700'>(15)</span></p>
                    <p className='text-gray-800 py-1'>Clothes<span className='px-2 text-sm text-gray-700'>(6)</span></p>
                    <p className='text-gray-800 py-1'>Shoes<span className='px-2 text-sm text-gray-700'>(3)</span></p>
                    <hr className='py-1 my-3' />
                    <div>
                        <h1 className='font-semibold text-lg py-3'>Filter by Price</h1>
                        <div className='flex justify-between'>
                            <button className='border p-1'>$131.00</button>
                            <button className='border p-1'>$250.00</button>
                        </div>
                    </div>
                    <hr className='py-1' />
                    <h1 className='font-semibold text-lg py-2'>Colors</h1>
                    <div className='from-check py-2'>
                        <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                        <label htmlFor="radiobutton1" className='from-check-lable px-2'> Beigne<span className='px-3 text-sm text-gray-700'>(1)</span></label>
                    </div>
                    <div className='from-check py-2'>
                        <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                        <label htmlFor="radiobutton1" className='from-check-lable px-2'> Green<span className='px-3 text-sm text-gray-700'>(1)</span></label>
                    </div>
                    <div className='from-check py-2'>
                        <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                        <label htmlFor="radiobutton1" className='from-check-lable px-2'>Gray<span className='px-3 text-sm text-gray-700'>(1)</span></label>
                    </div>
                    <div className='from-check py-2'>
                        <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                        <label htmlFor="radiobutton1" className='from-check-lable px-2'>Violent<span className='px-3 text-sm text-gray-700'>(1)</span></label>
                        <hr className='my-3' />
                        <h1 className='font-semibold text-lg py-2'>Cloth Size</h1>
                        <div className='from-check py-2'>
                            <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                            <label htmlFor="radiobutton1" className='from-check-lable px-3'> L<span className='px-3 text-sm text-gray-700'>(3)</span></label>
                        </div>
                        <div className='from-check py-2'>
                            <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                            <label htmlFor="radiobutton1" className='from-check-lable px-3'> M<span className='px-3 text-sm text-gray-700'>(2)</span></label>
                        </div>
                        <div className='from-check py-2'>
                            <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                            <label htmlFor="radiobutton1" className='from-check-lable px-3'> S<span className='px-3 text-sm text-gray-700'>(3)</span></label>
                        </div>
                        <div className='from-check py-2'>
                            <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                            <label htmlFor="radiobutton1" className='from-check-lable px-3'> XL<span className='px-3 text-sm text-gray-700'>(3)</span></label>
                            <hr className='my-3' />
                            <h1 className='font-semibold text-lg py-2'>Show Size</h1>
                            <div className='from-check py-2'>
                                <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                                <label htmlFor="radiobutton1" className='from-check-lable px-3  '> 10<span className='px-3 text-sm text-gray-700'>(3)</span></label>
                            </div>
                            <div className='from-check py-2'>
                                <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                                <label htmlFor="radiobutton1" className='from-check-lable px-3  '> 11 <span className='px-3 text-sm text-gray-700'>(2)</span></label>
                            </div>
                            <div className='from-check py-2'>
                                <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                                <label htmlFor="radiobutton1" className='from-check-lable px-3  '> 7 <span className='px-3 text-sm text-gray-700'>(3)</span></label>
                            </div>
                            <div className='from-check py-2'>
                                <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                                <label htmlFor="radiobutton1" className='from-check-lable px-3  '> 8 <span className='px-3 text-sm text-gray-700'>(3)</span></label>
                            </div>
                            <div className='from-check py-2'>
                                <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                                <label htmlFor="radiobutton1" className='from-check-lable px-3  '> 9 <span className='px-3 text-sm text-gray-700'>(3)</span></label>
                            </div>
                            <hr className='my-3' />
                            <h1 className='font-semibold text-lg py-2'>Filter by stock status</h1>
                            <div className='from-check py-2'>
                                <input type="radio" className='from-check-input size-4' value='Beigne' name='radiobutton1' />
                                <label htmlFor="radiobutton1" className='from-check-lable px-3'> In stock<span className='px-3 text-sm text-gray-700'>(15)</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className='text-center py-6'>
                    <AiOutlineMail className='text-7xl  mx-auto' />
                    <h1 className='text-3xl font-normal my-2'>Subscribe newsletter</h1>
                    <h2 className='text-gray-500 text-sm my-2'>Subscribe Now and get more offers</h2>
                    <div>
                        <input
                            type='text'
                            className='w-72 my-14  bg-slate-100 p-2 border-2'
                            placeholder='Your Email Address...'
                        />
                        <button className='p-2 text-white ml-8 px-4 rounded bg-[#000a12]'>
                            SubScribe Now
                        </button>
                    </div>
                </div>
                <div className='vsm:flex border-t-4 justify-between items-center'>
                    <img src={footerimg} />
                    <h1 className='text-gray-500 mr-4 ml-3 font-medium'>Design by :- <span className='font-bold'>Harmi</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Shopnow