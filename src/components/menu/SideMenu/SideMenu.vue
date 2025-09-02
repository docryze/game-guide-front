<template>
  <n-menu :options="menuOptions" />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
const menuOptions: MenuOption[] = [
  {
    key: 'Home',
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/game',
            query: {
              id: '1',
            },
          },
        },
        { default: () => 'Home' },
      ),
  },
]
</script>

<style scoped></style>
