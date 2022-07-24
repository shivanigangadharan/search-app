export const brandFilter = (products, brands) => {
    if (brands.length === 0) { return products }
    return products.filter((prod) => brands.includes(prod.brand))
}

export const priceFilter = (products, price) => {
    if (price.length === 0) { return products }
    console.log("filtering")
    let productsInRange = [];
    products.map((prod) => {
        const newPrice = prod.price - 0.1 * prod.price
        if (
            price.some((p) => newPrice >= (p - 1000) && newPrice <= p)
        ) { productsInRange.push(prod) }
    })
    console.log('pds ', productsInRange, price)
    return productsInRange;
}