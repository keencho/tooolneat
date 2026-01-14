# SEO Meta Description 개선 계획

## 개요

### 목표
- 모든 페이지의 `<meta name="description">` 개선
- 롱테일 키워드를 자연스럽게 포함
- 한글/영어 버전 모두 적용
- Google 검색결과 CTR(클릭률) 향상

### SEO Description 작성 원칙
1. **길이**: 한글 80-150자, 영어 150-160자 (구글 검색결과 표시 최적)
2. **핵심 키워드**: 문장 앞쪽에 배치
3. **행동 유도**: "무료", "온라인", "바로 사용" 등 포함
4. **자연스러운 문장**: 키워드 나열이 아닌 읽기 좋은 문장
5. **고유성**: 각 페이지별 차별화된 내용

### 구현 방법
`scripts/update-meta-descriptions.js` 스크립트로 일괄 적용
- 각 페이지의 `<meta name="description">` 태그 교체
- `data-i18n-desc` 속성도 함께 업데이트

---

## Dev Tools Meta Descriptions

### Base64 인코더/디코더
```
KO: Base64 인코딩 및 디코딩을 온라인에서 무료로 변환하세요. 텍스트를 Base64 문자열로 변환하거나, Base64로 인코딩된 데이터를 원본 텍스트로 복원할 수 있습니다. URL-safe 옵션을 지원하며, 이미지 Data URI 생성, API 토큰 디코딩, 파일 데이터 처리 등 개발 작업에 필수적인 도구입니다. 회원가입 없이 브라우저에서 바로 사용하세요.

EN: Free online Base64 encoder and decoder tool. Convert text to Base64 encoded strings or decode Base64 data back to original text instantly. Supports URL-safe encoding option, perfect for creating image Data URIs, decoding API tokens, and handling file data in web development. No signup required - works directly in your browser with complete privacy.
```

### URL 인코더/디코더
```
KO: URL 인코딩 및 디코딩 온라인 도구입니다. 한글, 특수문자, 공백 등을 URL에서 안전하게 사용할 수 있는 형식으로 변환합니다. encodeURIComponent(쿼리 파라미터용)와 encodeURI(전체 URL용) 방식을 모두 지원합니다. API 호출, 쿼리스트링 생성, 링크 공유 시 필수적인 개발자 도구입니다. 무료로 바로 사용하세요.

EN: Free online URL encoder and decoder tool. Convert special characters, unicode, and spaces to URL-safe percent-encoded format. Supports both encodeURIComponent (for query parameters) and encodeURI (for full URLs) methods. Essential for API calls, query string generation, and link sharing. Works instantly in your browser with no installation needed.
```

### HTML Entity 인코더
```
KO: HTML 특수문자를 엔티티 코드로 변환하는 온라인 도구입니다. <, >, &, ", ' 등의 문자를 &lt; &gt; &amp; 형태로 인코딩하여 웹페이지에 안전하게 표시할 수 있습니다. XSS(크로스 사이트 스크립팅) 공격을 방지하고 HTML 문서의 문법 오류를 예방합니다. 웹 개발자를 위한 필수 보안 도구입니다.

EN: Free online HTML entity encoder and decoder. Convert special characters like <, >, &, ", ' to their HTML entity equivalents (&lt; &gt; &amp;) for safe display on web pages. Prevents XSS (Cross-Site Scripting) attacks and HTML syntax errors. Essential security tool for web developers working with user-generated content.
```

### UUID 생성기
```
KO: UUID(범용 고유 식별자)를 온라인에서 무료로 생성하세요. UUID v4(완전 랜덤), v1(MAC 주소+타임스탬프), v7(시간순 정렬 가능) 버전을 모두 지원합니다. 대량 생성 기능으로 한번에 최대 100개까지 생성 가능하며, 대소문자 변환과 하이픈 포함/제외 옵션을 제공합니다. 데이터베이스 기본키, API 토큰, 세션 ID 생성에 활용하세요.

EN: Generate UUIDs (Universally Unique Identifiers) online for free. Supports UUID v4 (random), v1 (timestamp + MAC), and v7 (time-sortable) versions. Bulk generate up to 100 UUIDs at once with uppercase/lowercase and hyphen formatting options. Perfect for database primary keys, API tokens, session IDs, and distributed system identifiers.
```

### Hash 생성기
```
KO: MD5, SHA-1, SHA-256, SHA-384, SHA-512 해시값을 온라인에서 무료로 생성하세요. 텍스트 입력 또는 파일 업로드로 해시를 계산할 수 있습니다. 파일 무결성 검증, 비밀번호 해싱, 디지털 서명, 데이터 중복 검사 등에 활용됩니다. 모든 처리는 브라우저에서 이루어져 데이터가 서버로 전송되지 않습니다.

EN: Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hash values online for free. Calculate hashes from text input or file upload. Use for file integrity verification, password hashing, digital signatures, and data deduplication. All processing happens in your browser - your data never leaves your device.
```

