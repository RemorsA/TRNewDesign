<script setup>
    const props = defineProps({
        descriptions: {
            required: true,
            type: Array,
            default: []
        },
        extra: String,
        extraIcon: String
    })
</script>

<template>
    <div class="descriptions__container">
        <p class="extra" v-show="extra">
            <el-icon><component :is="extraIcon || 'Document'"></component></el-icon>
            {{ extra }}
        </p>

        <section class="descriptions" :style="{
            'margin-top': extra ? '10px' : ''
        }">
            <div class="description"
                v-for="(desc, index) in descriptions"
                :key="index"
            >
                <span class="description__label">
                    <slot name="label" :row="desc, index"></slot>
                </span>

                <span class="description__value">
                    <slot name="value" :row="desc, index"></slot>
                </span>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .descriptions__container {
        .extra {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: bold;
            font-size: 14px;
        }

        .descriptions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            border-radius: 4px;

            .description {
                flex: 1 1 300px;
                word-break: break-all;
                background: var(--el-fill-color-light);
                padding: 8px 12px;
                line-height: 20px;

                .description__label {
                    font-weight: bold;
                    color: var(--el-text-color);
                    white-space: nowrap;
                    font-size: 12px;
                }

                .description__value {
                    // font-size: 10px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>