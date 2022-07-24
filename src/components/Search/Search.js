import React, { useState, useCallback } from 'react';
import { useProductsContext } from '../../context/productsContext';
import './Search.css';

export default function Search() {
    const { dispatch } = useProductsContext();
    const [searchText, setSearchText] = useState();
    const [searchResults, setSearchResults] = useState([]);

    const getData = (text) => {
        const res = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                if (text == "") { setSearchResults([]) }
                else {
                    const tempDataArray = json.filter((prod) => prod.title.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()));
                    setSearchResults(tempDataArray);
                }
            })
    }

    const debouncer = (func, delay) => {
        let timer;
        return function (arg) {
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.call(context, arg);
            }, delay)
        }
    }

    const callDebounce = useCallback(debouncer(getData, 200), []);

    return (
        <div>
            <form onSubmit={console.log(searchText)}>
                <input className="search-bar" placeholder="Search 'Mens casual wear...'" onClick={() => dispatch({ type: "SHOW_TRENDS" })} onChange={(e) => { callDebounce(e.target.value); setSearchText(e.target.value) }} type="text" />
            </form>
            {(searchText === null) || (searchText === "") ? <div></div> :
                <div className="search-results">
                    {searchResults.map((res) => {
                        return <div>  {res.title}  </div>
                    })}
                </div>
            }
        </div>
    )
}