import React, { useEffect } from 'react';
import ProductCard from '../../components/productCard/productCard';
import './productListing.css';
import Filters from '../../components/Filters/Filters';
import Search from '../../components/Search/Search';
import { useProductsContext } from '../../context/productsContext';
import { brandFilter, priceFilter, rateFilter, searchFilter } from '../../services/filterFunctions';

export default function ProductListing() {
    const { state, dispatch } = useProductsContext();

    const filteredByBrand = brandFilter(state.products, state.brand);
    const filteredByPrice = priceFilter(filteredByBrand, state.price);
    const filteredByRates = rateFilter(filteredByPrice, state.rating);
    const filteredBySearch = searchFilter(filteredByRates, state.searched);

    return (
        <div className="product-listing-container">
            <div className="search-component"><Search /> </div>
            <div className="product-listing-content">
                <Filters />
                <div className="products-grid">
                    {
                        filteredBySearch.map((prod) => {
                            return <ProductCard product={prod} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}