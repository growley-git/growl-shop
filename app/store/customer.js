import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', () => {
    const checkoutId = ref(null)

    if (process.client) {
        checkoutId.value = localStorage.getItem('checkoutId')
    }

    const getCheckoutId = () => {
        if (process.client) {
            checkoutId.value = localStorage.getItem('checkoutId')
        }
        return checkoutId.value
    }

    const setCheckoutId = (id) => {
        checkoutId.value = id
        if (process.client) {
            localStorage.setItem('checkoutId', id)
        }
    }

    return {
        checkoutId,
        getCheckoutId,
        setCheckoutId
    }
})