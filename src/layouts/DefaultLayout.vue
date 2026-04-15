<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center justify-between border-b px-6 py-3">
      <h1 class="cursor-pointer text-lg font-bold" @click="router.push('/')">Logo</h1>
      <nav class="flex gap-4">
        <Button label="메인" :pt="{ root: { class: 'bg-transparent text-gray-700 hover:text-blue-500 px-2 py-1' } }" @click="router.push('/')" />
        <Button label="로그아웃" :pt="{ root: { class: 'bg-transparent text-gray-700 hover:text-blue-500 px-2 py-1' } }" @click="router.push('/login')" />
      </nav>
    </header>

    <main class="flex-1 p-6">
      <router-view />
    </main>

    <footer class="border-t px-6 py-4 text-center text-sm text-gray-400">
      &copy; 2026 Claude Test. All rights reserved.
    </footer>
  </div>
</template>

<style scoped>
</style>