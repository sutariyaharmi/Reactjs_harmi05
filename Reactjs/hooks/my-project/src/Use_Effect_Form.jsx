import React from 'react'
import { useState , useEffect} from 'react'


const Use_Effect_Form = () => {

    const[signin , setSignIn] = useState (false)
    const [product , setProduct] = useState()

    console.log(product);

    const ProductList = async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setProduct(data)
    }
     
    useEffect(() => {
        ProductList();
    })

     return (
    <div>
       {
        signin ? (
           <div>
            <h1>Hello , User How Are you !</h1>
            <button onClick={() => setSignIn(false)}>SignIn</button>
            <ul>
                {
                    product.map((item) => <li>{item.title}</li>)
                }
            </ul>
           </div>
        ):(
            <div>
                <button onClick={() => setSignIn(true)}>SignIn</button>
                <h1>please signIn</h1>
            </div>
        )    
       }
    </div>
  )
}

export default Use_Effect_Form