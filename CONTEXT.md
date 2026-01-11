# Toolneat - Claude Code Context

이 파일은 Claude Code가 읽고 참고할 컨텍스트 문서입니다.

---

## 프로젝트 개요

**Toolneat** (toolneat.com) - 온라인 도구 모음 사이트. 애드센스 부수입 목적.

- **기술 스택**: HTML/CSS/JS (프레임워크 없음)
- **CSS**: Tailwind CLI v4
- **서버**: 없음 (정적 사이트, Cloudflare Pages)
- **다국어**: 하이브리드 i18n (`/en/` 폴더 + JS i18n)

---

## 사용자 성향 및 선호

### UI/UX 원칙
- Container max-width: **1200px**
- 다크모드 기본값: **라이트**
- 생활 도구가 개발 도구보다 **먼저** 표시 (메인 페이지)
- 모든 설명 텍스트는 **마침표로 종료**
- Input/Output 도구: PC에서 **좌우 배치** (`lg:grid-cols-2`), 모바일에서 상하
- 옵션 바: `shrink-0`, `whitespace-nowrap`으로 줄바꿈 방지

### 광고 정책 (중요)
- **상단/하단 배너 광고만** - 사이드 광고 없음
- 전면 광고, 앵커 광고, 복사 시 광고 **절대 금지**
- 사용자 경험 > 수익

### 성능 보호
- 글자수 세기: 20만자 제한
- JSON 포맷터: 500KB 이상 렌더링 스킵
- Toast 알림으로 사용자 피드백

### 코드 스타일
- 버튼 `cursor: pointer` 기본 (CSS 전역 설정됨)
- 다크모드 버튼: `dark:bg-gray-700` (gray-800 아님)
- JSON 포맷터 폰트: **11px**
- JSON 토글 아이콘: **14px × 14px**

---

## 파일 구조

```
toolneat/
├── index.html              # 메인 페이지 (한국어)
├── en/index.html           # 메인 페이지 (영어)
├── tools/
│   ├── dev/                # 개발자 도구
│   └── life/               # 생활 도구
├── en/tools/               # 영어 도구 페이지
├── pages/                  # 정책 페이지
├── assets/
│   ├── css/output.css
│   └── js/
│       ├── common.js       # 테마, 토스트, 유틸
│       ├── i18n.js         # 다국어 처리
│       └── components.js   # 헤더/푸터 로더
├── components/
│   ├── header.html
│   └── footer.html
├── locales/
│   ├── ko.json
│   └── en.json
└── src/input.css           # Tailwind 소스
```

---

## 새 도구 페이지 추가 방법

### 1. 폴더 및 파일 생성
```bash
mkdir -p tools/life/new-tool
mkdir -p en/tools/life/new-tool
```

### 2. HTML 필수 요소

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>도구 이름 - Toolneat</title>
  <meta name="description" content="도구 설명.">
  
  <!-- Canonical & hreflang -->
  <link rel="canonical" href="https://toolneat.com/tools/life/new-tool/">
  <link rel="alternate" hreflang="ko" href="https://toolneat.com/tools/life/new-tool/">
  <link rel="alternate" hreflang="en" href="https://toolneat.com/en/tools/life/new-tool/">
  <link rel="alternate" hreflang="x-default" href="https://toolneat.com/tools/life/new-tool/">
  
  <!-- Open Graph -->
  <meta property="og:title" content="도구 이름 - Toolneat">
  <meta property="og:description" content="도구 설명.">
  <meta property="og:url" content="https://toolneat.com/tools/life/new-tool/">
</head>
<body class="min-h-screen flex flex-col">
  <div id="header"></div>
  
  <main class="flex-1 py-8">
    <div class="container-main">
      <!-- 상단 광고 -->
      <div class="ad-container mb-6"></div>
      
      <!-- 도구 UI -->
      <div class="card">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">도구 이름</h1>
        <!-- 내용 -->
      </div>
      
      <!-- 정보 섹션 (필수) -->
      <div class="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
        <h2 class="text-lg font-semibold">도구 이름이란?</h2>
        <p class="text-gray-600 dark:text-gray-400">설명.</p>
      </div>
      
      <!-- 하단 광고 -->
      <div class="ad-container mt-8"></div>
    </div>
  </main>
  
  <div id="footer"></div>
