# claude_test

Vue 3 + TypeScript + Vite 프로젝트

## 기술 스택

- **Vue 3** — `<script setup>` SFC
- **TypeScript** — strict 모드
- **Vite** — 빌드 및 개발 서버
- **PrimeVue** — UI 컴포넌트 (Aura 테마)
- **Tailwind CSS v4** — 유틸리티 CSS

## 명령어

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드 (타입 체크 포함)
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── main.ts          # 앱 진입점
├── App.vue          # 루트 컴포넌트
├── style.css        # 글로벌 스타일 + Tailwind
├── components/      # Vue SFC 컴포넌트
└── assets/          # 정적 이미지
```