/<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">클릭 횟수: {{ count }}</button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
