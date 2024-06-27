import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('formData' , values)
}

const validate = values => {
    let errors = {}
    if(!values.firstname){
        errors.firstname = 'Required'
    }
    if(!values.lastname){
        errors.lastname = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    }else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
    if(!values.password){
        errors.password = 'Required'
    }
    return errors
}

const Login = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('formikData' , formik.values);
    console.log('formikError' , formik.errors);

    return (
        <div>
            <div>
                <h1 className='text-white p-4 text-center text-4xl bg-purple-700'>React Formik</h1>
                <div className='h-screen flex justify-center items-center '>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='bg-purple-500 text-black p-6 border-4 border-dashed border-black flex flex-col'>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="firstName">FirstName</label>
                                <input type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
                                {
                                    formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null
                                }
                            </div>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="lastName">LastName</label>
                                <input type="text" name="lastname" id="lastname" value={formik.values.lastname} onChange={formik.handleChange}  />
                                {
                                    formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null
                                }
                            </div>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange}  />
                                {
                                    formik.errors.email ? <div>{formik.errors.email}</div> : null
                                }
                            </div>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="password">Password</label>
                                <input type="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                                {
                                    formik.errors.password ? <div>{formik.errors.password}</div> : null
                                }
                            </div>
                            <button type='submit' className='bg-blue-500 mb-2'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login