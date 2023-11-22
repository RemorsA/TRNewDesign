<script setup>
    import RequestByArticleNavigationPanel from './RequestByArticleNavigationPanel.vue';
    import RequestByArticleTable from './RequestByArticleTable.vue';
</script>

<template>
    <div class="request-by-article">
        <RequestByArticleTable></RequestByArticleTable>

        <RequestByArticleNavigationPanel></RequestByArticleNavigationPanel>
    </div>
</template>

<style lang="scss" scoped>
    .request-by-article {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>