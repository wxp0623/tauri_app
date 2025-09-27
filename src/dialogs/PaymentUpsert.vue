<template>
    <v-form>
        <v-text-field v-model="formData.name" label="项目" required></v-text-field>
        <v-number-input v-model="formData.amount" label="价格"></v-number-input>
        <v-text-field v-model="formData.note" label="备注"></v-text-field>
        <c-date-picker v-model="formData.date" label="日期"></c-date-picker>
        <v-number-input v-model="formData.person_count" label="人数"></v-number-input>
        <v-select v-model="formData.category" label="分类" :items="categoryList" item-title="label"
            item-value="value"></v-select>
        <v-switch v-model="formData.is_income" label="收入"></v-switch>
    </v-form>
    <v-divider class="my-4"></v-divider>
    <c-space justify="end" gap="16px">
        <v-btn color="secondary" @click="onReset">重置</v-btn>
        <v-btn color="primary" @click="onSubmit">创建</v-btn>
    </c-space>
</template>

<script setup lang="ts">
import CDatePicker from "../components/CDatePicker.vue";   
import CSpace from "../components/CSpace.vue";   
import BaseView from "../components/BaseView";
import { VForm, VTextField, VNumberInput, VDivider, VBtn, VSelect, VSwitch } from "vuetify/components";

const viewBase = new BaseView();
const formData = viewBase.ref({
    name: "",
    amount: 0,
    note: "",
    date: "",
    person_count: 1,
    category: "",
    is_income: false
});

const categoryList = viewBase.ref([
    { label: "餐饮", value: "1" },
    { label: "水费", value: "2" },
    { label: "电费", value: "3" },
    { label: "房租", value: "4" },
    { label: "气费", value: "5" },
    { label: "交通", value: "6" },
    { label: "购物", value: "7" },
    { label: "娱乐", value: "8" },
    { label: "医疗", value: "9" },
    { label: "其他", value: "99" }
]);

function formatDateTime(dateStr: string): string {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

async function onSubmit() {
    // 格式化日期
    formData.value.date = formatDateTime(formData.value.date);

    console.log("提交表单数据:", formData.value);

    await viewBase.tauriInvoker("add_payment", {
        payment: formData.value
    });
}

function onReset() {
    formData.value = {
        name: "",
        amount: 0,
        note: "",
        date: "",
        person_count: 1,
        category: "",
        is_income: false
    };
}   
</script>