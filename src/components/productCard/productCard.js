import React, { useState } from 'react';
import './productCard.css';

export default function ProductCard() {
    const imgURL = "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg";
    const [inWishlist, setInWishlist] = useState(false);

    return (
        <div className="product-card-container">
            <div onClick={() => { setInWishlist(!inWishlist) }} className="heart-icon">
                {inWishlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
            </div>
            <div className="product-image" style={{ 'backgroundImage': `url(${imgURL})` }}></div>
            <span className="product-title"> Womens boat neck T shirt </span>
            <div><span className="old-price"> &#8377; 599 </span> &ensp;
                <span className="new-price">  &#8377; 499 </span>
            </div>
            <div>
                {
                    [1, 2, 3, 4].map((e) => {
                        return <span> <i className="fa-solid fa-star"></i> </span>
                    })
                }
                (210)
            </div>
        </div >
    )
}