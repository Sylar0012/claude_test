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
- `src/App.vue` — 루트 컴포넌트, `HelloWorld` 렌더링
- `src/components/` — Vue SFC 컴포넌트
- `src/assets/` — 정적 이미지 (컴포넌트에서 import)
- `public/` — 그대로 서빙되는 파일 (favicon, icons.svg)

TypeScript strict 모드 사용. 설정 분리: `tsconfig.app.json` (앱 소스), `tsconfig.node.json` (Vite 설정). 패키지 매니저는 pnpm (lockfile 존재), npm도 사용 가능.
