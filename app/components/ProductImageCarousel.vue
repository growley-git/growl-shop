<template>
    <Swiper
        virtual
        navigation
        :slides-per-view="1"
        :modules="[Thumbs, Virtual, Navigation]"
        :thumbs="{ swiper: thumbs }">
        <SwiperSlide
            v-for="image, i in images"
            :key="image.id"
            :virtual-index="i">
            <img :src="image.src" :alt="image.altText"/>
        </SwiperSlide>
    </Swiper>
    <Swiper
        ref="thumbs"
        virtual
        watch-slides-progress
        :modules="[Thumbs, Virtual, Pagination]"
        :pagination="{ clickable: true }"
        :slides-per-view="props.slidesPerView"
        @swiper="setThumbsSwiper">
        <SwiperSlide
            v-for="image, i in images"
            :key="image.id"
            :virtual-index="i">
            <img :src="image.src" :alt="image.altText"/>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Virtual, Navigation, Pagination } from 'swiper/modules'

const props = defineProps({
    slidesPerView: {
        type: Number,
        default: 4
    },
    images: {
        type: Array,
        default: () => ([])
    }
})

const thumbs = ref()

const setThumbsSwiper = (swiper) => {
    thumbs.value = swiper
}
</script>

<style lang="scss">
img {
    display: block;
    width: 100%;
    max-width: 100%;
}
</style>