### Lorem Ipsum 생성기
```
KO: Lorem Ipsum 더미 텍스트를 온라인에서 무료로 생성하세요. 단락, 문장, 단어 단위로 원하는 만큼 생성할 수 있습니다. 웹 디자인 목업, 출판물 레이아웃 테스트, 타이포그래피 미리보기, 프레젠테이션 샘플 텍스트에 활용됩니다. HTML <p> 태그 형식 출력을 지원하여 바로 웹페이지에 붙여넣기할 수 있습니다.

EN: Generate Lorem Ipsum placeholder text online for free. Create paragraphs, sentences, or words as needed for web design mockups, publication layouts, typography previews, and presentation samples. Supports HTML paragraph tag output for easy copy-paste into your web projects. Classic Latin placeholder text trusted by designers worldwide.
```

### JWT 생성기
```
KO: JWT(JSON Web Token)를 온라인에서 무료로 생성하세요. HMAC 알고리즘(HS256, HS384, HS512)을 지원하며, Header와 Payload를 직접 설정하고 Secret Key로 서명할 수 있습니다. 만료시간(exp), 발급시간(iat), 발급자(iss) 등 표준 클레임을 쉽게 추가하고 커스텀 클레임도 자유롭게 설정할 수 있습니다. API 인증 개발에 필수 도구입니다.

EN: Generate JWT (JSON Web Tokens) online for free. Supports HMAC algorithms (HS256, HS384, HS512) with custom Header and Payload configuration. Easily add standard claims like expiration (exp), issued at (iat), issuer (iss), and custom claims. Sign tokens with your secret key for API authentication development. Essential tool for building secure web applications.
```

### JWT 디코더
```
KO: JWT(JSON Web Token)를 온라인에서 무료로 디코딩하고 분석하세요. 토큰의 Header, Payload, Signature 세 부분을 분리하여 보여주고, 만료시간, 발급시간, 권한 등 클레임 정보를 읽기 쉽게 표시합니다. Secret Key를 입력하여 서명 유효성을 검증할 수 있습니다. API 디버깅과 보안 감사에 필수적인 개발자 도구입니다.

EN: Decode and analyze JWT (JSON Web Tokens) online for free. View Header, Payload, and Signature components separately with human-readable claim information including expiration, issued time, and permissions. Verify signature validity with your secret key. Essential developer tool for API debugging, security audits, and troubleshooting authentication issues.
```

### 비밀번호 생성기
```
KO: 안전한 랜덤 비밀번호를 온라인에서 무료로 생성하세요. 길이(8-128자), 대문자, 소문자, 숫자, 특수문자 포함 여부를 자유롭게 설정할 수 있습니다. 비밀번호 강도를 실시간으로 표시하고, 여러 개를 한번에 대량 생성할 수 있습니다. 암호학적으로 안전한 난수 생성기를 사용하며 모든 처리는 브라우저에서 이루어집니다.

EN: Generate secure random passwords online for free. Customize length (8-128 characters), uppercase, lowercase, numbers, and special characters. Real-time password strength indicator with bulk generation support. Uses cryptographically secure random number generator. All processing happens locally in your browser - passwords are never transmitted or stored.
```

### Cron 표현식 생성기
```
KO: Cron 표현식을 쉽게 생성하고 해석하는 온라인 도구입니다. 분, 시, 일, 월, 요일 필드를 GUI로 직관적으로 설정하고, 생성된 표현식의 다음 실행 시간을 미리 확인할 수 있습니다. Linux crontab, AWS CloudWatch Events, Kubernetes CronJob, GitHub Actions, Jenkins 등에서 사용되는 스케줄 표현식을 쉽게 만들 수 있습니다.

EN: Create and interpret Cron expressions easily with our online tool. Set minute, hour, day, month, and weekday fields intuitively through GUI and preview upcoming execution times. Generate schedule expressions for Linux crontab, AWS CloudWatch Events, Kubernetes CronJob, GitHub Actions, Jenkins, and other scheduling systems. No more Cron syntax confusion.
```

### JSON Formatter
```
KO: JSON 데이터를 보기 좋게 포맷팅하고 유효성을 검사하는 온라인 도구입니다. 자동 들여쓰기, 키 정렬, 접기/펼치기 기능과 문법 하이라이팅으로 복잡한 JSON 구조를 쉽게 파악할 수 있습니다. 압축(Minify) 기능으로 파일 크기를 줄일 수도 있습니다. API 응답 분석, 설정 파일 편집, 데이터 검증에 필수적인 개발자 도구입니다.

EN: Format and validate JSON data online with our free tool. Features auto-indentation, key sorting, collapse/expand functionality, and syntax highlighting for easy structure visualization. Minify JSON to reduce file size. Essential for API response analysis, config file editing, and data validation. Supports large JSON files with real-time error detection.
```

