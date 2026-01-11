# Toolneat 프로젝트 현황

## 프로젝트 개요
- **사이트**: https://toolneat.com
- **목적**: 개발자 및 일반 사용자를 위한 무료 온라인 도구 모음
- **배포**: Cloudflare Workers (정적 사이트)
- **언어**: 한국어 (기본) / 영어

---

## 기술 스택
- **프론트엔드**: Vanilla HTML/CSS/JS (프레임워크 없음)
- **스타일링**: Tailwind CSS v4
- **폰트**: Pretendard (한국어 최적화)
- **배포**: Cloudflare Workers + wrangler.toml
- **빌드**: `npm run build` → Tailwind CSS 컴파일

---

## 현재 도구 목록 (2024.01.11 기준)

### 개발 도구 (11개)
| 도구 | 경로 | 설명 |
|------|------|------|
| Base64 인코딩/디코딩 | `/tools/dev/base64` | 텍스트 ↔ Base64 변환 |
| URL 인코딩/디코딩 | `/tools/dev/url-encoder` | URL 인코딩/디코딩 |
| JWT 디코더 | `/tools/dev/jwt-decoder` | JWT 토큰 분석 |
| JWT 생성기 | `/tools/dev/jwt-generator` | JWT 토큰 생성 |
| UUID 생성기 | `/tools/dev/uuid-generator` | UUID v4 생성 |
| 해시 생성기 | `/tools/dev/hash-generator` | MD5, SHA-1, SHA-256 |
| JSON 포맷터 | `/tools/dev/json-formatter` | JSON 정렬/검증 |
| 색상 변환기 | `/tools/dev/color-converter` | HEX, RGB, HSL 변환 |
| Unix Timestamp 변환기 | `/tools/dev/timestamp-converter` | 타임스탬프 ↔ 날짜 |
| 정규표현식 테스터 | `/tools/dev/regex-tester` | Regex 실시간 테스트 |
| Lorem Ipsum 생성기 | `/tools/dev/lorem-ipsum` | 더미 텍스트 생성 |

### 생활 도구 (11개)
| 도구 | 경로 | 설명 |
|------|------|------|
| 연봉 실수령액 계산기 | `/tools/life/salary-calculator` | 세금/4대보험 계산 (한국) |
| 대출 이자 계산기 | `/tools/life/loan-calculator` | 원리금균등/원금균등 |
| BMI 계산기 | `/tools/life/bmi-calculator` | 체질량지수 계산 |
| D-day 계산기 | `/tools/life/dday-calculator` | 남은 일수 계산 |
| 글자수 세기 | `/tools/life/character-counter` | 글자/단어/바이트 |
| 단위 변환기 | `/tools/life/unit-converter` | 평수, 면적 등 |
| QR 코드 생성기 | `/tools/life/qr-generator` | URL/텍스트 → QR |
| 불량화소 테스트 | `/tools/life/dead-pixel-test` | 모니터 데드픽셀 |
| 픽셀 수리 | `/tools/life/pixel-fixer` | 스턱픽셀 수리 |
| 번인 테스트 | `/tools/life/screen-burn-test` | OLED 번인 확인 |
| 화면 색상 테스트 | `/tools/life/screen-color-test` | 색상 균일성 테스트 |

### 정적 페이지 (3개)
- `/pages/about` - 소개
- `/pages/privacy` - 개인정보처리방침
- `/pages/terms` - 이용약관

---

## AdSense 현황

### 진행 상태
- [x] AdSense 계정 생성
- [x] 사이트 등록 (toolneat.com)
- [x] AdSense 스크립트 추가 (54개 파일)
- [x] ads.txt 생성
- [x] GDPR 동의 메시지 설정 (인증 CMP)
- [x] 심사 제출
- [ ] **심사 대기 중** (1~14일 소요)

### 퍼블리셔 ID
```
ca-pub-8846557285079359
```

### 우려 사항
- 신규 사이트 (트래픽 없음)
- 콘텐츠 부족 (도구 UI만 있고 설명 글 없음)
- 예상 통과율: 40~50%
- 탈락 시 예상 사유: "가치가 낮은 콘텐츠"

---

## Google Search Console
- [x] 사이트 등록
- [x] sitemap.xml 제출 (52개 페이지)

---

## 파일 구조
```
toolneat/
├── index.html              # 메인 (한국어)
├── 404.html                # 404 페이지
├── offline.html            # 오프라인 페이지
├── ads.txt                 # AdSense 인증
├── sitemap.xml             # 사이트맵
├── wrangler.toml           # Cloudflare Workers 설정
├── src/
│   └── input.css           # Tailwind 소스
├── assets/
│   ├── css/output.css      # 빌드된 CSS
│   ├── js/
│   │   ├── common.js       # 공통 (다크모드 등)
│   │   ├── i18n.js         # 다국어
│   │   └── components.js   # 헤더/푸터 로더
│   ├── fonts/              # Pretendard 폰트
│   └── icons/              # 파비콘
├── components/
│   ├── header.html         # 공통 헤더
│   └── footer.html         # 공통 푸터
├── tools/
│   ├── dev/                # 개발 도구 (한국어)
│   └── life/               # 생활 도구 (한국어)
├── en/
│   ├── index.html          # 메인 (영어)
│   ├── tools/              # 도구 (영어)
│   └── pages/              # 페이지 (영어)
└── pages/                  # 정적 페이지 (한국어)
```

---

## 최근 수정 사항 (2024.01.11)
1. 픽셀 수리 도구 - 정적 노이즈 효과 추가 (JScreenFix 스타일)
2. 모바일 가로 스크롤 버그 수정 (nav-mega-menu hidden)
3. 영어 페이지 링크 버그 수정 (components.js)
4. index.html description truncate 제거 (텍스트 줄바꿈)
5. AdSense 스크립트 전체 추가 (54개 파일)
6. ads.txt 생성
