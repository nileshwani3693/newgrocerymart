import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, createProduct } from '../../actions/productAction'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
import { useNavigate } from 'react-router'

const AddNewProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();




    const { error, success } = useSelector((state) => state.newProduct);
    const [user, setUser] = useState({
        name: "", description: "", price: 0, images: "", category: ""
    });


    let name, value;

    const handelInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })

    }

    useEffect(() => {
        if (error) {

            dispatch(clearErrors());
        }

        if (success) {

            navigate("/admin/dashboard");
            alert("Product added successfully")
            dispatch({ type: NEW_PRODUCT_RESET });
        }
    }, [dispatch, error, navigate, success]);

    const createProducthandler = (e) => {

        e.preventDefault();

        dispatch(createProduct(user));

    };

    return (
        <Fragment >
            <h1>Add Products</h1>
            <div className='container'>

                <form onSubmit={createProducthandler} style={{ marginLeft: '10px' }}  >

                    <div class="form-group">
                        <label htmlFor="Item_Name">Item-Name</label>
                        <input type="text" class="form-control" id="Item-Name" name="name" placeholder="Enter name"
                            required
                            value={user.name} onChange={handelInputs}
                        />
                    </div>

                    <div class="form-group">
                        <label htmlFor="decription">decription</label>
                        <input type="text" class="form-control" id="decription" name="description" placeholder="Enter decription"
                            value={user.description} onChange={handelInputs} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="Price">Price</label>
                        <input type="number" class="form-control" id="Price" name="price" placeholder="Enter Price"
                            required
                            value={user.price} onChange={handelInputs} />

                    </div>
                    <div class="form-group">
                        <label htmlFor="images">Image Url</label>
                        <input type="text" class="form-control" id="images" name="images" placeholder="Enter image url" required
                            value={user.images} onChange={handelInputs} />

                    </div>
                    <div class="form-group">
                        <label htmlFor="category">category</label>
                        <input type="text" class="form-control" id="category" name="category" placeholder="Enter category" required
                            value={user.category} onChange={handelInputs} />

                    </div>
                    <button type="submit" class="btn btn-primary"  >Submit</button>
                </form>
            </div>
        </Fragment>
    )
}
export default AddNewProduct;



