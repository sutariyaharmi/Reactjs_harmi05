import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import footerimg from '../assets/footer.jpg'


const Contact = () => {
    return (
        <div>
            <div className='grid mlg:grid-cols-2  '>
                <div>
                    <img className='h-[650px] object-cover'  src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg" alt="" />
                </div>
                <div className=' p-24 pt-0'>
                    <h1 className='text-red-700 text-lg'>We Are Happy To Answer You</h1>
                    <h1 className='text-5xl font-semibold py-4'>Contact</h1>
                    <div className='grid grid-cols-2 py-4'>
                        <div >
                            <h1 className='text-lg font-bold'>Address :</h1>
                            <h1 className='text-md text-gray-600'>121 King St, Melbourne VIC 3000,<br /> Australia</h1>
                        </div>
                        <div >
                            <div className='flex '>
                                <h1 className='text-lg font-bold'>Telephone :</h1>
                                <h1 className='text-lg text-gray-600 px-4'>888 321 9874</h1>
                            </div>
                            <div className='flex py-4 '>
                                <h1 className='text-lg font-bold'>Email :</h1>
                                <h1 className='text-lg text-gray-600 px-4'>info@example.com</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-red-700 text-lg'>Need Help</h1>
                    <h1 className='text-5xl font-semibold py-4'>Send Your Request</h1>
                        <input type='text' className='w-full mb-3 border-2  p-2 ' placeholder='Name' />
                        <input type='text' className='w-full mb-3 border-2  p-2' placeholder=' Email Address' />
                        <input type='text' className='w-full mb-3  border-2  p-2' placeholder='Phone' />
                         <textarea className='border-2 w-full text-gray-400 mb-3' rows="4" cols="50">massage</textarea>
                         <input type="submit"className='w-full p-2 border-2 bg-black text-white' placeholder='Send Massage' />
                </div>
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
export default Contact;
