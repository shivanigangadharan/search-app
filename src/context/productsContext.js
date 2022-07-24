import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { productReducer } from '../reducer/productReducer';

const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

const initialState = {
    products: [],
    brand: [],
    price: [],
    rating: [],
    searched: null,
    showTrends: false
}

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        const res = fetch("data.json")
            .then(res => res.json())
            .then(json => {
                dispatch({ type: "INIT_PRODUCTS", payload: json.products })
            }
            )
    }, [])

    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}