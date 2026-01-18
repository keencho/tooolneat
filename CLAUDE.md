# Toolneat 도구 추가 가이드

## 현재 도구 수
**Dev 35, Life 58, PDF 9, 총 102개**

### ⚠️⚠️⚠️ 숫자가 제일 중요!!! ⚠️⚠️⚠️
- 도구 추가/삭제 시 모든 숫자 동기화 필수
- index.html, /tools/index.html, /tools/{category}/index.html, /en/... 전부!
- 숫자 불일치 = 사이트 신뢰도 하락

---

## 현재 도구 목록 (중복 방지용)

**⚠️ 도구 추가/삭제 시 이 목록도 업데이트할 것!**

**Dev (35):** base64, box-shadow, case-converter, color-contrast, color-converter, color-palette, cron-generator, css-minifier, diff-checker, gradient-generator, hash-generator, html-entity, html-minifier, json-csv, json-formatter, json-validator, js-minifier, jwt-decoder, jwt-generator, line-ending, lorem-ipsum, markdown-preview, meta-tag-generator, og-preview, password-generator, regex-tester, robots-txt, sql-formatter, text-escape, timestamp-converter, url-encoder, utm-generator, uuid-generator, xml-json, yaml-json

**Life (58):** age-calculator, ai-detector, ascii-unicode, aspect-ratio, background-remover, barcode-generator, base-converter, bmi-calculator, character-counter, coin-flip, color-picker, compound-calculator, countdown-timer, dday-calculator, dead-pixel-test, dice-roller, emoji-picker, exif-remover, fake-chat, fancy-text, favicon-generator, image-blur, image-compressor, image-converter, image-crop, image-resizer, image-rotate, image-watermark, ip-lookup, korean-name-generator, loan-calculator, lottery-generator, meme-generator, mic-test, morse-code, noise-generator, ocr, percent-calculator, pixel-fixer, pomodoro-timer, qr-generator, qr-scanner, reaction-test, roulette, salary-calculator, screen-burn-test, screen-color-test, screen-recorder, sleep-calculator, speech-to-text, stopwatch, text-to-speech, tip-calculator, typing-test, unit-converter, video-to-gif, webcam-test, youtube-thumbnail

**PDF (9):** compress-pdf, delete-pdf, image-to-pdf, merge-pdf, pdf-to-image, reorder-pdf, rotate-pdf, split-pdf, watermark-pdf

---

## 헤더 시스템 (중요!)

### 헤더 구조
```
헤더: fixed top-0, z-50, 높이 64px (h-16)
드롭다운: fixed top-16, z-60
Backdrop: fixed top-16, z-55
```

### ⚠️ 헤더가 fixed이므로 main에 mt-16 필수!
```html
<!-- 올바른 예시 -->
<main class="flex-1 mt-16 py-8 md:py-12">

<!-- 잘못된 예시 (콘텐츠가 헤더에 가려짐) -->
<main class="flex-1 py-8 md:py-12">
```

### PC 드롭다운 메뉴
- Dev/PDF/Life 버튼 클릭 시 헤더 아래 드롭다운 열림
- 도구 목록: `/assets/js/tools-data.js`의 `TOOLS_DATA`에서 동적 로드
- JS 로직: `/assets/js/components.js`의 `initToolsDropdown()`

### 드롭다운 i18n 키
- `nav.all`: "전체" 탭
- `nav.searchPlaceholder`: 검색 placeholder
- `nav.dev`, `nav.pdf`, `nav.life`: 카테고리 탭

### 헤더 수정 시 해야 할 것
1. `/components/header.html` 수정
2. `node scripts/auto/force-update-headers.js` 실행 (모든 HTML 파일 업데이트)

### force-update-headers.js
- `<div id="header">...</div>` 내용을 `/components/header.html`로 교체
- 깨진 HTML은 자동 수정 안 됨 → `fix-duplicate-headers.js` 사용

---

## 새 도구 추가 체크리스트

### 1. 파일 생성
- [ ] `/tools/{category}/{tool}/index.html`
- [ ] `/en/tools/{category}/{tool}/index.html`

### 2. 번역 키
- [ ] `/locales/ko.json` - tools.{key}.title, description
- [ ] `/locales/en.json` - tools.{key}.title, description

