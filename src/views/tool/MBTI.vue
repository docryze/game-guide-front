<template>
  <n-card>没有标题</n-card>
</template>

<script setup lang="ts">
import questionList from '@/assets/mbti_question.json'
for (const question of questionList) {
  console.log(question)
}
</script>

<style scoped></style>
