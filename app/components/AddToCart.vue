<template>
    <VBtn color="primary" @click.prevent="handleAddToCart">
        Add To Cart
    </VBtn>
</template>

<script setup>
import { useCustomerStore } from '@/store/customer'
import useShopify from '@/composables/useShopify'

const props = defineProps({
    quantity: {
        type: Number,
        default: 1,
    },
    variant: {
        type: Object,
        required: true,
    },
    options: {
        type: Object,
        default: () => ({})
    }
})

const { addToCart } = useShopify()
const { getCheckoutId } = useCustomerStore()

const handleAddToCart = async () => {
    await addToCart(getCheckoutId(), [{
        quantity: props.quantity,
        variantId: props.variant.id,
        ...props.options
    }])
}
</script>