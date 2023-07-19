<template>
    <VContainer>
        <VRow v-if="!pending && products">
            <VCol cols="12" md="4" v-for="product in products" :key="product.id">
                <VCard
                    :to="`/products/${ product.handle }`">
                    <VCardTitle>{{ product.title }}</VCardTitle>
                    <VCardActions>
                        <VBtn @click.stop="addToCart">Add To Cart</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup>
import useShopify from '@/composables/useShopify'

const { fetchProducts } = useShopify()

const { data:products, pending } = await fetchProducts()

const addToCart = (e) => {
    e.preventDefault()
    console.log('add to cart!')
}
</script>