### 3. sitemap.xml
- [ ] 한글 URL + 영어 URL 둘 다 추가

### 4. 도구 목록 페이지
- [ ] `/tools/index.html` - 카드 + 숫자 업데이트
- [ ] `/en/tools/index.html` - 카드 + 숫자 업데이트

### 5. 카테고리 인덱스
- [ ] `/tools/{category}/index.html` - 카드 + 숫자
- [ ] `/en/tools/{category}/index.html` - 카드 + 숫자

### 6. 헤더 (Mobile Accordion)
- [ ] `/components/header.html` - 모바일 메뉴에 도구 추가
- [ ] `node scripts/auto/force-update-headers.js` 실행

### 7. 검색 데이터
- [ ] `/assets/js/tools-data.js` - TOOLS_DATA에 도구 추가

### 8. 홈페이지 숫자
- [ ] `/index.html` - 카테고리 카드 숫자
- [ ] `/en/index.html` - 카테고리 카드 숫자

### 9. 이 파일 업데이트
- [ ] CLAUDE.md 도구 목록 + 숫자 업데이트

---

## 숫자 업데이트 위치

| 파일 | 위치 |
|-----|------|
| `/index.html` | 카테고리 카드 숫자 |
| `/tools/index.html` | meta, 본문, 필터버튼 |
| `/tools/dev/index.html` | meta, 본문, 필터버튼 |
| `/tools/life/index.html` | meta, 본문, 필터버튼 |

**영어 버전도 `/en/` 경로에서 동일하게 수정!**

---

## 도구 페이지 필수 구조

```html
<body class="min-h-screen flex flex-col">
  <div id="header"></div>

  <!-- ⚠️ mt-16 필수! (fixed 헤더 64px 공간 확보) -->
  <main class="flex-1 mt-16 py-8 md:py-12">
    <div class="container-main">
      <div class="mb-6">
        <h1>도구명</h1>
        <p>설명</p>
      </div>
      <div class="card"><!-- 도구 UI --></div>
      <section class="mt-8"><!-- FAQ 섹션 --></section>
    </div>
  </main>

  <div id="footer"></div>
</body>
```

---

## tools-data.js 형식

```js
{
  id: 'tool-id',
  path: '/tools/category/tool-id',
  name: { ko: '한글 이름', en: 'English Name' },
  description: { ko: '한글 설명', en: 'English description' },
  tags: ['tag1', 'tag2', '한글태그'],
  icon: 'code'
}
```

---

## ⚠️ 자주 놓치는 실수

### 1. main에 mt-16 누락
- 헤더가 `fixed`라서 `mt-16` 없으면 콘텐츠가 헤더에 가려짐
- 모든 페이지의 `<main>`에 `mt-16` 필수

### 2. tools-data.js 누락
- 이걸 빠뜨리면 Ctrl+K 검색 + PC 드롭다운에서 도구 안 보임

### 3. 언어 불일치
- KO 페이지는 한글, EN 페이지는 영어로 기본 텍스트 작성
- `data-i18n` 있어도 기본 텍스트가 해당 언어여야 함

### 4. Textarea 리사이즈
- `.textarea` 클래스 사용 금지 (resize: none 들어있음)
- `<style>` 블록으로 직접 스타일 정의

### 5. 버튼 아이콘 정렬
- SVG 있으면 `flex items-center justify-center` 추가

---

## 스크립트 목록

| 스크립트 | 용도 |
|---------|------|
| `node scripts/auto/force-update-headers.js` | 모든 HTML 헤더 업데이트 |
| `node scripts/auto/fix-duplicate-headers.js` | 중복 헤더 제거 |

---

## 카테고리별 색상
- **Dev**: blue(인코딩), purple(생성기), green(변환기), orange(테스터)
- **Life**: green, pink, indigo, yellow, cyan
- **PDF**: red

## applicationCategory (JSON-LD)
- Dev: `DeveloperApplication`
- Life/PDF: `UtilitiesApplication`

---

## FAQ 섹션 작성 가이드

### ⚠️ details/summary 사용 금지!
아코디언 스타일(details/summary) 대신 **항상 펼쳐진 형태**로 작성

