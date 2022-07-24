export const productReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return { ...state, products: action.payload }
        case "SHOW_TRENDS":
            return { ...state, showTrends: true }
    }
}