### Color Converter
```
KO: HEX, RGB, HSL, RGBA, HSLA, HEX8 등 다양한 색상 형식을 상호 변환하는 온라인 도구입니다. 컬러 피커로 색상을 직접 선택하거나 색상 코드를 입력하여 모든 형식으로 변환할 수 있습니다. 보색, 밝게/어둡게 조절된 관련 색상도 자동으로 제안합니다. 웹 디자인, CSS 스타일링, 그래픽 작업에 필수적인 디자이너 도구입니다.

EN: Convert between HEX, RGB, HSL, RGBA, HSLA, and HEX8 color formats online. Pick colors visually or enter color codes to convert to all formats instantly. Get automatic suggestions for complementary, lighter, and darker variations. Essential tool for web design, CSS styling, and graphic work. Copy any format with one click.
```

### Unix Timestamp 변환기
```
KO: Unix Timestamp(Epoch Time)와 날짜/시간을 상호 변환하는 온라인 도구입니다. 초 단위와 밀리초(JavaScript) 단위를 모두 지원하며, 현재 시간의 타임스탬프를 실시간으로 확인할 수 있습니다. 타임존 변환, 상대 시간 표시 기능도 제공합니다. 로그 분석, API 개발, 데이터베이스 작업에 필수적인 개발자 도구입니다.

EN: Convert between Unix Timestamp (Epoch Time) and human-readable dates online. Supports both seconds and milliseconds (JavaScript) formats. View current timestamp in real-time with timezone conversion and relative time display. Essential for log analysis, API development, and database work. Instantly decode timestamps from any system.
```

### YAML ↔ JSON 변환기
```
KO: YAML과 JSON 형식을 상호 변환하는 온라인 도구입니다. Kubernetes 설정 파일, Docker Compose, Ansible Playbook, GitHub Actions 워크플로우, CI/CD 파이프라인 등 DevOps 작업에서 자주 사용되는 포맷을 쉽게 변환할 수 있습니다. 문법 오류 감지 기능으로 유효한 YAML/JSON인지 확인할 수 있습니다.

EN: Convert between YAML and JSON formats online for free. Perfect for DevOps tasks with Kubernetes configs, Docker Compose files, Ansible Playbooks, GitHub Actions workflows, and CI/CD pipelines. Syntax error detection helps validate your YAML/JSON. Switch between formats instantly for different tools and platforms.
```

### Markdown Preview
```
KO: Markdown 문법을 실시간으로 미리보기하는 온라인 에디터입니다. 제목, 목록, 코드 블록, 테이블, 이미지, 링크 등 GitHub Flavored Markdown(GFM)을 완벽 지원합니다. README.md 작성, 기술 문서 작성, 블로그 포스팅, 노션 대체용으로 활용하세요. 작성한 내용을 HTML로 내보내기할 수 있습니다.

EN: Preview Markdown syntax in real-time with our online editor. Full support for GitHub Flavored Markdown (GFM) including headings, lists, code blocks, tables, images, and links. Perfect for writing README files, technical documentation, blog posts, and notes. Export your content as HTML. Split-view editing for instant feedback.
```

### Case Converter
```
KO: 텍스트 대소문자를 다양한 형식으로 변환하는 온라인 도구입니다. UPPERCASE(대문자), lowercase(소문자), Title Case(제목), Sentence case(문장), camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE 등을 지원합니다. 프로그래밍 변수명 변환, 제목 스타일 통일, 텍스트 정규화에 유용합니다.

EN: Convert text between different case formats online. Supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE and more. Perfect for programming variable naming, title formatting, and text normalization. Convert any text instantly with one click.
```

### SQL Formatter
```
KO: SQL 쿼리를 보기 좋게 포맷팅하는 온라인 도구입니다. SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER 등 모든 SQL 문을 지원하며, 자동 들여쓰기와 키워드 대문자 변환으로 가독성을 높입니다. 복잡한 JOIN, 서브쿼리, CTE를 분석하기 쉽게 정리합니다. MySQL, PostgreSQL, SQL Server, Oracle 등 모든 SQL 방언에서 사용 가능합니다.

EN: Format SQL queries for better readability online. Supports all SQL statements including SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER with auto-indentation and keyword uppercasing. Makes complex JOINs, subqueries, and CTEs easy to analyze. Works with MySQL, PostgreSQL, SQL Server, Oracle, and all SQL dialects.
```

### CSS Minifier/Beautifier
```
KO: CSS 코드를 압축(Minify)하거나 보기 좋게 정리(Beautify)하는 온라인 도구입니다. 압축 기능으로 불필요한 공백과 줄바꿈을 제거하여 파일 크기를 줄이고 웹사이트 로딩 속도를 개선합니다. 정리 기능으로 압축된 CSS를 들여쓰기하여 분석하기 쉽게 펼칩니다. 프론트엔드 개발 필수 도구입니다.

EN: Minify or beautify CSS code online for free. Minification removes unnecessary whitespace and line breaks to reduce file size and improve website loading speed. Beautification expands compressed CSS with proper indentation for easy analysis. Essential frontend development tool for optimizing stylesheets.
```

