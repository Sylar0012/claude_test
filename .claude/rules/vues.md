---                                                                                                                                                                                                    
paths:                                                                                                                                                                                                 
    - "src/**/*.vue"
---

Vue 작성 시 반드시 `<script setup lang="ts">`를 사용할 것.

style은 반드시 `<style scoped></style>` 를 사용할것.

순서는 script, template, style 순서로 할것.

form, input, button, select, textarea 등 HTML 기본 태그 대신
PrimeVue 컴포넌트(Form, InputText, Button, Select, Textarea 등)를 사용할것.
PrimeVue 컴포넌트 사용시 pt를 사용하여 스타일 적용할것.

PrimeVue 컴포넌트는 auto-import 설정되어 있으므로 import 하지 말것.
