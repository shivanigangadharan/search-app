import React from 'react';
import ProductCard from '../../components/productCard/productCard';
import './productListing.css';
import Filters from '../../components/Filters/Filters';
import Search from '../../components/Search/Search';

export default function ProductListing() {
    return (
        <div>
            <Search />
            <Filters />
            <div className="products-grid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    )
}