### Line Ending 변환기
```
KO: 텍스트 파일의 줄바꿈 문자를 변환하는 온라인 도구입니다. CRLF(Windows, \r\n), LF(Unix/Linux/Mac, \n), CR(구형 Mac, \r) 형식 간 변환을 지원합니다. 운영체제 간 파일 호환성 문제를 해결하고, Git 줄바꿈 설정 확인, 코드 리뷰 시 diff 오류 방지에 활용됩니다.

EN: Convert text file line endings online. Transform between CRLF (Windows, \\r\\n), LF (Unix/Linux/Mac, \\n), and CR (old Mac, \\r) formats. Resolve cross-platform file compatibility issues, verify Git line ending settings, and prevent diff errors during code review. Essential for cross-platform development teams.
```

### Regex Tester
```
KO: 정규표현식(Regular Expression)을 실시간으로 테스트하는 온라인 도구입니다. 패턴 매칭 결과를 하이라이팅으로 표시하고, 캡처 그룹과 매치 인덱스를 상세히 보여줍니다. 문자열 치환(Replace) 기능도 제공합니다. 이메일, 전화번호, URL, 한글, 주민등록번호 등 자주 사용하는 정규식 패턴 예제가 포함되어 있습니다.

EN: Test regular expressions (regex) in real-time online. See pattern matches highlighted with detailed capture groups and match indices. Includes string replacement functionality. Comes with common regex pattern examples for email, phone numbers, URLs, IP addresses, dates, and more. Supports all JavaScript regex flags (g, i, m, s, u).
```

### Diff Checker
```
KO: 두 텍스트의 차이점을 비교하는 온라인 도구입니다. 추가된 줄, 삭제된 줄, 변경된 줄을 색상으로 구분하여 표시합니다. 코드 리뷰, 문서 버전 비교, 설정 파일 변경사항 추적, 번역 대조에 활용됩니다. 라인 단위 또는 단어 단위로 상세 비교가 가능합니다.

EN: Compare two texts and find differences online. Highlights added, deleted, and modified lines with color coding. Perfect for code review, document version comparison, config file change tracking, and translation verification. Supports line-by-line or word-by-word detailed comparison. No file size limits.
```

---

## Life Tools Meta Descriptions

### 연봉 계산기 (한국)
```
KO: 연봉 실수령액을 계산하는 온라인 도구입니다. 연봉을 입력하면 국민연금, 건강보험, 장기요양보험, 고용보험 4대 보험료와 소득세, 지방소득세를 자동으로 계산하여 월 실수령액과 연간 실수령액을 알려드립니다. 부양가족 수, 비과세 수당, 중소기업 청년 소득세 감면 옵션도 지원합니다. 2025년 최신 보험요율이 적용됩니다.

EN: Calculate Korean salary after tax deductions online. Enter your annual salary to automatically calculate National Pension, Health Insurance, Long-term Care, Employment Insurance premiums plus Income Tax and Local Income Tax. Shows monthly and yearly take-home pay with options for dependents, non-taxable allowances, and SME youth tax relief. Updated with 2025 insurance rates.
```

### D-day 계산기
```
KO: D-day를 계산하는 온라인 도구입니다. 목표 날짜를 선택하면 오늘부터 며칠 남았는지 자동으로 계산합니다. 수능, 자격증 시험, 결혼기념일, 생일, 여행, 프로젝트 마감일, 출산 예정일 등 중요한 날까지의 카운트다운을 확인하세요. 두 날짜 사이의 일수 차이 계산 기능도 제공합니다.

EN: Calculate D-day countdown online. Select your target date to instantly see how many days remain from today. Perfect for exam dates, anniversaries, birthdays, travel plans, project deadlines, and due dates. Also calculate the exact number of days between any two dates. Quick select buttons for common dates like New Year and Christmas.
```

### BMI 계산기
```
KO: BMI(체질량지수)를 계산하여 비만도를 확인하는 온라인 도구입니다. 키(cm)와 몸무게(kg)를 입력하면 BMI 수치와 저체중, 정상, 과체중, 비만 판정 결과를 알려드립니다. 내 키에 맞는 정상 체중 범위도 함께 안내합니다. 미국식 단위(ft, lb)도 지원하여 해외에서도 사용 가능합니다.

EN: Calculate your BMI (Body Mass Index) to check obesity level online. Enter height and weight to get your BMI value with classification: underweight, normal, overweight, or obese. Shows healthy weight range for your height. Supports both metric (cm/kg) and imperial (ft-in/lb) units. Includes BMI interpretation guidelines.
```

