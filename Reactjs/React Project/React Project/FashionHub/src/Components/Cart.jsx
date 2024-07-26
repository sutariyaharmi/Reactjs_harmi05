

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiCircleRemove } from "react-icons/ci";
import { removeToCart, incrimentToCart, decrementToCart } from '../reduxCore/cartRedux/cartAction';
import { AiOutlineMail } from "react-icons/ai";


const Cart = () => {
  const Cartdata = useSelector((state) => state.cart);
      const dispatch = useDispatch()
    
      
      const amount = Cartdata.length && Cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev + next, 0);
      console.log("Cartamount", amount);

  return (
             <div>
        <div className='bg-sky-50 p-[100px]  w-full'>
            <div className='items-center '>
                <input type="text" className='w-full p-4 mb-4' placeholder='your cart is currently empty' />
                <button className='text-white bg-black py-3 px-6'>Return To Shop</button>
            </div>
        </div>
        <div>
                <div className='text-center pt-28'>
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
            </div>
            <div className='grid grid-cols-2 ms-10'>
                <div className='w-full  h-[300px] border-2 p-6 shadow-lg shadow-slate-100'>
                    <div className='border-2 border-black border-dotted text-md font-semibold p-4'>Buy <span className='text-red-600'>$813</span> more for get Free Shipping!!  
                    </div>
                    <table className='table-fixed  border text-center border-gray-500 m-4'>
                            <thead>
                                <tr>
                                <th className='p-2'>Remove</th>
                                <th>Product Image</th> 
                                <th>Product Title</th>
                                <th>Product Quntity</th>
                                <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody className='border '>
                   {
                    Cartdata.map((item) => {
                      return (
                        <tr>
                          <td onClick={() => dispatch(removeToCart(item.id))} className='p-2'>
                            <CiCircleRemove className='size-10 font-bold mx-auto' />
                          </td>
                          <td>
                            <img src={item.image} alt="" className='size-40 p-2 mx-auto' />
                          </td>
                          <td>
                            {item.title}
                          </td>
  
                          <td className=' flex space-x-5 m-14'>
                            <button className='btn' onClick={() => dispatch(decrementToCart(item.id))}>-</button>
                            <p>
                              {item.quantity}
                            </p>
                            <button className='btn' onClick={() => dispatch(incrimentToCart(item.id))}>+</button>
                          </td>
  
                          <td>
                            ${item.price * item.quantity}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className='w-3/12'>
              <table className='table-fixed  border text-center border-gray-500 m-4'>
                <thead>
                  <tr>
                    <th className='p-2 h-20 border-2'>Total Price</th>
                  </tr>
                </thead>
  
                <tbody className='border '>
  
                  <tr className='h-28 border-2 '>
                    <td>
                      <p>${amount}</p>
                    </td>
                  </tr>
  
  
                </tbody>
                        </table>
                </div>
                <div>
                        <div className='border-2'>
                       
                        </div>
                </div>
            </div>
    </div>
  );
};

export default Cart;
