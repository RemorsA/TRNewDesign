<script setup>
    const props = defineProps({
        descriptions: {
            required: true,
            type: Array,
            default: []
        },
        extra: String,
        extraIcon: Object
    })
</script>

<template>
    <el-card class="descriptions__container">
        <p class="extra" v-show="extra">
            <el-icon><component :is="extraIcon || 'Document'"></component></el-icon>
            {{ extra }}
        </p>

        <section class="descriptions">
            <div class="description"
                v-for="(desc, index) in descriptions"
                :key="index"
            >
                <span class="description__label">
                    <slot name="label" :row="desc"></slot>
                </span>

                <span class="description__value">
                    <slot name="value" :row="desc"></slot>
                </span>
            </div>
        </section>
    </el-card>
</template>

<style lang="scss" scoped>
    .descriptions__container {
        .extra {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: bold;
            white-space: nowrap;

            &::after {
                content: '';
                width: 100%;
                height: 1px;
                border-bottom: 1px solid currentColor;
            }
        }

        .descriptions {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            flex-wrap: wrap;
            border-radius: 4px;
            margin-top: 10px;

            .description {
                flex: 1 1 300px;
                // word-break: keep-all;
                word-break: break-all;
                background: var(--el-fill-color-light);
                padding: 8px 12px;

                .description__label {
                    font-weight: bold;
                    color: var(--el-text-color);
                    white-space: nowrap;
                }

                .description__value {
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>