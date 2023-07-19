<template>
    <VNavigationDrawer
      floating
      temporary
      location="right"
      v-model="isOpen">
      <VList>
        <template
          v-if="cart && cart.lineItems"
          v-for="line in cart.lineItems"
          :key="line.id">
          <VListItem>
            <VListItemTitle>{{ line.title }}</VListItemTitle>
            <VListItemSubtitle>{{ line.quantity }}</VListItemSubtitle>
          </VListItem>
          <VDivider/>
        </template>
      </VList>
    </VNavigationDrawer>
</template>

<script setup>
import useShopify from '@/composables/useShopify'
import { useCustomerStore } from '@/store/customer'

const { getCart } = useShopify()
const { getCheckoutId } = useCustomerStore()

const props = defineProps({
    isCartOpen: {
        type: Boolean,
        default: false
    }
})

const cart = ref()
const isOpen = ref(false)

const refreshCart = async () => {
    const { data } = getCart(getCheckoutId())
    if (data.value) {
        cart.value = data.value
    }
}

watch(() => props.isCartOpen, (value) => {
    isOpen.value = value
}, { immediate: true })

watch(() => isOpen.value, (value) => {
    if (value) {
        refreshCart()
    }
}, { immediate: true })
</script>