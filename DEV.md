### 规范

#### 1.将组件的类型定义集中到一个 types.ts 文件中，并使用以下约定：

| 类型         | 命名约定                 | 示例             |
| ------------ | ------------------------ | ---------------- |
| props        | 组件名 + Props           | UserProfileProps |
| 事件 (emits) | 组件名 + Emits 或 Events | MyButtonEmits    |
| 插槽 (slots) | 组件名 + Slots           | LayoutSlots      |
