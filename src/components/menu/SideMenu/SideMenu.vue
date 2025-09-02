<template>
  <n-menu :options="menuOptions" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import type { SideMenuProps } from './types';
defineOptions({
  name : "SideMenu",
});
const props = defineProps<SideMenuProps>();
const menuOptions: MenuOption[] = props.menuOptions.map(p => {
  return {
    key: p.id,
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/game',
            // query: {
            //   id: '1',
            // },
          },
        },
        { default: () => p.name },
      )
  }
})
</script>

<style scoped></style>
