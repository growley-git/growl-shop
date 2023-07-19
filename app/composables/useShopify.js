

export default function () {
    return {
        getCart: (checkoutId) => useFetch('/api/get-cart', {
            method: 'POST',
            body: {
                checkoutId
            }
        }),
        createCart: () => useFetch('/api/create-cart', {
            method: 'GET'
        }),
        addToCart: (checkoutId, lineItems) => useFetch('/api/add-to-cart', {
            method: 'POST',
            body: {
                checkoutId,
                lineItems
            }
        }),
        fetchProduct: (handle) => useFetch('/api/get-product', {
            method: 'POST',
            body: {
                handle
            }
        }),
        fetchProducts: () => useFetch('/api/get-products', {
            method: 'GET',
        })
    }
}