<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>创建 MySQL 数据表</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="tableName"
                label="表名"
                :rules="[(v) => !!v || '表名不能为空']"
                required
                variant="outlined"
              />
              <v-text-field
                v-model="tableComment"
                label="表注释"
                :rules="[(v) => !!v || '表注释不能为空']"
                required
                variant="outlined"
              />

              <v-divider class="my-4" />

              <div class="mb-2 font-weight-bold">字段信息</div>
              <v-row v-for="(field, idx) in fields" :key="idx" align="center">
                <v-col cols="1" class="text-center">
                  {{ idx + 1 }}
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model="field.name"
                    label="字段名"
                    :rules="[(v) => !!v || '字段名不能为空']"
                    required
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="2">
                  <v-select
                    v-model="field.type"
                    :items="[
                      'varchar',
                      'int',
                      'bigint',
                      'text',
                      'datetime',
                      'date',
                      'float',
                      'double',
                    ]"
                    label="类型"
                    required
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model.number="field.length"
                    label="长度"
                    type="number"
                    variant="outlined"
                    :disabled="
                      ['text', 'datetime', 'date'].includes(field.type)
                    "
                  />
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model="field.comment"
                    label="字段注释"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="3" class="align-center">
                  <v-row>
                    <v-col cols="auto">
                    <v-btn
                      icon="mdi-arrow-up"
                      size="small"
                      variant="text"
                      :disabled="idx === 0"
                      @click="moveFieldUp(idx)"
                    ></v-btn>
                    <v-btn
                      icon="mdi-arrow-down"
                      size="small"
                      variant="text"
                      :disabled="idx === fields.length - 1"
                      @click="moveFieldDown(idx)"
                    ></v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn
                        icon="mdi-delete"
                        color="error"
                        size="small"
                        variant="text"
                        @click="removeField(idx)"
                        v-if="fields.length > 1"
                      ></v-btn>
                  </v-col>
                </v-row>
              </v-col>
                  
              </v-row>
              <c-space size="large" direction="horizontal" justify="end">
                <v-btn
                  class="my-2"
                  color="primary"
                  @click="addField"
                  prepend-icon="mdi-plus"
                  >添加外键</v-btn
                >
                <v-btn
                  class="my-2"
                  color="primary"
                  @click="addField"
                  prepend-icon="mdi-plus"
                  >添加字段</v-btn
                >
              </c-space>
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

<script lang="ts">
import type { ViewMeta } from "../router";
export const meta: ViewMeta = {
  title: "创建数据表",
  icon: "mdi-database-plus",
  Name: "CreateTable",
  showInMenu: true,
};
</script>

<script setup lang="ts">
import { useCreateTable } from "./CreateTable";
import CSpace from "../components/CSpace.vue";

const {
  tableName,
  tableComment,
  fields,
  addField,
  removeField,
  onSubmit,
  onReset,
  moveFieldUp,
  moveFieldDown,
} = useCreateTable();
</script>
