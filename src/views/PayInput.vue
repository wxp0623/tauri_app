<template>
    <v-container class="pa-4">
        <v-row>
            <v-col cols="12" md="12">
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="tableName" label="表名" :rules="[(v) => !!v || '表名不能为空']" required
                                variant="outlined" />
                            <v-text-field v-model="tableComment" label="表注释" :rules="[(v) => !!v || '表注释不能为空']" required
                                variant="outlined" />
                        </v-form>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" @click="onSubmit">创建</v-btn>
                        <v-btn color="secondary" @click="onReset">重置</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import CSpace from "../components/CSpace.vue";
import { ref } from "vue";

const tableName = ref("");
const tableComment = ref("");

async function onSubmit() {
    // 这里可以调用API，把表结构提交给后端
}

function onReset() {
}

</script>
