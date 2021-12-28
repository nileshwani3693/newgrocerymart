import React, { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "../inc/product.css"
import OtherN from "./others";

export const Other = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (

        <Fragment>
            <h1>Others</h1>
            <div className="container" >

                {products && products.filter(prod => prod.category ==='Others').map((filteredproduct) => (

                    <OtherN product={filteredproduct} /> 
                ))}

            </div>
        </Fragment>
    )

}
