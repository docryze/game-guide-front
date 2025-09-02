import type { App } from 'vue';
import SideMenu from './SideMenu.vue'
// 为组件提供install方法，用于全局注册
// SideMenu.install = (app: App) => {
//     // 检查组件是否已定义 name 属性
//     app.component(SideMenu.name, SideMenu);
// };
console.log(SideMenu.name)

// 默认导出组件
export default SideMenu;

// 导出组件类型
export * from './types';
