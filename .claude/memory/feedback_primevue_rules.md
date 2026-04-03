---
name: PrimeVue 규칙 준수
description: HTML 기본 태그 대신 PrimeVue 컴포넌트를 반드시 사용할 것 (form, input, button 등)
type: feedback
---

HTML 기본 태그(form, input, button 등) 대신 반드시 PrimeVue 컴포넌트(Form, InputText, Button 등)를 사용할 것.

**Why:** 사용자가 rules에 "내부 컴포넌트를 생성할 때 PrimeVue 컴포넌트를 사용할 것"이라고 명시했는데 form 태그를 HTML 기본 태그로 작성하여 지적받음.

**How to apply:** Vue 파일 작성 시 대체 가능한 PrimeVue 컴포넌트가 있는지 항상 확인. 별도 패키지(@primevue/forms 등)가 필요할 수 있으니 설치 여부도 체크.