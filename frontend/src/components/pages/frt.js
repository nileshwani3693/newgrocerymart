import React, { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "../inc/product.css"
import FruitsN from "./fruits";

export const Frt = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        
        dispatch(getProduct());

    }, [dispatch]);
    return (

        <Fragment>
            <h1>Fruits</h1>
            <div className="container" >


                {products && products.filter(prod => prod.category === 'Fruits').map((filteredproduct) => (

                    <FruitsN product={filteredproduct} />
                ))}

            </div>
        </Fragment>
    )

}
