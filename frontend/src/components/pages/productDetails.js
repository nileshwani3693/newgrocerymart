import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import "./productDetailsstyling.css"
import { useParams } from 'react-router';
import { addItemsToCart } from "../../actions/cartAction";
import { useAuth } from './firebase';
import { useNavigate } from 'react-router';

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const currentUser = useAuth()

  const { product } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    if (!currentUser) {
      alert("Please login first.")
      navigate("/login")
    }else{
    alert("Product added to cart")
    dispatch(addItemsToCart(id));
    }
  };

  return (

    <Fragment >

      <div>
        <main>
          <li className="productdetailscard" id="card_1">
            <div className="card__content">
              <figure>
                <img
                  className="CarouselImage"
                  src={product.images}
                  alt="" />
              </figure>
              <div>
                <h2>{product.name}</h2>
                <h2>₹ {product.price}</h2>
                <h2>{product.description}</h2><br />
                <div>
                  <div>
                    <button className='addtocartstyle' onClick={addToCartHandler}>Add to Cart</button>
                  </div>
                </div>
              </div>

            </div>
          </li>

        </main>
      </div>
    </Fragment>
  )
};
export default ProductDetails

