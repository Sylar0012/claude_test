<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

function handleLogin(): void {
  router.push('/')
}

function goToFindPassword(): void {
  router.push('/find-password')
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <Form class="w-full max-w-sm rounded-lg border p-8" @submit="handleLogin">
      <h1 class="mb-6 text-center text-2xl font-bold">로그인</h1>
      <div class="mb-4">
        <label class="mb-1 block text-sm">아이디</label>
        <InputText v-model="username" placeholder="아이디를 입력하세요" />
      </div>
      <div class="mb-6">
        <label class="mb-1 block text-sm">비밀번호</label>
        <Password v-model="password" placeholder="비밀번호를 입력하세요" :feedback="false" />
      </div>
      <div class="flex gap-4">
        <Button
          label="비밀번호 찾기"
          type="button"
          :pt="{ root: { class: 'bg-gray-400 text-gray-700 hover:bg-gray-500' } }"
          @click="goToFindPassword"
        />
        <Button label="로그인" type="submit" />
      </div>
    </Form>
  </div>
</template>

<style scoped>
</style>
