<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogin(): void {
  router.push('/main')
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="w-full max-w-sm rounded-lg border p-8">
      <h1 class="mb-6 text-center text-2xl font-bold">로그인</h1>
      <div class="mb-4">
        <label class="mb-1 block text-sm">아이디</label>
        <input type="text" class="w-full rounded border px-3 py-2" placeholder="아이디를 입력하세요" />
      </div>
      <div class="mb-6">
        <label class="mb-1 block text-sm">비밀번호</label>
        <input type="password" class="w-full rounded border px-3 py-2" placeholder="비밀번호를 입력하세요" />
      </div>
      <button class="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600" @click="handleLogin">
        로그인
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
