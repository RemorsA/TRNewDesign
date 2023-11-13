<script setup>
    import Descriptions from '@/components/Descriptions.vue'

    const props = defineProps({
        images: {
            required: false,
            type: Array,
            default: []
        },
        params: {
            required: false,
            type: Array,
            default: []
        },
        title: {
            required: false,
            type: String,
            default: ''
        }
    })
</script>

<template>
    <div class="measurements__panel">
        <el-card class="card__images">
            <el-scrollbar max-height="500">
                <div class="images">
                    <el-image class="image"
                        v-for="(img, index) in images"
                        :key="index"
                        :src="img"
                        fit="cover"
                        :preview-src-list="images"
                        preview-teleported
                        hide-on-click-modal
                        :initial-index="index"
                    ></el-image>
                </div>
            </el-scrollbar>
        </el-card>

        <Descriptions class="card__params"
            :descriptions="params"
            :extra="title"
        >
            <template #label="{ row }">
                {{ row.label }}:
            </template>

            <template #value="{ row }">
                {{ row.value }}
            </template>
        </Descriptions>
    </div>
</template>

<style lang="scss" scoped>
    .measurements__panel {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        flex-wrap: wrap;

        .card__images {
            width: 60%;
            --el-card-padding: 0;

            .images {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 10px;
                padding: 20px;

                .image {
                    width: 100%;
                    height: 100px;
                    transition: all .5s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }

        .card__params {
            width: calc(40% - 20px);
        }
    }
</style>