### 대출 이자 계산기
```
KO: 대출 원리금 상환액을 계산하는 온라인 도구입니다. 대출 원금, 연 이자율, 상환 기간을 입력하면 월 상환액, 총 상환액, 총 이자를 계산합니다. 원리금균등상환(매월 동일 금액), 원금균등상환(원금 동일, 이자 감소), 만기일시상환(이자만 납부) 세 가지 방식을 지원합니다. 상환 스케줄을 CSV로 내보낼 수 있습니다.

EN: Calculate loan repayment amounts online. Enter principal, annual interest rate, and loan term to see monthly payment, total payment, and total interest. Supports three repayment methods: equal payment (fixed monthly), equal principal (decreasing payments), and bullet payment (interest only). Export amortization schedule as CSV.
```

### 나이 계산기
```
KO: 생년월일로 나이를 계산하는 온라인 도구입니다. 생년월일을 입력하면 만 나이(국제 표준)와 한국 나이(연 나이)를 모두 알려드립니다. 다음 생일까지 남은 일수, 지금까지 살아온 총 일수, 태어난 요일도 확인할 수 있습니다. 2023년부터 대한민국도 만 나이로 통일되었습니다.

EN: Calculate age from birthdate online. Enter your birth date to see both international age (completed years) and Korean age. Also shows days until next birthday, total days lived, and the day of the week you were born. Perfect for age verification, milestone celebrations, and birthday countdowns.
```

### 퍼센트 계산기
```
KO: 퍼센트(백분율) 계산을 쉽게 하는 온라인 도구입니다. "100의 25%는?", "30은 120의 몇 %?", "80에서 100으로 증가율은?" 등 다양한 퍼센트 계산 공식을 지원합니다. 할인율 계산, 성적 백분율 계산, 변화율 계산, 팁 계산 등 일상에서 자주 필요한 백분율 연산을 빠르게 해결하세요.

EN: Calculate percentages easily online. Supports various percentage formulas: "What is 25% of 100?", "30 is what % of 120?", "What is the % change from 80 to 100?" Perfect for discount calculations, grade percentages, growth rates, tip calculations, and everyday percentage math. Get instant results with clear explanations.
```

### 복리 계산기
```
KO: 복리 이자를 계산하는 온라인 도구입니다. 원금, 연 이자율, 기간, 복리 주기(월복리/분기복리/연복리)를 입력하면 최종 금액과 이자 수익을 계산합니다. 적금, 예금, 펀드, 주식 투자 수익 시뮬레이션에 활용하세요. 복리의 마법으로 장기 투자 효과를 미리 확인할 수 있습니다.

EN: Calculate compound interest online. Enter principal, annual interest rate, time period, and compounding frequency (monthly/quarterly/annually) to see final amount and interest earned. Perfect for savings, deposits, funds, and investment simulations. Visualize the power of compound interest for long-term wealth building.
```

### 팁 계산기
```
KO: 팁과 더치페이 금액을 계산하는 온라인 도구입니다. 음식 값에 원하는 팁 비율(10%, 15%, 20% 등)을 적용하고, 인원수로 나누어 1인당 부담 금액을 계산합니다. 해외여행 중 레스토랑, 카페, 택시, 호텔에서 팁을 계산할 때 유용합니다. 팁 포함 총액과 개인별 금액을 한눈에 확인하세요.

EN: Calculate tips and split bills online. Apply your preferred tip percentage (10%, 15%, 20%, etc.) to the bill amount and divide by number of people. Perfect for restaurants, cafes, taxis, and hotels during travel. See total with tip and per-person amounts instantly. Supports custom tip percentages and rounding options.
```

### 글자수 세기
```
KO: 글자수, 공백 제외 글자수, 단어수, 바이트수를 실시간으로 세는 온라인 도구입니다. 블로그 포스팅, 인스타그램·트위터 글자 제한 확인, 자기소개서·이력서 글자수 맞추기, 논문·리포트 분량 체크에 필수적입니다. 붙여넣기만 하면 바로 모든 통계를 확인할 수 있습니다.

EN: Count characters, words, and bytes in real-time online. Essential for blog posts, social media character limits (Twitter, Instagram), resume/cover letter requirements, and academic paper lengths. Just paste your text to instantly see character count (with/without spaces), word count, byte count, line count, and paragraph count.
```

### 단위 변환기
```
KO: 다양한 단위를 변환하는 온라인 도구입니다. 면적(평↔제곱미터), 길이(인치↔센티미터, 피트↔미터), 무게(파운드↔킬로그램, 온스↔그램), 온도(섭씨↔화씨), 데이터 용량(MB↔GB↔TB)을 지원합니다. 부동산 평수 계산, 해외직구 사이즈 확인, 요리 레시피 단위 변환에 유용합니다.

EN: Convert various units online. Supports area (pyeong↔square meters), length (inches↔cm, feet↔meters), weight (pounds↔kg, ounces↔grams), temperature (Celsius↔Fahrenheit), and data storage (MB↔GB↔TB). Perfect for real estate calculations, international shopping size conversions, and recipe measurements.
```

