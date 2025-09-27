<template>
    <view-container :meta="viewMeta">
        <template #head-actions>
            <v-btn icon="mdi-magnify" color="primary" prepend-icon="mdi-plus" @click="add">
                新建
            </v-btn>
        </template>
        <template #body>
            <v-data-table :headers="headers" :items="items" :search="search" hide-default-footer>
                <template v-slot:item.name="{ item }">
                    {{ item.name }}
                </template>
                <template v-slot:item.amount="{ item }">
                    {{ item.amount }}
                </template>
                <template v-slot:item.category="{ item }">
                    {{ item.category }}
                </template>
                <template v-slot:item.date="{ item }">
                    {{ item.date }}
                </template>
                <template v-slot:item.note="{ item }">
                    {{ item.note }}
                </template>
            </v-data-table>
        </template>
    </view-container>
</template>

<script lang="ts">
import type { ViewMeta } from "../router";
export const meta: ViewMeta = {
    title: "收支录入",
    description: "录入收支明细",
    icon: "mdi-currency-usd",
    Name: "PayInput",
    showInMenu: true,
};
const viewMeta = ref(meta);
</script>

<script setup lang="ts">
import { ref } from "vue";
import BaseView from "../components/BaseView";
import PaymentUpsert from "../dialogs/PaymentUpsert.vue";

const viewBase = new BaseView();

const headers = [
    {
        align: 'start',
        key: 'name',
        sortable: false,
        title: '项目',
    },
    { key: 'amount', title: '金额' },
    { key: 'category', title: '分类' },
    { key: 'date', title: '日期' },
    { key: 'note', title: '笔记' }
]

const items = ref([
    {
        name: "午餐",
        amount: 30,
        category: "餐饮",
        date: "2023-10-01",
        note: "和同事一起吃饭",
    },
    {
        name: "地铁",
        amount: 4,
        category: "交通",
        date: "2023-10-01",
        note: "上班坐地铁",
    },
]);

const add = () => {
    viewBase.showDialog("新增收支", PaymentUpsert, {});
};

const search = ref("");
</script>
