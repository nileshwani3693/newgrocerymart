import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import "../inc/product.css"


const Product = ({ product }) => {
    return (
        
        <Fragment>
        
        <Link to={`/product/${product._id}`} className="nav-link active btn-styling">
            <div className="productCard" to={product._id} >
                <div className="productCard" id="Products"  >
                    <div className="row-col-sm-6 d-flex flex-wrap">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-img-top" height="250px" width="250px" src={product.images} alt={product.name} />
                                    <p className="card-text1">{product.name}</p>
                                    <p className="card-text1">₹ {product.price} /- </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Link>
        </Fragment>
    )
};
export default Product;