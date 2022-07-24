export const productReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, products: action.payload }
        case "ADD_FILTER_BY_BRAND":
            console.log("Adding filter by brand")
            return { ...state, brand: [...state.brand, action.payload] }
        case "REMOVE_FILTER_BY_BRAND":
            console.log("Removing filter by brand")

            const filteredBrands = state.brand.filter((b) => b !== action.payload)
            return { ...state, brand: filteredBrands }
        case "SHOW_TRENDS":
            return { ...state, showTrends: true }
    }
}