import React from 'react';
import './LandingPage.css';
import Search from '../../components/Search/Search';
import { useProductsContext } from '../../context/productsContext';
import Trends from '../../components/Trends/Trends';

export default function LandingPage() {
    const { state } = useProductsContext();

    return (
        <div className="landing-page-container">
            <div className="landing-page-content">
                <Search />
                {state.showTrends && <Trends />}
            </div>
        </div>
    )
}