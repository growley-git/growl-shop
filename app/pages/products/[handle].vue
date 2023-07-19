<template>
    <VContainer fluid v-if="!pending">
        <VRow>
            <VCol cols="12" md="5">
                <ProductImageCarousel :images="images"/>
            </VCol>
            <VCol cols="12" md="4">
                <h1>{{ product.title }}<small class="d-block">By {{ product.vendor }}</small></h1>
                <div v-if="product.descriptionHtml" v-html="product.descriptionHtml"/>
                <template v-if="selectedVariant">
                    <template v-if="selectedVariant.compareAtPriceV2">
                        <div style="text-decoration:line-through;">{{ $currency(selectedVariant.compareAtPriceV2.amount) }}</div>
                        <div>{{ $currency(selectedVariant.priceV2.amount) }}</div>
                    </template>
                    <template v-else>
                        <div>{{ $currency(selectedVariant.priceV2.amount) }}</div>
                    </template>
                </template>
                <VRadioGroup v-if="product.variants.length >= 2" v-model="selectedVariant">
                    <template v-for="variant in product.variants" :key="variant.id">
                        <VRadio :label="variant.title" :value="variant"/>
                    </template>
                </VRadioGroup>
                <VRow>
                    <VCol>
                        <VTextField type="number" readonly :value="selectedQuantity">
                            <template v-slot:prepend>
                                <VBtn
                                    :disabled="selectedQuantity === 1"
                                    @click.stop="selectedQuantity -= 1">
                                    <VIcon icon="mdi-minus"/>
                                </VBtn>
                            </template>
                            <template v-slot:append>
                                <VBtn @click.stop="selectedQuantity += 1">
                                    <VIcon icon="mdi-plus"/>
                                </VBtn>
                            </template>
                        </VTextField>
                    </VCol>
                    <VCol cols="auto">
                        <AddToCart
                            :quantity="selectedQuantity"
                            :variant="selectedVariant"/>
                    </VCol>
                </VRow>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup>
import useShopify from '@/composables/useShopify'

const route = useRoute()
const { fetchProduct } = useShopify()
const { data:product, pending } = await fetchProduct(route.params.handle)

const selectedVariant = ref(null)
const selectedQuantity = ref(1)

const images = computed(() => {
    if (product.value && product.value.images.length) {
        const items = [...product.value.images]
        if (product.value.variants && product.value.variants.length) {
            product.value.variants.forEach(variant => {
                if (variant.image) {
                    items.push(variant.image)
                }
            })
        }
        return items
    }
    return undefined
})

const firstVariant = computed(() => {
    if (product.value && product.value.variants.length) {
        return product.value.variants[0]
    }
    return undefined
})

onMounted(() => {
    selectedVariant.value = firstVariant.value
})
</script>