# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 명령어

- **개발 서버**: `npm run dev` (Vite HMR)
- **빌드**: `npm run build` (`vue-tsc -b` 타입 체크 후 `vite build` 실행)
- **프로덕션 미리보기**: `npm run preview`

테스트 러너나 린터는 현재 설정되어 있지 않음.

## 구조

Vue 3 + TypeScript + Vite 프로젝트. `<script setup>` SFC 사용.

- `src/main.ts` — 앱 진입점, `App.vue`를 `#app`에 마운트
- `src/App.vue` — 루트 컴포넌트
- `src/router/` — Vue Router 정의
- `src/layouts/` — 레이아웃 컴포넌트 (`DefaultLayout.vue` 등)
- `src/views/` — 라우트 페이지 컴포넌트 (`MainView`, `LoginView`, `FindPasswordView` 등)
- `src/primevue/` — PrimeVue unstyled 모드 공통 preset
- `src/style.css` — 전역 스타일 (Tailwind 진입)
- `public/` — 그대로 서빙되는 파일 (favicon, icons.svg)

TypeScript strict 모드 사용. 설정 분리: `tsconfig.app.json` (앱 소스), `tsconfig.node.json` (Vite 설정). 패키지 매니저는 pnpm (lockfile 존재), npm도 사용 가능.
