import React, { useState, useEffect } from 'react';
import './Trends.css';

export default function Trends() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(json => setSuggestions(json.products))
    }, [])

    return (
        <div className="trends-container">
            <div className="trends-title"> Latest Trends </div>
            <div className="trends-flex">
                {
                    suggestions.map((prod, i) => {
                        if (i >= suggestions.length - 5) {
                            return <div key={prod.id}>
                                <img className="trends-image" src={prod.image} alt={prod.title} />
                                <div>  {prod.title}</div>
                            </div>
                        }
                    })
                }
            </div>
            <div className="trends-title"> Popular Suggestions </div>
            <div className="suggestions">
                {
                    suggestions.map((prod, i) => {
                        if (i >= suggestions.length - 5) {
                            return <div key={prod.id}>
                                {prod.title}
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}