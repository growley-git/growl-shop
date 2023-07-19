<template>
  <VLayout>
    <VAppBar>
      <VAppBarTitle>
        <NuxtLink to="/">GrowlShoppe</NuxtLink>
      </VAppBarTitle>
      <template v-slot:append>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <VBtn @click.stop="toggleCart">
          <VIcon icon="mdi-cart"/>
        </VBtn>
      </template>
    </VAppBar>
    <MiniCart :is-cart-open="isCartOpen"/>
    <VMain>
      <NuxtPage/>
    </VMain>
  </VLayout>
</template>

<script setup>
const isCartOpen = ref(false)

const toggleCart = async () => {
  isCartOpen.value = !isCartOpen.value
}
</script>
