import React from 'react'
import { removeToCart, emptyCard, incrimentToCard, decrementToCart } from '../reduxCore/cartRedux/cartAction'
import { useSelector, useDispatch } from 'react-redux'
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
// import { useState , useEffect } from 'react';


const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Cartdata = useSelector((state) => state.cart)

    const amount = Cartdata.length && Cartdata.map((item) => item.price * item.quantitiy).reduce((prev, next) => prev += next)

    console.log('Cartdata', Cartdata);

    console.log('cartamount', amount);


    return (
        <div className='p-4'>
            <h1 className='title'>This is Cart Page</h1>
            <div>
                <button className='bg-blue-600 text-white p-2 ml-2 mx-auto btn' onClick={() => navigate('/shop')}>BackTOShop</button>
                <button className='bg-blue-600 text-white p-2 ml-2 mx-auto btn' onClick={() => dispatch(emptyCard())}>EmptyCart</button>

            </div>
            <div className='flex'>
                <div className='w-1/2 me-8 '>
                    <table className='table-fixed border text-center m-4 w-full  '>
                        <thead className='border-y-2 border-black bg-gray-500 text-white '>
                            <tr className='space-x-10'>
                                <th className='p-2 '>Remove</th>
                                <th>Product Image </th>
                                <th>Product Title</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Cartdata.map((item) => {
                                    return (
                                        <tr className='border-y-2 border-black text-center'>
                                            <td>
                                                <button onClick={() => dispatch(removeToCart(item.id))}>

                                                    <CiCircleRemove className='text-3xl mx-auto stroke-1' />
                                                </button>
                                            </td>
                                            <td>
                                                <img className='size-28 mx-auto' src={item.image} alt="" />
                                            </td>
                                            <td>
                                                <p>{item.title}</p>
                                            </td>
                                            <td>
                                                <button onClick={() => dispatch(incrimentToCard(item.id))} className='btn bg-slate-300 px-2 me-4 text-2xl'>+</button>
                                                <p className='inline'>{item.quantitiy}</p>
                                                <button onClick={() => dispatch(decrementToCart(item.id))} className='btn bg-slate-300 px-3  ms-4 text-2xl'>-</button>
                                            </td>

                                            <td>
                                                <p>${item.price}</p>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='w-1/2'>
                    <table className='border-y-2 border-black text-center mt-4'>
                        <thead>
                            <tr>
                                <th className='p-2  bg-gray-500 text-white'>Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                                        <tr className='h-28 border-y-2 border-black'>
                                            <td>
                                                <p>  ${amount} </p>
                                            </td>
                                        </tr>
        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart