### 规范

#### 1.将组件的类型定义集中到一个 types.ts 文件中，并使用以下约定：

| 类型         | 命名约定                 | 示例             |
| ------------ | ------------------------ | ---------------- |
| props        | 组件名 + Props           | UserProfileProps |
| 事件 (emits) | 组件名 + Emits 或 Events | MyButtonEmits    |
| 插槽 (slots) | 组件名 + Slots           | LayoutSlots      |

#### 2.vue3 defineProps defineModel

| 特性     | defineProps                  | defineModel                   |
| -------- | ---------------------------- | ----------------------------- |
| 数据流   | 单向（父 -> 子）             | 双向（父 <-> 子）             |
| 可修改性 | 不可直接修改                 | 可像 ref 一样直接读写         |
| 主要用途 | 通用数据传递和展示           | 简化 v-model 的双向绑定       |
| 底层实现 | 只接收 props                 | 封装了 props + emits          |
| 最佳实践 | 几乎所有非双向绑定的父子通信 | 所有需要 v-model 的自定义组件 |
