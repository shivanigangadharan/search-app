export const brandFilter = (products, brands) => {
    if (brands.length === 0) { return products }
    return products.filter((prod) => brands.includes(prod.brand))
}

export const priceFilter = (products, price) => {
    if (price.length === 0) { return products }
    let productsInRange = [];
    products.map((prod) => {
        const newPrice = prod.price - 0.1 * prod.price
        if (
            price.some((p) => newPrice >= (p - 1000) && newPrice <= p)
        ) { productsInRange.push(prod) }
    })
    return productsInRange;
}

export const rateFilter = (products, rating) => {
    if (rating.length === 0) { return products }
    return products.filter((prod) =>
        rating.includes(Math.floor(prod.rating.rate).toString())
    )
}

export const searchFilter = (products, text) => {
    if (text == null || text === "") { return products }
    return products.filter((prod) => prod.title.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()));

}