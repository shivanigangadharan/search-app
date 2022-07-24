import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { productReducer } from '../reducer/productReducer';

const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

const initialState = {
    products: [],
    brand: [],
    price: [],
    rating: [],
    showTrends: false
}

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}