import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import { render } from '@testing-library/react';


 const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts  = async () => {
         const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
             console.log("Error:", err)
         });

        dispatch(setProducts(response.data));
        // console.log(response.data)
    }

    useEffect(() => {
        fetchProducts();
      });
    // console.log(products)



    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;