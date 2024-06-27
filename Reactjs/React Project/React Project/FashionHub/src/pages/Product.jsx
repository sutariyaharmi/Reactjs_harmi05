import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineInboxStack } from "react-icons/hi2";
import shop from '../../shop.json'
import { FaArrowRightLong } from "react-icons/fa6";
import footerimg from '../assets/footer.jpg'

const Product = () => {
    return (
        <div>
            <div>
                <h1 className='text-gray-700 text-2xl  md:text-4xl mt-14 bg-pink-50 h-[60px] p-3 md:h-[130px] flex items-center px-3 md:px-20' >Product Style Two</h1>
            </div>
            <div className='grid  mt-24 px-3 justify-evenly  lg:grid-cols-4 grid-cols-2 slg:grid-cols-3 '>
                {
                    shop.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className='box  group w-32 vsm:w-40 lmd:w-52 text-center relative  mx-auto md:mx-7 my-4'>
                                    <div className='relative' >
                                        <div className='pop absolute duration-500 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-6  group-hover:translate-x-2 '>
                                            <CiHeart className='size-7 sm:size-10 p-1 border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                            <FaRegEye className='size-7 sm:size-10 p-1  border-2 rounded-full sm:p-2 hover:bg-black hover:text-white duration-300 mt-3' />
                                        </div>
                                        <img className='md:max-w-72' src={item.img1} alt="" />
                                        <div className='pop duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 translate-y-8 absolute left-2 bottom-0 vsm:left-5 lmd:left-12 md:left-20 top-[170px] vsm:top-[200px] lmd:top-[270px] md:top-96'>
                                            <div className='flex items-center duration-500 bg-slate-50 rounded p-1 hover:bg-black hover:text-white'>
                                                <HiOutlineInboxStack className='mr-2' />
                                                <h2 className='text-sm md:text-base'>select option</h2>
                                            </div>
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

            <div>
                <div className='bg-slate-100 w-full  grid slg:grid-cols-4 lmd:grid-cols-2 p-10'>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>Quick Link</h1>
                        <p className='my-2'>  <a href="/Product">About</a>  </p>
                        <p className='my-2'>  <a href="/Product">Product</a>  </p>
                        <p className='my-2'>  <a href="/Product">Responsibility</a>  </p>
                        <p className='my-2'>  <a href="/Product">Career</a>  </p>
                        <p className='my-2'>  <a href="/Product">Press</a>  </p>
                        <p className='my-2'>  <a href="/Product">Image Bank</a>  </p>
                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>Customer Service</h1>
                        <p className='my-2'>  <a href="/Product">My Account</a>          </p>
                        <p className='my-2'>  <a href="/Product">Checkout Page</a>       </p>
                        <p className='my-2'>  <a href="/Product">Help Center</a>       </p>
                        <p className='my-2'>  <a href="/Product">Terms & Condition</a>   </p>
                        <p className='my-2'>  <a href="/Product">Deliveries & Refunds</a> </p>
                        <p className='my-2'>  <a href="/Product">Cart Page</a>           </p>
                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>More</h1>
                        <p className='my-2'>  <a href="/Product">Gift Card</a>        </p>
                        <p className='my-2'>  <a href="/Product">Lookbook </a>        </p>
                        <p className='my-2'>  <a href="/Product">Rewards Program</a>  </p>
                        <p className='my-2'>  <a href="/Product">Wedding Dress</a>    </p>
                        <p className='my-2'>  <a href="/Product">Host A Party</a>     </p>
                        <p className='my-2'>  <a href="/Product">Extended Sizing</a>  </p>

                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black mb-4'>Don't Miss Any Update</h1>
                        <p>Molestie vitae massa felis, aliquam lectus at.
                            Ultricies et, quis sit fermentum aliquam et.</p>
                        <div className='flex mt-5'>
                            <input
                                type='text'
                                className='w-full border-4 bg-slate-100 p-2'
                                placeholder='Your Email'
                            />
                            <button className='p-4  text-white bg-[#000a12]'>
                                <FaArrowRightLong />
                            </button>
                        </div>

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

export default Product