### 올바른 FAQ 구조
```html
<section class="mt-8 card">
  <h3 class="text-lg font-semibold mb-4">자주 묻는 질문</h3>
  <div class="space-y-4 text-gray-600 dark:text-gray-400">
    <div>
      <h4 class="font-medium text-gray-900 dark:text-white">Q: 질문 내용?</h4>
      <p>답변 내용</p>
    </div>
    <div>
      <h4 class="font-medium text-gray-900 dark:text-white">Q: 두 번째 질문?</h4>
      <p>두 번째 답변</p>
    </div>
  </div>
</section>
```

### FAQ 필수 항목 (도구 성격에 맞게 작성)
1. 지원 형식/기능 설명
2. 서버 저장 여부 (대부분 "브라우저에서 처리, 서버 저장 안함")
3. 도구 사용 팁 또는 기능 차이점

---

## 알려진 기술적 이슈 및 해결책

### 1. html2canvas + Tailwind CSS v4 oklch 오류
**문제**: Tailwind CSS v4의 `oklch()` 색상 함수를 html2canvas가 파싱 못함
```
Error: Attempting to parse an unsupported color function 'oklch'
```

**해결책**: html2canvas 대신 **Canvas API로 직접 그리기**
- 참고: `/tools/life/fake-chat/index.html`의 `downloadChat()` 함수
- RGB/HEX 색상만 사용하여 canvas에 직접 렌더링

### 2. 모바일 헤더 메뉴 스크롤 안됨
**문제**: 모바일에서 Dev Tools, Life Tools 등 확장 시 스크롤 불가

**해결책**: `#mobile-menu`에 max-height와 overflow 추가
```html
<nav id="mobile-menu" class="hidden md:hidden pb-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
```

### 3. 이미지 업로드 후 재업로드 불가
**문제**: 이미지 한번 올리면 새 이미지 업로드 못함 (F5 필요)

**해결책**: "새 이미지" 버튼 추가
```javascript
function newImage() {
  document.getElementById('editorArea').classList.add('hidden');
  document.getElementById('uploadCard').classList.remove('hidden');
  document.getElementById('imageInput').value = '';
  originalImage = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
```
- 업로드 영역 카드에 ID 부여 (`id="uploadCard"`)
- 에디터 영역 숨기고 업로드 영역 다시 표시

### 4. 모자이크 효과가 불균일하게 적용됨
**문제**: 픽셀화 블록이 브러시 위치에 따라 어긋남

**해결책**: 블록 그리드 정렬 + 중앙 샘플링
```javascript
function applyPixelate(cx, cy, size, pixelSize) {
  // 블록 시작점을 그리드에 정렬
  const blockX = Math.floor(startX / pixelSize) * pixelSize;
  const blockY = Math.floor(startY / pixelSize) * pixelSize;

  // 블록 중앙에서 색상 샘플링
  const sampleX = px + Math.floor(pixelSize / 2);
  const sampleY = py + Math.floor(pixelSize / 2);
  // ...
}
```

### 5. 업로드 영역 hidden 처리 후 빈 공간 남음
**문제**: `uploadArea`만 hidden하면 부모 카드가 빈 공간으로 남음

**해결책**: 부모 카드 전체를 숨김
```html
<!-- 부모 카드에 ID 부여 -->
<div id="uploadCard" class="card mb-6">
  <div id="uploadArea" class="drop-zone">...</div>
</div>
```
```javascript
// uploadArea 대신 uploadCard를 숨김
document.getElementById('uploadCard').classList.add('hidden');
```

---

## 도구별 공통 패턴

### 이미지 처리 도구
```
구조:
1. 업로드 카드 (id="uploadCard") - 드래그앤드롭 + 파일선택
2. 에디터 영역 (id="editorArea", hidden) - 도구 + 캔버스
3. FAQ 섹션

필수 버튼:
- 초기화 (원본으로 복원)
- 새 이미지 (다른 이미지 업로드)
- 다운로드
```

### Canvas 기반 이미지 저장
```javascript
// 올바른 방법 - Canvas API 직접 사용
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#ffffff';  // RGB/HEX만 사용!
// ... 직접 그리기 ...
link.href = canvas.toDataURL('image/png');

// 피해야 할 방법 - html2canvas (oklch 오류 발생)
// html2canvas(element).then(canvas => ...)
```