### QR코드 생성기
```
KO: QR코드를 무료로 생성하는 온라인 도구입니다. URL 링크, 텍스트 메시지, 전화번호, 이메일, Wi-Fi 접속 정보를 QR코드로 변환할 수 있습니다. 크기, 전경색, 배경색, 오류 복원 레벨(L/M/Q/H)을 자유롭게 설정하고 PNG 또는 SVG 형식으로 고화질 다운로드가 가능합니다. 명함, 포스터, 제품 포장에 활용하세요.

EN: Generate QR codes for free online. Convert URLs, text messages, phone numbers, emails, and Wi-Fi credentials into QR codes. Customize size, foreground/background colors, and error correction level (L/M/Q/H). Download as high-quality PNG or SVG. Perfect for business cards, posters, product packaging, and event promotions.
```

### 바코드 생성기
```
KO: 바코드를 무료로 생성하는 온라인 도구입니다. CODE128(범용), EAN-13/EAN-8(국제 상품 바코드), UPC-A/UPC-E(미국 상품 바코드), CODE39(영문숫자), ITF-14(물류 박스), Codabar(도서관, 혈액은행, 택배), Pharmacode(의약품), MSI(창고 재고관리) 등 18종 바코드 형식을 지원합니다. PNG/SVG 고화질 다운로드가 가능합니다.

EN: Generate barcodes for free online. Supports 18 barcode formats: CODE128 (universal), EAN-13/EAN-8 (international products), UPC-A/UPC-E (US products), CODE39 (alphanumeric), ITF-14 (logistics), Codabar (libraries, blood banks, shipping), Pharmacode (pharmaceuticals), MSI (inventory management) and more. Download as high-quality PNG or SVG.
```

### 파비콘 생성기
```
KO: 이미지를 웹사이트 파비콘으로 변환하는 온라인 도구입니다. JPG, PNG, SVG 이미지를 업로드하면 16x16, 32x32, 48x48, 64x64, 128x128, 256x256 등 다양한 크기의 파비콘을 한번에 생성합니다. ICO 파일과 PNG 파일로 다운로드할 수 있어 모든 브라우저와 기기에서 호환됩니다.

EN: Convert images to website favicons online. Upload JPG, PNG, or SVG images to generate favicons in multiple sizes: 16x16, 32x32, 48x48, 64x64, 128x128, 256x256 at once. Download as ICO file or individual PNGs for compatibility with all browsers and devices. Essential for website branding and bookmarks.
```

### 이미지 압축
```
KO: JPG, PNG, WebP 이미지 파일 크기를 줄이는 온라인 도구입니다. 품질 슬라이더로 압축률을 조절하여 웹사이트 로딩 속도를 개선하고 저장 공간을 절약하세요. 여러 이미지를 한번에 일괄 압축할 수 있습니다. 모든 처리는 브라우저에서 이루어져 이미지가 서버로 업로드되지 않아 프라이버시가 보호됩니다.

EN: Compress JPG, PNG, and WebP images online to reduce file size. Adjust compression quality with slider to improve website loading speed and save storage space. Batch compress multiple images at once. All processing happens in your browser - images are never uploaded to servers, ensuring complete privacy and security.
```

### 이미지 리사이즈
```
KO: 이미지 크기(해상도)를 변경하는 온라인 도구입니다. 픽셀 단위로 원하는 너비×높이를 직접 지정하거나, 퍼센트로 비율을 조절할 수 있습니다. 비율 유지 옵션으로 이미지가 찌그러지지 않게 리사이즈합니다. 인스타그램, 페이스북, 유튜브 썸네일 등 SNS 맞춤 프리셋도 제공합니다.

EN: Resize image dimensions online. Specify exact width×height in pixels or scale by percentage. Aspect ratio lock prevents image distortion. Includes presets for Instagram, Facebook, YouTube thumbnails and other social media platforms. Process images entirely in your browser with no server upload required.
```

### 이미지 형식 변환
```
KO: PNG, JPG, WebP, GIF, BMP, ICO 등 이미지 형식을 변환하는 온라인 도구입니다. 최대 20개 파일을 한번에 일괄 변환할 수 있으며, JPG/WebP는 품질 설정을 지원합니다. PNG 투명 배경 유지, WebP로 용량 절감 등 목적에 맞게 형식을 선택하세요. 브라우저에서 처리되어 서버 업로드가 없습니다.

EN: Convert between PNG, JPG, WebP, GIF, BMP, ICO image formats online. Batch convert up to 20 files at once with quality settings for JPG/WebP. Preserve PNG transparency or reduce file size with WebP. All processing happens locally in your browser - no server upload, complete privacy guaranteed.
```

