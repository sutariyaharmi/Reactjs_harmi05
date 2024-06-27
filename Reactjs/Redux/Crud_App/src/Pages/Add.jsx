import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Add = () => {
    
    const navigate = useNavigate()

     const [user , setUser] = useState({
        username:'',
        email:'',
        proffesion:'',
        age:'',
        number:'',
        image:null
     })

     console.log(user);

     const  handleImageChange =(e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend =()=>{
                setUser({...user , image:reader.result})
            }
            reader.readAsDataURL(file)
        }

     }

      const onSubmitUser =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/users' , user)
        .then(() => {
            navigate('/')
        })
      }


    return (
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
             
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
             User Add  Account
            </h2>
           
            <form action="#" method="POST" className="mt-8" onSubmit={onSubmitUser}>
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
                      id="name"
                      onChange={(e) => setUser({...user , username:e.target.value})}
                    ></input>
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                   Email adress
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="email"
                      id="email"
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
                      id="Proffesion"
                      onChange={(e) => setUser({...user ,proffesion:e.target.value})}
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
                      onChange={(e) => setUser({...user , number:e.target.value})}
                    ></input>
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                  File For ProfilePhotos
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      placeholder=""
                      id="file"
                      onChange={handleImageChange}
                    ></input>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add User
                  </button>
                 
                </div>
  
                <div>
                  <button
                  to='/'
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Go Back
                  </button>
                 
                </div>
  
              </div>
            </form>
           
          </div>
        </div>
      </section>
    )
  }

  export default Add