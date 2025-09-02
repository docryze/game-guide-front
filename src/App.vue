<template>
  <div style="height: 100%">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered> Header </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider bordered content-style="padding: 24px;">
          <SideMenu />
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
</template>

<script setup lang="ts">
import SideMenu from '@/components/menu/SideMenu'
</script>