### 진법 변환기
```
KO: 2진수, 8진수, 10진수, 16진수를 상호 변환하는 온라인 도구입니다. 숫자를 입력하면 모든 진법으로 실시간 변환 결과를 보여줍니다. 프로그래밍에서 비트 연산 이해, 메모리 주소 분석, 색상 코드(HEX) 계산, 네트워크 서브넷 계산 등에 활용됩니다. 컴퓨터 과학 학습에 필수 도구입니다.

EN: Convert between binary, octal, decimal, and hexadecimal numbers online. Enter a number to see real-time conversion results in all bases. Essential for programming bit operations, memory address analysis, color code (HEX) calculations, and network subnet calculations. Perfect for computer science students and developers.
```

### ASCII/유니코드 변환기
```
KO: 문자를 ASCII 코드, 유니코드 코드포인트로 변환하거나, 코드를 문자로 변환하는 온라인 도구입니다. 10진수, 16진수(0x), Unicode Escape(\\u), HTML Entity(&#;) 형식을 모두 지원합니다. 특수문자 입력, 이모지 코드 확인, 문자 인코딩 디버깅에 유용합니다.

EN: Convert characters to ASCII codes, Unicode code points, or codes back to characters online. Supports decimal, hexadecimal (0x), Unicode Escape (\\u), and HTML Entity (&#;) formats. Useful for special character input, emoji code lookup, and character encoding debugging. Includes ASCII table reference.
```

### 이모지 검색/복사
```
KO: 이모지를 검색하고 클릭 한번으로 복사하는 온라인 도구입니다. 😀 스마일, ❤️ 하트, 🐶 동물, 🍕 음식, ✈️ 여행, 🎮 게임 등 카테고리별로 탐색하거나 키워드로 검색하세요. 최근 사용한 이모지 기록이 저장되어 자주 쓰는 이모지를 빠르게 찾을 수 있습니다.

EN: Search and copy emojis with one click online. Browse by categories like 😀 smileys, ❤️ hearts, 🐶 animals, 🍕 food, ✈️ travel, 🎮 gaming, or search by keyword. Recently used emojis are saved for quick access to your favorites. Copy any emoji instantly to use in social media, documents, and messages.
```

### 데드픽셀 테스트
```
KO: 모니터의 불량 화소(데드픽셀, 핫픽셀, 스턱픽셀)를 찾는 온라인 도구입니다. 빨강, 초록, 파랑, 흰색, 검정색 단색 화면을 전체화면으로 표시하여 화소 불량을 쉽게 확인할 수 있습니다. 새 모니터 구매 시 품질 검사, 중고 모니터 구매 전 점검에 필수적입니다. ESC로 종료합니다.

EN: Find dead pixels, hot pixels, and stuck pixels on your monitor online. Display solid red, green, blue, white, and black screens in fullscreen to easily spot pixel defects. Essential for quality checking new monitors and inspecting used monitors before purchase. Press ESC to exit fullscreen mode.
```

### 픽셀 수리 도구
```
KO: 고착된 픽셀(Stuck Pixel)을 수리하는 온라인 도구입니다. 빠르게 깜빡이는 RGB 색상 박스를 드래그하여 불량 화소 위에 놓고 10-30분간 실행하면 픽셀이 복구될 수 있습니다. 데드픽셀(완전 죽은 픽셀)은 수리가 어렵지만, 스턱픽셀(특정 색에 고착된 픽셀)은 높은 확률로 복구됩니다.

EN: Repair stuck pixels on your monitor online. Drag the rapidly flashing RGB color box over the stuck pixel and run for 10-30 minutes for potential recovery. While dead pixels (completely black) are harder to fix, stuck pixels (fixed on one color) have a high recovery rate with this method. Safe for LCD and OLED displays.
```

### 번인 테스트
```
KO: OLED 디스플레이의 번인(Burn-in) 현상을 확인하는 온라인 도구입니다. 회색 단색 화면을 전체화면으로 표시했을 때 이전 이미지의 잔상(고스트 이미지)이 보이면 번인이 발생한 것입니다. 스마트폰, OLED TV, AMOLED 모니터 중고 구매 시 필수 점검 항목입니다.

EN: Check for burn-in on OLED displays online. Display a solid gray fullscreen - if you see ghost images of previous content, burn-in has occurred. Essential test when buying used smartphones, OLED TVs, and AMOLED monitors. Burn-in is permanent screen damage common in OLED devices with static content.
```

### 화면 색상 테스트
```
KO: 모니터의 색상 품질을 테스트하는 온라인 도구입니다. 색상 균일성(화면 전체가 균일한 색인지), 그라데이션 밴딩(색 전환 시 줄무늬), 색 정확도를 다양한 테스트 패턴으로 확인할 수 있습니다. 새 모니터 설정, 캘리브레이션 전 점검, 디자인/사진 작업용 모니터 선택에 활용하세요.

EN: Test monitor color quality online. Check color uniformity (even color across screen), gradient banding (striping in color transitions), and color accuracy with various test patterns. Perfect for new monitor setup, pre-calibration inspection, and selecting monitors for design/photography work.
```

