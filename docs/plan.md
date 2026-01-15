# Toolneat 도구 확장 계획

## 현재 상태 (2026-01-15)

### 완료된 작업
- ✅ **SEO 메타 설명 최적화** - 모든 페이지 적용 완료
- ✅ **바코드 생성기 확장** - 18종 바코드 포맷 지원
- ✅ **이미지 도구 추가** - image-resizer, image-converter 영문 버전 추가
- ✅ **파비콘 설정** - 모든 페이지에 절대경로로 적용
- ✅ **Sitemap 개선** - trailing slash 제거
- ✅ **PDF Tools 카테고리 신설** - 4개 도구 (merge, split, pdf-to-image, image-to-pdf)
- ✅ **AI 배경 제거** - @imgly/background-removal 라이브러리 사용
- ✅ **Video to GIF** - gif.js 라이브러리 사용
- ✅ **Screen Recorder** - MediaRecorder API (WEBM 전용)
- ✅ **OCR** - Tesseract.js (한/영/일/중 지원)
- ✅ **FAQ 섹션** - 모든 도구 페이지에 FAQ 필수 포함
- ✅ **빌드 스크립트 자동화** - sitemap, inject-components 자동 실행

### 현재 도구 수
- **Dev Tools**: 21개
- **Life Tools**: 33개
- **PDF Tools**: 4개
- **총 합계**: 58개 도구 (한/영 각각 = 116페이지)

---

## 🚀 Phase 2 작업 (2026-01-15)

### 신규 추가 도구
| 도구 | 카테고리 | 상태 | 비고 |
|------|----------|------|------|
| PDF 압축 | PDF | ✅ | pdf-lib 이미지 압축 |
| QR코드 스캐너 | Life | ✅ | html5-qrcode |
| 이미지 워터마크 | Life | ✅ | Canvas API |
| 그라데이션 생성기 | Dev | ✅ | CSS gradient |
| 색상 팔레트 추출 | Life | ✅ | Color Thief |

### 업데이트 후 도구 수
- **Dev Tools**: 22개 (+1)
- **Life Tools**: 36개 (+3)
- **PDF Tools**: 5개 (+1)
- **총 합계**: 63개 도구 (한/영 각각 = 126페이지)

---

## 트래픽 분석 요약

| 서비스 | 월 방문자 | 핵심 기능 |
|--------|----------|----------|
| iLovePDF | **2.2억** | PDF 변환/편집 |
| Remove.bg | **7,500만** | 이미지 배경 제거 |
| TinyPNG | **440만** | 이미지 압축 |
| SmallSEOTools | 수천만 | SEO/텍스트 도구 |

---

## 🔥 Priority 1: PDF 도구 (트래픽 킬러)

### 완료
- [x] **PDF 병합** (Merge PDF) ✅
- [x] **PDF 분할** (Split PDF) ✅
- [x] **PDF → 이미지** (PDF to JPG/PNG) ✅
- [x] **이미지 → PDF** (JPG/PNG to PDF) ✅
- [x] **PDF 압축** (Compress PDF) ✅

### 추가 예정
- [ ] PDF 페이지 회전
- [ ] PDF 워터마크 추가
- [ ] PDF 암호 설정/해제
- [ ] PDF → Word (복잡, 후순위)

---

## 🖼️ Priority 2: 이미지 도구 강화

### 완료
- [x] **배경 제거** (AI) ✅
- [x] **이미지 압축** ✅
- [x] **이미지 리사이즈** ✅
- [x] **이미지 변환** ✅
- [x] **이미지 워터마크** ✅

### 추가 예정
- [ ] 이미지 자르기 (Crop)
- [ ] 이미지 회전/뒤집기
- [ ] AI 이미지 업스케일 (Real-ESRGAN)
- [ ] EXIF 메타데이터 제거

---

## 🎬 Priority 3: 미디어 도구

### 완료
- [x] **비디오 → GIF** ✅
- [x] **화면 녹화** ✅
- [x] **OCR** ✅

### 추가 예정
- [ ] 오디오 형식 변환 (MP3↔WAV)
- [ ] 비디오 압축
- [ ] 오디오 자르기

---

## 💻 Priority 4: 개발 도구 강화

### 완료
- [x] **그라데이션 생성기** ✅
- [x] 색상 변환기 ✅

### 추가 예정
- [ ] 코드 → 이미지 (Carbon 클론)
- [ ] API 테스터
- [ ] XML ↔ JSON 변환

---

## 🔍 Priority 5: 유틸리티

### 완료
- [x] **QR코드 생성기** ✅
- [x] **QR코드 스캐너** ✅
- [x] **색상 팔레트 추출** ✅

### 추가 예정
- [ ] 포모도로 타이머
- [ ] 밈 생성기
- [ ] UTM 링크 생성기

---

## 기술 스택

### 브라우저 기반 처리 (서버 비용 0)
- **PDF**: pdf-lib, PDF.js
- **이미지**: Canvas API, Color Thief
- **비디오**: MediaRecorder API
- **AI**: @imgly/background-removal, Tesseract.js
- **QR**: html5-qrcode, qrcode.js

---

*최종 업데이트: 2026-01-15*
