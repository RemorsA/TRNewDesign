<script setup>
    import router from "@/router"
    import store from '@/store/store'
    import { computed, onMounted } from 'vue'

    onMounted(() => {
        store.dispatch('News/fetchAllNews')
    })

    const dd = computed(() => {
        return store.state.News.items.find(el =>
            el.id === router.currentRoute.value.params.id 
        )
    })
</script>

<template>
    <div>
        {{ dd }}
    </div>
</template>

<style lang="scss" scoped>

</style>