### 로또 번호 생성기
```
KO: 로또 6/45 번호를 랜덤으로 생성하는 온라인 도구입니다. 1부터 45까지 숫자 중 중복 없이 6개를 무작위로 추첨합니다. 한번에 여러 게임(최대 10게임)을 생성할 수 있고, 특정 번호를 제외하는 옵션도 제공합니다. 공정한 난수 생성 알고리즘을 사용합니다.

EN: Generate random Korean Lotto 6/45 numbers online. Randomly draw 6 unique numbers from 1-45 without duplicates. Generate multiple games at once (up to 10) with option to exclude specific numbers. Uses a fair random number generation algorithm for unbiased results.
```

### 룰렛 돌리기
```
KO: 온라인 룰렛을 돌려 랜덤으로 선택하는 도구입니다. 점심 메뉴 정하기, 팀원 순서 정하기, 당첨자 추첨, 벌칙 정하기 등에 활용하세요. 항목을 자유롭게 추가/삭제할 수 있고, 각 항목의 당첨 확률을 조절할 수도 있습니다. 화려한 회전 애니메이션과 함께 결과를 확인하세요.

EN: Spin the wheel for random selection online. Perfect for choosing lunch menus, deciding team order, picking winners, or determining penalties. Add or remove items freely and adjust probability weights for each option. Watch the exciting spin animation and get your random result instantly.
```

### 주사위 굴리기
```
KO: 가상 주사위를 굴리는 온라인 도구입니다. D4(4면체), D6(6면체), D8(8면체), D10(10면체), D12(12면체), D20(20면체), D100(100면체) 주사위를 지원합니다. 여러 개를 동시에 굴리고 합계를 계산할 수 있습니다. TRPG(던전앤드래곤, 콜오브크툴루), 보드게임에 활용하세요.

EN: Roll virtual dice online. Supports D4, D6, D8, D10, D12, D20, and D100 (percentile) dice. Roll multiple dice simultaneously and calculate totals. Perfect for TRPG games like Dungeons & Dragons, Call of Cthulhu, Pathfinder, and board games. Features realistic rolling animation.
```

### 동전 던지기
```
KO: 동전을 던져 앞면(Head) 또는 뒷면(Tail)을 결정하는 온라인 도구입니다. 애니메이션으로 동전이 회전하는 효과를 보여주고, 앞면/뒷면 통계를 기록합니다. 간단한 양자택일 결정, 가위바위보 대신 사용, 확률 실험에 활용하세요. 공정한 50:50 확률을 보장합니다.

EN: Flip a coin online to decide heads or tails. Watch the coin spin with realistic animation and track your flip statistics. Perfect for simple binary decisions, settling disputes, or probability experiments. Guarantees fair 50:50 odds with a cryptographically secure random generator.
```

### 타자 연습
```
KO: 타자 속도와 정확도를 측정하는 온라인 도구입니다. 한글 또는 영문 텍스트를 보고 타이핑하면 분당 타수(WPM), 정확도(%), 오타 수를 실시간으로 측정합니다. 1분, 3분, 5분 테스트를 선택할 수 있으며 최고 기록이 저장됩니다. 꾸준한 연습으로 타이핑 실력을 향상시키세요.

EN: Test your typing speed and accuracy online. Type the displayed Korean or English text to measure WPM (words per minute), accuracy percentage, and error count in real-time. Choose 1, 3, or 5-minute tests with high score tracking. Improve your typing skills with regular practice. No signup required.
```

### 반응속도 테스트
```
KO: 반응속도를 측정하는 온라인 도구입니다. 화면이 초록색으로 바뀌면 최대한 빨리 클릭하세요. 밀리초(ms) 단위로 정확한 반응시간을 측정하고 평균 반응속도를 계산합니다. 게이머의 반사신경 테스트, 집중력 측정, 피로도 체크에 활용됩니다. 인간 평균 반응속도는 약 250ms입니다.

EN: Test your reaction time online. Click as fast as possible when the screen turns green. Measures your reaction time in milliseconds (ms) with average calculation. Perfect for gamers testing reflexes, measuring concentration, and checking fatigue levels. Average human reaction time is about 250ms. Challenge yourself to beat your personal best.
```

---

## 구현 스크립트

```javascript
// scripts/update-meta-descriptions.js
// 이 스크립트로 모든 페이지의 meta description을 일괄 업데이트
```

---

*작성일: 2025-01-12*
*적용 완료: 2025-01-14*
*총 100개 meta 태그 적용 (50개 도구 × 2언어)*

**✅ 모든 페이지에 적용 완료**
- 스크립트: `node scripts/update-meta-descriptions.js`
