import React, { useState } from 'react';
import './productCard.css';

export default function ProductCard({ product }) {
    const [inWishlist, setInWishlist] = useState(false);
    const { title, image, rating, price } = product;
    const stars = Math.floor(rating.rate);
    return (
        <div className="product-card-container">
            <div className="product-image" style={{ 'backgroundImage': `url(${image})` }}>
                <div onClick={() => { setInWishlist(!inWishlist) }} className="heart-icon">
                    {inWishlist ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </div>
                <div className="view-product">
                    View Product
            </div>
            </div>
            <span className="product-title"> {title} </span>
            <div><span className="old-price">  &#8377; {price.toFixed(2)}</span> &ensp;
                <span className="new-price"> &#8377; {(price - price * 0.1).toFixed(2)} </span>
            </div>
            <div>
                {
                    [...Array(Math.floor(rating.rate)).keys()]
                        .map((e, index) => {
                            return <span key={index}> <i className="fa-solid fa-star gold-star"></i> </span>
                        })
                }
                ({rating.count})
            </div>

        </div >
    )
}