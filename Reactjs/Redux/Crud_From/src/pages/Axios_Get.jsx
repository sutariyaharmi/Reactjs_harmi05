import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductData = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data))

    })

    return (
        <div>
            {
                data.map(item => {
                    return (

                        <div className='grid grid-cols-4 border border-black' key={item.id}>
                            <h1>{item.title}</h1>
                            <h1>{item.price}</h1>
                            <h1>{item.category}</h1>

                            <img className='h-[200px]' src={item.image} alt="" />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default ProductData;