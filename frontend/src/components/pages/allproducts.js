import React, { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Product from "./product.js"
import "../inc/product.css"
import { useParams } from "react-router";
import Search from "./Search";
import "../inc/search.css"


export const Allproduct = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { keyword } = useParams()

    useEffect(() => {
        dispatch(getProduct(keyword));
    }, [dispatch, keyword]);
    return (

        <Fragment>
            <aside > <Search /></aside>
            <h1>All Products</h1>
            <div className="container" >

                {products && products.map((product) =>

                    <Product key={product._id} product={product} />
                )}
            </div>
        </Fragment>
    )

}
export default Allproduct

