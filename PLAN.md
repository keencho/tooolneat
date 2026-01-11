# Toolneat - 프로젝트 계획서

## 프로젝트 개요

**Toolneat** (toolneat.com) - 깔끔하고 가벼운 온라인 도구 모음 사이트. 애드센스 부수입을 위한 정적 웹사이트.

---

## 사용자 성향 / 개발 원칙

### UI/UX 선호
- Container max-width: **1200px**
- 다크모드 기본값: **라이트** (localStorage 저장)
- 생활 도구가 개발 도구보다 **먼저** 표시 (메인 페이지)
- 모든 설명 텍스트는 **마침표로 종료**
- JSON 포맷터 아이콘: 선 아이콘 대신 `{ }` 텍스트 사용
- **Input/Output 도구**: PC에서 좌우 배치 (`lg:grid-cols-2`), 모바일에서 상하 배치
- **옵션 바**: `shrink-0`, `whitespace-nowrap`으로 줄바꿈 방지
- **Info 섹션**: 모든 페이지에 정보 박스 (AdSense 요구사항) - `bg-blue-50 dark:bg-blue-900/20`

### 광고 정책
- **상단/하단 배너 광고만** (사이드 광고 없음)
- 모바일도 동일한 접근법 (반응형 배너)
- 전면 광고, 앵커 광고, 복사 시 광고 **절대 금지**

### 성능 보호
- 글자수 세기: 20만자 제한
- JSON 포맷터: 500KB 이상 렌더링 스킵
- Toast 알림으로 사용자 피드백

### 코드 스타일
- 버튼 `cursor: pointer` 기본 (CSS 전역 설정)
- 다크모드 버튼: `dark:bg-gray-700` (gray-800 아님)
- JSON 포맷터 폰트: **11px**
- JSON 토글 아이콘: **14px × 14px**

---

## 기술 스택

### 확정 사항
- **Frontend**: HTML/CSS/JS (프레임워크 없음)
- **CSS**: Tailwind CLI v4 (사용한 클래스만 빌드)
- **폰트**: Pretendard (로컬 호스팅)
- **아이콘**: SVG (인라인, 다크모드 대응)
- **서버**: 없음 (정적 사이트 - Cloudflare Pages)
- **다국어**: 하이브리드 i18n (SEO용 `/en/` 폴더 + JS i18n)
- **도메인**: toolneat.com

### 빌드 명령어
```bash
npm run dev    # Tailwind watch + serve (동시 실행)
npm run build  # 프로덕션 CSS 빌드 (minified)
```

### 핵심 기술 노트

#### Tailwind v4 다크모드
```css
/* input.css - 필수 */
@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));
```

#### i18n 언어 변경 처리
```javascript
// 모든 도구에 필수
document.addEventListener('i18nApplied', () => {
  updateLabels();
  if (hasData) calculate();
});
```
- `window.switchLanguage` 오버라이드 금지
- `i18nApplied` 커스텀 이벤트 필수 사용

#### 날짜 처리 (UTC 문제 방지)
```javascript
// 로컬 타임존 기반
function toLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
```
- `toISOString().split('T')[0]` 사용 금지 (UTC 변환)
- `new Date("YYYY-MM-DD")` 사용 금지 (UTC 파싱)

---

## 완료된 작업

### 도구 (22개 페이지, 한/영 버전)

#### 개발자 도구 (`/tools/dev/`)
| 도구 | 상태 | 비고 |
|------|------|------|
| JSON 포맷터 | ✅ 완료 | 11px font, Tab default, 500KB limit |
| Base64 인코딩/디코딩 | ✅ 완료 | URL-safe option |
| UUID 생성기 | ✅ 완료 | v1/v4, bulk, format options |
| URL 인코딩/디코딩 | ✅ 완료 | 3 methods |

#### 생활 도구 (`/tools/life/`)
| 도구 | 상태 | 비고 |
|------|------|------|
| 글자수 세기 | ✅ 완료 | 20만자 limit |
| 연봉 실수령액 계산기 | ✅ 완료 | 2025 rates |
| D-day 계산기 | ✅ 완료 | local timezone, i18n |
| 단위 변환기 | ✅ 완료 | 5 categories |

### SEO/다국어
- ✅ 영어 페이지 생성 (`/en/` 폴더 구조)
- ✅ hreflang 태그 설정 (ko, en, x-default)
- ✅ sitemap.xml (22개 URL + hreflang)
- ✅ robots.txt
- ✅ Open Graph 태그
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Favicon (SVG)

### 필수 페이지
- ✅ 개인정보처리방침 (`/pages/privacy/`)
- ✅ 이용약관 (`/pages/terms/`)
- ✅ 소개/연락처 (`/pages/about/`)

### 언어 전환 시스템
- ✅ URL 기반 언어 전환 (`/` ↔ `/en/`)
- ✅ i18n.js 수정 완료 (URL이 유일한 소스)
- ✅ Header 언어 버튼 동작 정상

---

## 현재 상태: 배포 및 AdSense 준비 완료

### 배포 준비
- [x] 모든 도구 완료
- [x] 영어 버전 완료
- [x] SEO 태그 완료
- [x] sitemap.xml / robots.txt
- [x] 필수 정책 페이지
- [x] 언어 전환 동작 확인

