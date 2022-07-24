import React, { useEffect } from 'react';
import ProductCard from '../../components/productCard/productCard';
import './productListing.css';
import Filters from '../../components/Filters/Filters';
import Search from '../../components/Search/Search';
import { useProductsContext } from '../../context/productsContext';
import { brandFilter, priceFilter, rateFilter } from '../../services/filterFunctions';

export default function ProductListing() {
    const { state, dispatch } = useProductsContext();

    const filteredByBrand = brandFilter(state.products, state.brand);
    const filteredByPrice = priceFilter(filteredByBrand, state.price);
    const filteredByRates = rateFilter(filteredByPrice, state.rating);

    useEffect(() => {
        const res = fetch("data.json")
            .then(res => res.json())
            .then(json => {
                dispatch({ type: "INIT_PRODUCTS", payload: json.products })
                console.log(json.products)
            }
            )
    }, [])

    return (
        <div className="product-listing-container">
            <Search />
            <div className="product-listing-content">
                <Filters />
                <div className="products-grid">
                    {
                        filteredByRates.map((prod) => {
                            return <ProductCard product={prod} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}