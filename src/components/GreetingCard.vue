<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const greeting = ref('')

function greet() {
  greeting.value = name.value ? `안녕하세요, ${name.value}님!` : '이름을 입력해주세요.'
}
</script>

<template>
  <div class="greeting-card">
    <h2>인사 카드</h2>
    <input v-model="name" placeholder="이름을 입력하세요" @keyup.enter="greet" />
    <button @click="greet">인사하기</button>
    <p v-if="greeting" class="message">{{ greeting }}</p>
  </div>
</template>

<style scoped>
.greeting-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  max-width: 360px;
  text-align: center;
}

input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #38a373;
}

.message {
  margin-top: 16px;
  font-size: 1.2em;
  color: #42b883;
}
</style>
