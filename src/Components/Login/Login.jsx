import React, { useState } from 'react'
import './Login.css'
import Header from '../Header/Header'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';




const loginSchema = Yup.object().shape({


    loginemail: Yup.string('Invalid email type')
        .email('Invalid email type!')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address')
        .required('Email is required!'),

    loginpassword: Yup.string()
        .required('Password is required!')
        .min(6, 'Password needs to be a minimum of 6 characters')
        .max(15, 'Password is too long!'),


})


function Login() {

    const navigate = useNavigate()

    const [initialFormValues, setInitialFormValues] = useState({

        loginemail: '',
        loginpassword: ''

    })

    const handlesubmit = async (values, { resetForm }) => {
        alert('Login Successfull')
        console.log(values);
        resetForm({ values: "" });
        setInitialFormValues({

            loginemail: "",
            loginpassword: ""

        });
        navigate('/')
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='SignupImage'>
                            <img src='https://img.freepik.com/premium-vector/task-list-illustration_251005-474.jpg?w=900' alt='SignUp Image'></img>

                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <h3>Login</h3>
                        <hr></hr>


                        <Formik validationSchema={loginSchema} initialValues={initialFormValues} onSubmit={handlesubmit}>
                            {({ errors, touched }) => {
                                return (
                                <Form className="loginform">

                                    <div className="mb-5">

                                        <Field
                                            name="loginemail"
                                            type="email"
                                            className="form-control"
                                            id="loginemail"
                                            placeholder="Your email"

                                        ></Field>
                                        {errors.loginemail && touched.loginemail ? <div className='error'> {errors.loginemail} </div> : null}
                                    </div>
                                    <div className="mb-5">

                                        <Field
                                             name="loginpassword"
                                            type="password"
                                            className="form-control"
                                            id="loginpassword"
                                            placeholder="Your password"
                                        ></Field>
                                         {errors.loginpassword && touched.loginpassword ? <div className='error'> {errors.loginpassword} </div> : null}
                                    </div>

                                    <button
                                        type='submit'
                                        className="btn btn-dark float-start "
                                    >
                                        Login
                                    </button>
                                    <a
                                        href='/signup'
                                        type='button'
                                        className="btn btn-link float-end "
                                    >
                                        <span className='account'>Didn't have an account?</span> <span className='signuphere'>Signup here</span>
                                    </a>
                                </Form>
                                )
                }}
                        </Formik>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
