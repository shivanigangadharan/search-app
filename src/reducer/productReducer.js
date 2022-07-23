export const productReducer = (state, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
        case "SHOW_TRENDS":
            return { ...state, showTrends: true }
    }
}