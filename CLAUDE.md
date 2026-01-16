# Toolneat 도구 추가 가이드

## 현재 도구 수
**Dev 34, Life 47, PDF 9, 총 90개**

---

## 현재 도구 목록 (중복 방지용)

**⚠️ 도구 추가/삭제 시 이 목록도 업데이트할 것!**

**Dev (34):** base64, box-shadow, case-converter, color-contrast, color-converter, color-palette, cron-generator, css-minifier, diff-checker, gradient-generator, hash-generator, html-entity, html-minifier, json-csv, json-formatter, js-minifier, jwt-decoder, jwt-generator, line-ending, lorem-ipsum, markdown-preview, meta-tag-generator, og-preview, password-generator, regex-tester, robots-txt, sql-formatter, text-escape, timestamp-converter, url-encoder, utm-generator, uuid-generator, xml-json, yaml-json

**Life (47):** age-calculator, ascii-unicode, aspect-ratio, background-remover, barcode-generator, base-converter, bmi-calculator, character-counter, coin-flip, color-picker, compound-calculator, countdown-timer, dday-calculator, dead-pixel-test, dice-roller, emoji-picker, exif-remover, favicon-generator, image-compressor, image-converter, image-crop, image-resizer, image-rotate, image-watermark, ip-lookup, loan-calculator, lottery-generator, meme-generator, ocr, percent-calculator, pixel-fixer, pomodoro-timer, qr-generator, qr-scanner, reaction-test, roulette, salary-calculator, screen-burn-test, screen-color-test, screen-recorder, speech-to-text, stopwatch, text-to-speech, tip-calculator, typing-test, unit-converter, video-to-gif

**PDF (9):** compress-pdf, delete-pdf, image-to-pdf, merge-pdf, pdf-to-image, reorder-pdf, rotate-pdf, split-pdf, watermark-pdf

---

## ⚠️ 흔한 실수: 숫자 업데이트 누락

도구 추가 시 숫자가 여러 곳에 있어서 빠뜨리기 쉬움!

### 숫자 업데이트 전체 위치 (KO/EN 둘 다!)
| 파일 | 위치 | 예시 |
|-----|------|------|
| `/index.html` | 카테고리 카드 | `34 <span>도구</span>` |
| `/tools/index.html` | meta, 본문, 필터버튼 3개 | `90개`, `(34)`, `(47)`, `(9)` |
| `/tools/dev/index.html` | meta, 본문, 필터버튼 | `34개 이상`, `전체 (34)` |
| `/tools/life/index.html` | meta, 본문, 필터버튼 | `47개 이상`, `전체 (47)` |

**영어 버전도 동일하게 `/en/` 경로에서 수정!**

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

### 4. 도구 목록 페이지 (tool-card 추가 + 숫자!)
- [ ] `/tools/index.html` - 카드 + meta + 본문 + 필터버튼
- [ ] `/en/tools/index.html` - 카드 + meta + 본문 + 필터버튼

### 5. 카테고리 인덱스 (tool-card 추가 + 숫자!)
- [ ] `/tools/{category}/index.html` - 카드 + meta + 본문 + 필터버튼
- [ ] `/en/tools/{category}/index.html` - 카드 + meta + 본문 + 필터버튼

### 6. 헤더 (Desktop + Mobile 둘 다!)
- [ ] `/components/header.html`
- [ ] `node scripts/auto/force-update-headers.js` 실행

### 7. 홈페이지 숫자
- [ ] `/index.html` - 카테고리 카드 숫자
- [ ] `/en/index.html` - 카테고리 카드 숫자

---

## 도구 페이지 필수 구조

```html
<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8846557285079359" crossorigin="anonymous"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>도구명 - Toolneat</title>
  <meta name="description" content="150자 이상 설명">

  <!-- Canonical & hreflang -->
  <link rel="canonical" href="https://toolneat.com/tools/{category}/{tool}/">
  <link rel="alternate" hreflang="ko" href="https://toolneat.com/tools/{category}/{tool}/">
  <link rel="alternate" hreflang="en" href="https://toolneat.com/en/tools/{category}/{tool}/">
  <link rel="alternate" hreflang="x-default" href="https://toolneat.com/tools/{category}/{tool}/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Toolneat">
  <meta property="og:title" content="도구명 - Toolneat">
  <meta property="og:description" content="설명">
  <meta property="og:url" content="https://toolneat.com/tools/{category}/{tool}/">
  <meta property="og:image" content="https://toolneat.com/assets/images/og-image.png">

  <!-- CSS & JS -->
  <link rel="stylesheet" href="../../../assets/css/output.css">
  <script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>
  <script src="../../../assets/js/common.js"></script>
  <script src="../../../assets/js/i18n.js"></script>
  <script src="../../../assets/js/components.js"></script>

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebApplication","name":"도구명","description":"설명","url":"https://toolneat.com/tools/{category}/{tool}","applicationCategory":"DeveloperApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"},"author":{"@type":"Organization","name":"Toolneat"}}
  </script>
</head>

<body class="min-h-screen flex flex-col">
  <div id="header"></div>
  <main class="flex-1 py-8 md:py-12">
    <div class="container-main">
      <div class="mb-6">
        <h1>도구명</h1>
        <p>설명</p>
      </div>
      <div class="card"><!-- 도구 UI --></div>
      <section class="mt-8"><!-- FAQ 섹션 (SEO용, 3-5개 Q&A) --></section>
    </div>
  </main>
  <div id="footer"></div>
</body>
```

---

## tool-card 형식

```html
<a href="/tools/dev/{tool}" class="tool-card">
  <div class="tool-icon bg-gradient-to-br from-blue-500 to-blue-600">
    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."/>
    </svg>
  </div>
  <div class="tool-info">
    <div class="tool-name" data-i18n="tools.{key}.title">도구명</div>
    <div class="tool-desc">설명</div>
  </div>
</a>
```

---

## 헤더 수정

### Desktop Mega Menu
```html
<a href="/tools/dev/{tool}" class="mega-link nav-link" data-i18n="tools.{key}.title">도구명</a>
```

### Mobile Accordion
```html
<a href="/tools/dev/{tool}" class="nav-link block py-1.5 text-sm text-gray-600 dark:text-gray-400" data-i18n="tools.{key}.title">도구명</a>
```

**⚠️ Desktop + Mobile 둘 다 추가해야 함!**

수정 후: `node scripts/auto/force-update-headers.js`

---

## 주의사항

1. **스크립트 로딩 순서**: Fuse.js → common.js → i18n.js → components.js
2. **양쪽 버전 동기화**: KO/EN 둘 다 추가
3. **헤더 기본값은 한글**: `data-i18n` 속성 + 한글 텍스트
4. **CSS `@apply`**: 인라인 `<style>`에서 안됨, Tailwind 클래스 직접 사용

---

## 카테고리별 색상
- **Dev**: blue(인코딩), purple(생성기), green(변환기), orange(테스터)
- **Life**: green, pink, indigo, yellow, cyan
- **PDF**: red

---

## applicationCategory (JSON-LD)
- Dev: `DeveloperApplication`
- Life/PDF: `UtilitiesApplication`
