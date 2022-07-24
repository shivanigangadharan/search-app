export const productReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, products: action.payload }
        case "ADD_FILTER_BY_BRAND":
            return { ...state, brand: [...state.brand, action.payload] }
        case "REMOVE_FILTER_BY_BRAND":
            const filteredBrands = state.brand.filter((b) => b !== action.payload)
            return { ...state, brand: filteredBrands }
        case "ADD_FILTER_BY_PRICE":
            console.log("adding filter by price")
            return { ...state, price: [...state.price, action.payload] }
        case "REMOVE_FILTER_BY_PRICE":
            const filteredPrices = state.price.filter((p) => p !== action.payload)
            return { ...state, price: filteredPrices }
        case "SHOW_TRENDS":
            return { ...state, showTrends: true }
    }
}