import React, { createContext, useContext, useReducer } from 'react';
import { productReducer } from '../reducer/productReducer';

const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

const initialState = {
    products: [],
    brand: [],
    price: [],
    rating: [],
    clear: false
}

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}