import React from 'react'
import { addToCart  } from '../reduxCore/cartRedux/cartAction'
import { useSelector , useDispatch } from 'react-redux'
import productData from '../reduxCore/productRedux/productAction'
import  {useEffect} from 'react'
import productList from '../reduxCore/productRedux/productAction'
import {productListData} from '../reduxCore/productRedux/productAction'

const Shop = () => {


    const dispatch = useDispatch()
    const shopData = useSelector(state => state.product)
    console.log('shopData' , shopData);

 
    useEffect(() => {
        dispatch(productList());
    } , [])
    
  return (
<>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 justify-around gap-12'>
        {
            shopData. flat().map((item) => {
                return(
                    <div key={item.id} className='h-full'>
                        <div className='text-center border-2'>
                            <div className='h-full'>
                                <img className='w-full h-72 object-cover' src={item.image} alt="" />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                            </div>
                            <div className='mt-4'>
                                <button onClick={() => dispatch(addToCart(item))} className='btn border-2 p-2 mb-2 bg-red-400'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
</>
  )
}

export default Shop