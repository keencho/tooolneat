# Toolneat 운영 가이드

내가 참고할 문서. 배포, AdSense, 프로젝트 세팅 방법 등.

---

## 1. 프로젝트 세팅

### 최초 설치
```bash
cd toolneat
npm install
```

### 개발 모드
```bash
npm run dev
```
- Tailwind CSS 실시간 빌드 + 로컬 서버 실행
- http://localhost:3000 에서 확인

### 프로덕션 빌드
```bash
npm run build
```
- `assets/css/output.css` 파일 생성 (minified)

---

## 2. 배포 (Cloudflare Pages)

### Step 1: GitHub에 Push
```bash
git add .
git commit -m "메시지"
git push origin main
```

### Step 2: Cloudflare Pages 설정 (최초 1회)

1. https://dash.cloudflare.com 로그인
2. 좌측 메뉴 → **Pages** 클릭
3. **Create a project** → **Connect to Git**
4. GitHub 계정 연결 → `toolneat` 저장소 선택

### Step 3: 빌드 설정
```
Framework preset: None
Build command: npm run build
Build output directory: /
Root directory: /
```

환경변수 추가:
```
NODE_VERSION: 20
```

### Step 4: 배포
- **Save and Deploy** 클릭
- 자동으로 `https://toolneat.pages.dev` 생성

### Step 5: 커스텀 도메인 연결

1. Pages 프로젝트 → **Custom domains** 탭
2. **Set up a custom domain** 클릭
3. `toolneat.com` 입력
4. DNS 자동 설정됨 (Cloudflare DNS 사용 시)

### 이후 배포
- `main` 브랜치에 push하면 자동 배포
- PR 생성 시 Preview URL 자동 생성

---

## 3. AdSense 설정 (초보자용)

### 현재 상태
- 광고 컨테이너(ad-container) 이미 모든 페이지에 있음
- 승인 전에는 빈 div라서 안 보임
- 승인 후 코드만 넣으면 자동으로 광고 표시

### Step 1: AdSense 신청

1. https://www.google.com/adsense 접속
2. Google 계정으로 로그인
3. **시작하기** 클릭
4. 사이트 URL 입력: `https://toolneat.com`
5. 국가: 대한민국

### Step 2: 인증 코드 받기

신청하면 이런 코드를 줌:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossorigin="anonymous"></script>
```

### Step 3: 인증 코드 삽입

모든 HTML 파일의 `<head>`에 추가해야 함.

### Step 4: 심사 대기
- 보통 1~14일 소요
- 이메일로 승인/거절 통보
- 거절되면 사유 확인 후 수정해서 재신청

### Step 5: 승인 후 - 광고 단위 생성

1. AdSense 대시보드 → **광고** → **광고 단위 기준**
2. **새 광고 단위 만들기** → **디스플레이 광고** 선택
3. 이름 입력: `toolneat-top` (상단용)
4. 광고 크기: **반응형** 선택
5. **만들기** 클릭 → 코드 복사

### Step 6: 광고 코드 삽입

현재 빈 ad-container에 코드 삽입:
```html
<div class="ad-container mb-6">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXX"
       data-ad-slot="1234567890"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

### Step 7: 자동 광고 설정 (선택)

| 옵션 | 추천 |
|------|------|
| 페이지 내 광고 | ⚠️ 주의 |
| 앵커 광고 | ❌ OFF |
| 전면 광고 | ❌ OFF |
| 측면 레일 | ✅ OK |

**초기에는 자동 광고 OFF 권장**

---

## 4. 수익 확인

- https://www.google.com/adsense → 홈
- 매월 21~26일 지급
- **최소 $100** 이상이어야 지급
- 한국 은행 계좌로 받기 가능

---

## 5. Google Search Console 등록

1. https://search.google.com/search-console 접속
2. **속성 추가** → `https://toolneat.com`
3. 소유권 확인 (Cloudflare DNS 자동)
4. Sitemap 제출: `sitemap.xml`

---

## 6. 체크리스트

### 배포 전
- [ ] `npm run build` 실행
- [ ] 로컬 테스트
- [ ] 반응형/다크모드 확인
- [ ] 한/영 전환 확인

### 배포 후
- [ ] HTTPS 작동 확인
- [ ] Search Console 등록
- [ ] AdSense 신청

### AdSense 승인 후
- [ ] 인증 스크립트 추가
- [ ] 광고 단위 생성
- [ ] ad-container에 코드 삽입

---

## 7. 문제 해결

### 빌드 실패
- NODE_VERSION 환경변수 확인 (20)

### CSS 적용 안됨
- `npm run build` 후 커밋 확인

### 404 에러
- 파일 경로 대소문자 확인

### 광고 안 나옴
- 광고 차단 확장 프로그램 비활성화
- 승인 후 24시간 대기