</body>
</html>
```

### 3. 영어 버전 수정사항
- `<html lang="en">`
- title, description 영어로
- canonical을 영어 URL로
- 본문 텍스트 영어로

### 4. 추가 업데이트
- sitemap.xml에 URL 추가
- index.html 도구 목록에 추가
- header.html 네비게이션에 추가

---

## 핵심 기술 규칙

### Tailwind v4 다크모드
```css
/* input.css - 필수 */
@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));
```
- `@custom-variant` 사용 금지

### i18n 언어 변경 처리
```javascript
// 모든 도구에서 필수
document.addEventListener('i18nApplied', () => {
  updateLabels();
  if (hasData) calculate();
});
```
- `window.switchLanguage` 오버라이드 금지

### 날짜 처리 (UTC 문제 방지)
```javascript
// ❌ 사용 금지
date.toISOString().split('T')[0]
new Date("2024-12-25")

// ✅ 올바른 방법
function toLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
```

### 언어 감지 (URL 기반)
```javascript
const isEnglish = window.location.pathname.startsWith('/en/');
const lang = isEnglish ? 'en' : 'ko';
```
- localStorage 사용 안함
- URL이 유일한 소스

---

## 공통 유틸리티 (common.js)

```javascript
toast.success('메시지');
toast.error('메시지');
await copyToClipboard(text, buttonEl);
formatNumber(1234567);  // "1,234,567"
const fn = debounce(callback, delay);
getCurrentLang();  // 'ko' 또는 'en'
t('key.path');     // 번역 문자열
```

---

## 자주 발생하는 문제

| 문제 | 해결 |
|------|------|
| 다크모드 CSS 미생성 | `@variant dark` 문법 확인, npm run dev 재실행 |
| 언어 변경 시 동적 콘텐츠 미업데이트 | `i18nApplied` 이벤트 리스너 추가 |
| 날짜가 하루 밀림 | toISOString() 대신 로컬 헬퍼 함수 사용 |
| 다크모드 버튼 안보임 | `dark:bg-gray-700` 사용 |
| 다크모드 캘린더 아이콘 안보임 | filter: invert(1) 스타일 추가 |

---

## 2025 한국 보험료율

- 국민연금: **4.5%** (상한 637만원)
- 건강보험: **3.545%**
- 장기요양보험: **12.95%** (건강보험료의)
- 고용보험: **0.9%**

---

## 중요: 한국어/영어 동기화

**페이지 추가/수정 시 반드시 양쪽 언어 모두 처리할 것!**

- 새 도구 추가 → `/tools/` (한글) + `/en/tools/` (영문) 둘 다 생성
- UI 구조 변경 → 양쪽 페이지 동일하게 수정
- i18n 번역 → `ko.json` + `en.json` 둘 다 추가
- 네비게이션 추가 → header.html 업데이트
- **index.html 카드 추가** → `index.html` (한글) + `en/index.html` (영문) 둘 다

---

## 체크리스트: 새 페이지 추가 시

- [ ] 한국어/영어 페이지 생성
- [ ] lang 속성 설정
- [ ] title, description 설정
- [ ] canonical, hreflang 설정
- [ ] Open Graph 태그
- [ ] ad-container (상단/하단)
- [ ] 정보 섹션 (bg-blue-50)
- [ ] sitemap.xml 업데이트
- [ ] **index.html + en/index.html에 카드 추가**
- [ ] header.html에 링크 추가
- [ ] i18nApplied 리스너 (동적 콘텐츠 시)
- [ ] **ko.json / en.json 번역 추가**
