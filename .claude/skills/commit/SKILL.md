---
name: commit
description: 변경사항을 분석하고 Conventional Commits 형식의 한글 커밋 메시지를 작성하여 커밋합니다.
disable-model-invocation: true
argument-hint: "[추가 메시지 (선택)]"
allowed-tools: Bash(git *)
---

## 커밋 절차

아래 단계를 순서대로 수행하세요.

### 1단계: 상태 확인 (병렬 실행)

- `git status` — 변경/추가된 파일 확인
- `git diff` — 스테이징되지 않은 변경 내용 확인
- `git diff --cached` — 이미 스테이징된 변경 내용 확인
- `git log --oneline -5` — 최근 커밋 스타일 참고

### 2단계: 스테이징

- 변경된 파일과 새로 추가된 파일을 `git add`로 스테이징합니다.
- 단, `.env`, `credentials`, 시크릿 파일은 제외합니다.
- 변경 사항이 없으면 "커밋할 변경사항이 없습니다"라고 알리고 종료합니다.

### 3단계: 커밋 메시지 작성

Conventional Commits 형식으로 **한글** 커밋 메시지를 작성합니다.

**형식:**
```
<type>(<scope>): <한글 설명>

<본문 (선택, 한글)>
```

**type 목록:**
- `feat` — 새로운 기능
- `fix` — 버그 수정
- `docs` — 문서 변경
- `style` — 포맷팅, 세미콜론 등 (코드 동작 변경 없음)
- `refactor` — 리팩토링
- `test` — 테스트 추가/수정
- `chore` — 빌드, 설정 등 기타 변경

**규칙:**
- 제목은 50자 이내로 간결하게
- "왜" 변경했는지에 초점을 맞추세요
- scope는 변경된 주요 영역 (컴포넌트명, 모듈명 등), 없으면 생략 가능
- 사용자가 `$ARGUMENTS`로 추가 메시지를 전달했다면 커밋 메시지에 반영하세요

**예시:**
```
feat(auth): 소셜 로그인 기능 추가
fix: 목록 페이지 무한 스크롤 오류 수정
refactor(api): 중복된 에러 처리 로직 통합
chore: ESLint 설정 업데이트
```

### 4단계: 커밋 실행

- HEREDOC 방식으로 커밋 메시지를 전달합니다.
- 커밋 후 `git status`로 결과를 확인합니다.
- 사용자에게 커밋 결과를 간략히 보고합니다.