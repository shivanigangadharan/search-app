import React from 'react';
import './filters.css';
import { useProductsContext } from '../../context/productsContext';

export default function Filters() {

    const { dispatch } = useProductsContext();

    const handleCheck = (filterType, target) => {
        if (target.checked) {
            dispatch({ type: `ADD_FILTER_BY_${filterType}`, payload: target.value })
        } else {
            dispatch({ type: `REMOVE_FILTER_BY_${filterType}`, payload: target.value })
        }
    }

    return (
        <div className="filters-container">
            <form className="form">
                <div className="filter-section">
                    <span className="filter-title"> BRAND </span>
                    <div>
                        <input onClick={(e) => handleCheck("BRAND", e.target)} value="mango" className="checkbox" type="checkbox" id="Mango" />
                        <label htmlFor="Mango"> Mango </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("BRAND", e.target)} value='H&M' className="checkbox" type="checkbox" id="HM" />
                        <label htmlFor="HM"> H&M </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("BRAND", e.target)} value='zara' className="checkbox" type="checkbox" id="zara" />
                        <label htmlFor="zara"> Zara </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("BRAND", e.target)} value='urbanic' className="checkbox" type="checkbox" id="urbanic" />
                        <label htmlFor="urbanic"> Urbanic </label>
                    </div>
                </div>

                <div className="filter-section">
                    <span className="filter-title"> PRICE RANGE </span>
                    <div>
                        <input onClick={(e) => handleCheck("PRICE", e.target)} value='1000' className="checkbox" type="checkbox" id="1000" />
                        <label htmlFor="1000"> Under 1000 </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("PRICE", e.target)} value='2000' className="checkbox" type="checkbox" id="2000" />
                        <label htmlFor="2000"> 1000 to 2000 </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("PRICE", e.target)} value='3000' className="checkbox" type="checkbox" id="3000" />
                        <label htmlFor="3000"> 2000 to 3000 </label>
                    </div>
                </div>

                <div className="filter-section">
                    <span className="filter-title">  RATINGS </span>
                    <div>
                        <input onClick={(e) => handleCheck("RATING", e.target)} value='5' className="checkbox" type="checkbox" id="5star" />
                        <label htmlFor="5star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                        </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("RATING", e.target)} value='4' className="checkbox" type="checkbox" id="4star" />
                        <label htmlFor="4star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                        </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("RATING", e.target)} value='3' className="checkbox" type="checkbox" id="3star" />
                        <label htmlFor="3star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                        </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("RATING", e.target)} value='2' className="checkbox" type="checkbox" id="2star" />
                        <label htmlFor="2star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
                        </label>
                    </div>
                    <div>
                        <input onClick={(e) => handleCheck("RATING", e.target)} value='1' className="checkbox" type="checkbox" id="1star" />
                        <label htmlFor="1star">
                            <i className="fa-solid fa-star gold-star"></i>
                            <i className="fa-solid fa-star grey-star"></i>
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