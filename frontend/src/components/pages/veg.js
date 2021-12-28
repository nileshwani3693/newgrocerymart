import React, { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "../inc/product.css"

import VegetableN from "./vegetables";

export const Veg = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
   
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (

        <Fragment>
            <h1>Vegetables</h1>
            <div className="container" >

                {products && products.filter(prod => prod.category ==='Vegetables').map((filteredproduct) => (

                    <VegetableN product={filteredproduct} /> 
                ))}

            </div>
        </Fragment>
    )

}