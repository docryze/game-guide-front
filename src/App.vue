<template>
  <n-config-provider :theme="activeDarkTheme ? darkTheme : null">
    <div style="height: 100%">
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
          <n-flex justify="space-between" wrap="false">
            <n-flex justify="start">Header</n-flex>
            <n-flex justify="end">
              暗色主题
              <n-switch :value="activeDarkTheme" @update:value="activeThemeChange" />
            </n-flex>
          </n-flex>
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
            <SideMenu :menuOptions="menuOptions" />
          </n-layout-sider>
          <n-layout content-style="padding: 24px;">
            <router-view></router-view>
          </n-layout>
        </n-layout>
        <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
          Footer
        </n-layout-footer>
      </n-layout>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'
import SideMenu from '@/components/menu/SideMenu'
const props = defineProps()
const activeDarkTheme = ref(true)
const menuOptions = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
]
function activeThemeChange(value: boolean) {
  activeDarkTheme.value = value
}
console.log(props)
</script>
