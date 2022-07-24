export const brandFilter = (products, brands) => {
    if (brands.length === 0) { return products }
    return products.filter((prod) => brands.includes(prod.brand))
}