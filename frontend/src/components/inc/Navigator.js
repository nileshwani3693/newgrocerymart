import React, { useState } from "react";
import { Link } from "react-router-dom"
import { logout } from "../pages/firebase";
import "../inc/Navigator.css"
import { Navigate } from "react-router";
import { useAuth } from "../pages/firebase";
import { Shoppingcart } from "../pages/shoppingCart";


export function Navigator() {

    const [loading, setLoading] = useState(false);

    const currentUser = useAuth()
    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }



    return (
        <div className="fluid">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <li className="Logostyle">GroceryMart</li>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to='/' className="navbar-brand">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/about' className="nav-link active">About</Link>
                            </li>
                            <li className="nav-item w-100" style={{ width: "auto" }}>

                                <Link to='/contact' className="nav-link active" data-bs-toggle="modal" data-bs-target="#ContactUs">Contact</Link>
                            </li>
                            <div className="modal fade" id="ContactUs" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="modal-tytle-box">
                                                <h5 className="modal-title-styling" id="exampleModalLabel">Contact Us</h5>
                                            </div>
                                            <p>

                                                grocery_mart@abc.com <br />
                                                grocery_mart_support@abc.com<br />
                                                grocery_mart_Order@abc.com<br />

                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>



                            <li className="nav-item dropdown">
                                <a  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/fruits' className="dropdown-item">Fruits</Link></li>
                                    <li><Link to='/vegetables' className="dropdown-item">Vegetables</Link></li>
                                    <li><Link to='/spices' className="dropdown-item">Spices</Link></li>
                                    <li><Link to='/others' className="dropdown-item">Others</Link></li>
                                    <li className="dropdown-divider"> </li>
                                    <li><Link to='/products' className="dropdown-item">All Products</Link></li>
                                </ul>

                            </li>





                        </ul>

                        <aside>
                            <ul>
                                {currentUser ?
                                    <>
                                        <li className="asideelement" disabled={loading || !currentUser} onClick={handleLogout} type="submit" >Logout</li>

                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link to='/login' className="asideelement">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/register' className="asideelement">Register</Link>
                                        </li>
                                    </>}

                                <li>
                                    <Link to="/cart" className="asideelement" element={currentUser ? <Shoppingcart /> : <Navigate to='/login' />}>
                                        <i className='fa fa-shopping-cart yellow-color'> Cart</i></Link>
                                </li>
                            </ul>
                        </aside>



                    </div>
                </div>
            </nav>

        </div>
    );
}