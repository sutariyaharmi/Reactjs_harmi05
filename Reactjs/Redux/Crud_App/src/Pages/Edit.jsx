import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Navigate , useParams } from 'react-router-dom'
import axios from 'axios'

 const Edit = () => {

    const navigate = useNavigate()

    const {id}= useParams()

    console.log(id,"id")

    const [user , setUser] = useState({
        username:'',
        email:'',
        proffesion:'',
        age:'',
        number:'',
        image:null
     })

       const loadUserWithId = async() => {
        const res = await axios.get(`http://localhost:3000/users/${id}`)
        setUser(res.data)
       }

       const onSubmitEditUser = async(e) => {
        e.preventDefault()
       await axios.put(`http://localhost:3000/users/${id}` , user)
       .then(() =>{
        navigate('/')
       })
       }

       useEffect(() => {
        loadUserWithId();
       },[])
    return (
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
             
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
             User Edit  Account
            </h2>
           
            <form action="#" method="POST" className="mt-8" onSubmit={onSubmitEditUser}>
              <div className="space-y-5">
  
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                   UserName
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="UserName"
                      id="username"
                      value={user.username}
                      onChange={(e) => setUser({...user , username:e.target.value})}
                    ></input>
                  </div>
                </div>
  
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                   UserName
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="email"
                      id="email"
                      value={user.email}
                      onChange={(e) => setUser({...user , email:e.target.value})}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      Proffesion
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Proffesion"
                      id="proffesion"
                      value={user.proffesion}
                      onChange={(e) => setUser({...user , proffesion:e.target.value})}
                    ></input>
                  </div>
                </div>
  
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                      Age 
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Enter The Age"
                      id="age"
                      value={user.age}
                      onChange={(e) => setUser({...user , age:e.target.value})}
                    ></input>
                  </div>
                </div>
  
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                       Mobile No
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Enter Mobile Number"
                      id="number"
                      value={user.number}
                      onChange={(e) => setUser({...user , number:e.target.value})}
                    ></input>
                  </div>
                </div>
  
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                  File For ProfilePhotos
                  </label>
                  <div className="mt-2">
                    
                    
                    </div>
                  </div>
                  <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Edit User
                  </button>
                
                </div>

                <div>
                  <Link
                  to='/'
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Go Back
                  </Link>
                
                </div>

              </div>
            </form>
          
          </div>
        </div>
      </section>
    )
  }

  export default Edit



