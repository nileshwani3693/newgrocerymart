import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { removeItemsFromCart } from "../../actions/cartAction";
import { Thankyou } from "../thankyou";
import { Link } from "react-router-dom";

export function Shoppingcart() {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };


    return (
        <body>

            <div id="ContainerCart" className="container card   w-auto ">
                <h1 className="">Shopping Cart</h1>
                <table className=" table table-bordered">
                    <tbody id="Cartbackground">
                        <tr>
                            <th>Item</th>
                            <th>QTY</th>
                            <th> Price</th>

                        </tr>
                        {cartItems &&
                            cartItems.map((item) => (
                                <tr>

                                    <>
                                        <td>{item.name}</td>
                                        <td>1 <a ></a></td>
                                        <td>₹{item.price}</td>
                                        <td><button className="removebuttonStyle" onClick={() => deleteCartItems(item.product)}>Remove</button></td>
                                    </>

                                </tr>))}
                        <tr>

                            <th colspan="2">Total</th>
                            <th>{`₹${cartItems.reduce((acc, item) => acc + item.price, 0)}`}</th>

                        </tr>

                        <tr>
                            <td><a href="/products" className="btn btn-primary">Continue Shopping</a></td>
                            <Link to="/checkout">
                            <td colspan="3"><a href="#" className="pull-right btn btn-success">Checkout</a></td>
                            </Link>
                        </tr>
                    </tbody>
                </table>

            </div>

        </body >


    )
}


