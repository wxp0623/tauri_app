import { ref } from "vue";
import { invoke  } from "@tauri-apps/api/core";

export interface TableField {
  name: string;
  type: string;
  length: number | null;
  comment: string;
}

export function useCreateTable() {
  const tableName = ref("");
  const tableComment = ref("");
  const fields = ref<TableField[]>([
    { name: "", type: "varchar", length: 255, comment: "" },
  ]);

  function addField() {
    fields.value.push({ name: "", type: "varchar", length: 255, comment: "" });
  }

  function removeField(index: number) {
    fields.value.splice(index, 1);
  }

  async function onSubmit() {
    // 这里可以调用API，把表结构提交给后端
    console.log("表名:", tableName.value);
    console.log("表注释:", tableComment.value);
    console.log("字段:", fields.value);
    const res = await invoke<string>("greet", { name: "Vue User" });
    alert(res);
    // 你可以在这里发请求
  }

  function onReset() {
    tableName.value = "";
    tableComment.value = "";
    fields.value = [{ name: "", type: "varchar", length: 255, comment: "" }];
  }
  function moveFieldUp(index: number) {
    if (index > 0) {
      const temp = fields.value[index - 1];
      fields.value[index - 1] = fields.value[index];
      fields.value[index] = temp;
    }
  }

  function moveFieldDown(index: number) {
    if (index < fields.value.length - 1) {
      const temp = fields.value[index + 1];
      fields.value[index + 1] = fields.value[index];
      fields.value[index] = temp;
    }
  }

  return {
    tableName,
    tableComment,
    fields,
    addField,
    removeField,
    onSubmit,
    onReset,
    moveFieldUp,
    moveFieldDown,
  };
}
