import React from 'react'
import './Login.css'
import Header from '../Header/Header'


function Login() {
    
  return (
    <div>
        <Header/>
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
                <form className="loginform">
                    
                    <div className="mb-5">
                        
                        <input

                            type="email"
                            className="form-control"
                            id="loginemail"
                            placeholder="Your email"

                        ></input>
                    </div>
                    <div className="mb-5">
                        
                        <input
                            type="password"
                            className="form-control"
                            id="loginpassword"
                            placeholder="Your password"
                        ></input>
                    </div>
                   
                    <button
                        type='button'
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
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
