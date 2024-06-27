import React from 'react'
import img from '../assets/wave.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons'

const Card3 = (props) => {
  return (

    
    <>

    <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-[100px] shadow-2xl rounded-xl'>
       <div className='flex'>
        <div className='h-40 w-[350px] border rounded-md bg-gradient-to-l from-violet-500 to-fuchsia-500 shadow-md shadow-stone-400'>
            <img className='w-[400px]' src={props.billy} alt="" />
            <h1 className='text-3xl text-white text-center mt-3'>Anna Smith</h1>
            <h3 className='text-white text-center mt-2'>Graphic desinger</h3>
            <div className='flex justify-center m-5 space-x-5'>
                 <FontAwesomeIcon className='bg-fuchsia-500  size-6 p-2 rounded-full  shadow-lg shadow-slate-600 ' icon={faFacebookF} style={{color: "#f3f1f9",}} />
                 <FontAwesomeIcon className='bg-fuchsia-500  size-6 p-2 rounded-full  shadow-lg shadow-slate-600 ' icon={faTwitter} style={{color: "#f5faf8",}} />
                 <FontAwesomeIcon className='bg-fuchsia-500  size-6 p-2 rounded-full  shadow-lg shadow-slate-600 ' icon={faGooglePlusG} style={{color: "#f7f7f7",}} />
            </div>
            <div className='text-gray-500 mt-12 text-center ml-4 mr-2'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magnam esse dolorem veritatis accusantium ipsa magni nisi laborum! Odio repudiandae aliquid omnis, natus, error qui laboriosam libero vitae quod quasi repellendus accusantium explicabo eum earum consequuntur maiores quaerat blanditiis ducimus aspernatur ipsa? Perfex?</p>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Card3