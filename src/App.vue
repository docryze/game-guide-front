<template>
  <n-config-provider :theme="themeType">
    <div style="height: 100%">
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 24px" bordered> Header </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
            <SideMenu :menuOptions="menuOptions"/>
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
import { darkTheme, lightTheme } from 'naive-ui'
import SideMenu from '@/components/menu/SideMenu'
const themeType = darkTheme;
const menuOptions = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
]
</script>
