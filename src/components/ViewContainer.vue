<template>
    <v-card class="pa-4 ma-4" outlined>
        <v-card-item>
            <c-space justify="space-between" style="width: 100%">
                <div>
                    <v-card-title>
                        {{props.meta.title}}
                    </v-card-title>
                    <v-card-subtitle>
                        {{props.meta.description}}
                    </v-card-subtitle>
                </div>
                <div style="display: flex; align-items: end;">
                    <slot name="head-actions"></slot>
                </div>
            </c-space>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
            <slot name="body"></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    meta: import("../router").ViewMeta
}>();
</script>