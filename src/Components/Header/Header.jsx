import React from 'react'
import './Header.css'
import Category from '../Category/Category'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../Store/slices/cartSlices'

function Header() {

    const cartItemsLength = useSelector(cartSelector)
    console.log(cartItemsLength)

    return (
        <div>
            <nav class="navbar navbar-light"  >
                <div className="container-fluid">
                    <a href='/' id="anchor" className="navbar-brand">
                        <span>FLASH</span><span>WAGON</span>
                    </a>

                    <div className='button-container'>


                        <div class="dropdown">

                            <button class="nav-item btn btn-light dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg> &nbsp;
                                    Login/Signup
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
                                    <li><a class="dropdown-item" href="/login">Login</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/wishlist">Wishlist</a></li>
                                </ul>
                            </button>
                        </div>

                        &nbsp; &nbsp; &nbsp; &nbsp;

                        <div>
                            <button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg> &nbsp;
                               <a className='cart' href='/cart'> Cart </a>  &nbsp;
                                {cartItemsLength > 0 && (
                                    <span class="badge bg-secondary">{cartItemsLength}</span>
                                )}
                                
                            </button>
                        </div>

                    </div>



                </div>


            </nav>

            <Category />
        </div>
    )
}

export default Header