### AdSense 신청 전 체크리스트
- [x] 개인정보처리방침 페이지
- [x] 이용약관 페이지
- [x] 소개 페이지
- [x] 충분한 콘텐츠 (22개 페이지)
- [x] 광고 컨테이너 준비 (ad-container)
- [ ] 도메인 연결 (toolneat.com)
- [ ] HTTPS 활성화 (Cloudflare 자동)

### 배포 방법 (Cloudflare Pages)
1. GitHub 저장소에 push
2. Cloudflare Dashboard → Pages → Create project
3. Build command: `npm run build`
4. Build output directory: `/`
5. 커스텀 도메인 연결: toolneat.com

---

## 다음 단계: 추가 도구

### 생활 도구 - 모니터 테스트 (신규 중분류)

화면 테스트를 위한 온라인 도구 3종:

| 도구 | 설명 | 구현 방식 |
|------|------|-----------|
| 불량화소 테스트 (Dead Pixel Test) | 전체 화면을 단색으로 채워 불량화소 탐지 | 빨강/초록/파랑/흰색/검정 전체화면 전환 |
| 번인 테스트 (Screen Burn-In Test) | OLED 화면의 잔상/번인 확인 | 흰색/회색 패턴, 이동 픽셀 애니메이션 |
| 화면 색상 테스트 (Screen Color Test) | 색상 균일성 및 그라데이션 확인 | RGB 그라데이션, 컬러바, 체크보드 패턴 |

**참고 사이트:**
- black-screen.cc
- screentestpro.com
- deadpixeltest.org

### 개발자 도구 후보 (우선순위순)

| 도구 | 설명 | 난이도 | 수요 |
|------|------|--------|------|
| 정규표현식 테스터 | 정규식 작성 및 테스트, 매치 하이라이트 | 중 | 높음 |
| Cron 표현식 생성기 | GUI로 cron 표현식 생성/해석 | 중 | 높음 |
| 색상 변환기 | HEX/RGB/HSL 변환, 팔레트 생성 | 하 | 높음 |
| Hash 생성기 | MD5/SHA-1/SHA-256 등 해시 생성 | 하 | 중 |
| JWT 디코더 | JWT 토큰 파싱, 페이로드 확인 | 하 | 중 |

### 생활 도구 후보 (우선순위순)

| 도구 | 설명 | 난이도 | 수요 |
|------|------|--------|------|
| QR 코드 생성기 | URL/텍스트 → QR 코드 생성 | 중 | 높음 |
| 대출 이자 계산기 | 원리금균등/원금균등 상환 계산 | 중 | 높음 |
| BMI 계산기 | 체질량지수 계산, 건강 범위 표시 | 하 | 높음 |
| 퇴직금 계산기 | 근속기간 기반 퇴직금 계산 | 중 | 높음 |
| 나이 계산기 | 만 나이/연 나이 계산, 띠 표시 | 하 | 중 |

---

## 헤더 구조 개선안 (도구 증가 시)

현재: 대분류 > 소분류 (바로 연결)
개선: 대분류 > 중분류 > 소분류 (메가 메뉴)

```
개발 도구
├── 데이터 변환
│   ├── JSON 포맷터
│   ├── Base64
│   └── URL 인코더
├── 생성기
│   ├── UUID 생성기
│   ├── Hash 생성기
│   └── QR 코드
└── 테스터
    ├── 정규표현식
    └── Cron 표현식

생활 도구
├── 계산기
│   ├── 연봉 실수령액
│   ├── 대출 이자
│   └── BMI
├── 날짜/시간
│   ├── D-day 계산기
│   └── 나이 계산기
├── 변환기
│   ├── 단위 변환
│   └── 글자수 세기
└── 모니터 테스트
    ├── 불량화소 테스트
    ├── 번인 테스트
    └── 화면 색상 테스트
```

---

## AdSense 가이드 요약

### 광고 종류
- **디스플레이 광고** ✅ 현재 적용 - 상단/하단 배너
- 인피드 광고 - 콘텐츠 목록 사이 (성장 후 고려)
- ❌ 앵커 광고 - 사용자 경험 저하
- ❌ 전면 광고 - 정책 위반 가능

### 수익 예상 (도구 사이트 평균)
| 일 방문자 | 월 예상 수익 |
|----------|-------------|
| 100 | $1~5 |
| 500 | $5~20 |
| 1,000 | $15~50 |
| 5,000 | $50~200 |

### 승인 후 설정
1. AdSense 스크립트 모든 페이지 `<head>`에 추가
2. 광고 단위 생성 (toolneat-top, toolneat-bottom)
3. ad-container에 광고 코드 삽입
4. 자동 광고는 OFF 권장 (초기)

---

## 다국어 확장 계획

### 현재 지원
- 한국어 (기본) - `/`
- 영어 - `/en/`

### 추후 추가 예정
- 일본어 (`/ja/`)
- 중국어 간체 (`/zh-CN/`)
- 중국어 번체 (`/zh-TW/`)

---

## 참고 자료

- Pretendard: https://github.com/orioncactus/pretendard
- Tailwind CSS v4: https://tailwindcss.com/docs
- Heroicons (SVG): https://heroicons.com/
- Google AdSense: https://www.google.com/adsense
- QRCode.js: https://github.com/davidshimjs/qrcodejs

---

## 2025 한국 보험료율 (연봉 계산기)

- 국민연금: **4.5%** (기준소득월액 상한 637만원)
- 건강보험: **3.545%**
- 장기요양보험: **12.95%** (건강보험료의)
- 고용보험: **0.9%**
