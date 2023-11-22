<script setup>
    // import store from '@/store/store'

    import SelectionRequestForm from './SelectionRequestForm.vue'
    import SelectionRequestTable from './SelectionRequestTable.vue'
</script>

<template>
    <div class="selection__request">
        <SelectionRequestTable></SelectionRequestTable>

        <SelectionRequestForm></SelectionRequestForm>
    </div>
</template>

<style lang="scss" scoped>
    .selection__request {
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media screen and (width <= 1024px) {
            flex-direction: column-reverse;
        }
    }
</style>