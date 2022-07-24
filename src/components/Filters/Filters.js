import React from 'react';
import './filters.css';

export default function Filters() {
    return (
        <div className="filters-container">
            <form className="form">
                <div className="filter-section">
                    <span className="filter-title"> BRAND </span>
                    <div>
                        <input className="checkbox" type="checkbox" id="Mango" />
                        <label htmlFor="Mango"> Mango </label>
                    </div>
                    <div>
                        <input className="checkbox" type="checkbox" id="HM" />
                        <label htmlFor="HM"> H&M </label>
                    </div>
                </div>

                <div className="filter-section">
                    <span className="filter-title"> PRICE RANGE </span>
                    <div>
                        <input className="checkbox" type="checkbox" id="500" />
                        <label htmlFor="500"> Mango </label>
                    </div>
                    <div>
                        <input className="checkbox" type="checkbox" id="1000" />
                        <label htmlFor="1000"> H&M </label>
                    </div>
                </div>

                <div className="filter-section">
                    <span className="filter-title">  RATINGS </span>
                    <div>
                        <input className="checkbox" type="checkbox" id="4star" />
                        <label htmlFor="4star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                        </label>
                    </div>
                    <div>
                        <input className="checkbox" type="checkbox" id="3star" />
                        <label htmlFor="3star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                        </label>
                    </div>
                    <div>
                        <input className="checkbox" type="checkbox" id="2star" />
                        <label htmlFor="2star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                        </label>
                    </div>
                    <div>
                        <input className="checkbox" type="checkbox" id="1star" />
                        <label htmlFor="1star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}