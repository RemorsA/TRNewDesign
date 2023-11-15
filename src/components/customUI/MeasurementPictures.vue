<script setup>
    const props = defineProps({
        pictures: {
            required: false,
            type: Array,
            default: []
        },
    })
</script>

<template>
    <el-card class="measurement__pictures">
        <el-scrollbar max-height="400px" native>
            <div class="pictures">
                <el-image class="picture picture__cover-hover"
                    v-for="(img, index) in pictures"
                    :key="index"
                    :src="img"
                    fit="cover"
                    :preview-src-list="pictures"
                    preview-teleported
                    hide-on-click-modal
                    :initial-index="index"
                ></el-image>
            </div>
        </el-scrollbar>
    </el-card>
</template>

<style lang="scss" scoped>
    .measurement__pictures {
        --el-card-padding: 0;
        width: 100%;

        .pictures {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 10px;
            padding: 20px;

            .picture {
                width: 100%;
                height: 100px;
            }
        }
    }
</style>