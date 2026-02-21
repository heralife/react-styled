# 한패스(HanPass) 기술 스펙 문서

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 프로젝트명 | 한패스 (HanPass) |
| 버전 | 0.0.0 |
| 유형 | 핀테크 웹 애플리케이션 (SPA) |
| 설명 | 송금, 자산 관리, 투자, 대출 등을 제공하는 스마트 금융 플랫폼 |

---

## 2. 기술 스택

### 2.1 코어 프레임워크

| 기술 | 버전 | 역할 |
|---|---|---|
| **React** | 19.2.0 | UI 라이브러리 |
| **Vite** | 7.3.1 | 빌드 도구 / 개발 서버 |

### 2.2 라우팅

| 기술 | 버전 | 역할 |
|---|---|---|
| **React Router DOM** | 7.13.0 | 클라이언트 사이드 라우팅 (SPA 페이지 전환) |

### 2.3 스타일링

| 기술 | 버전 | 역할 |
|---|---|---|
| **styled-components** | 6.3.9 | CSS-in-JS 컴포넌트 단위 스타일링 |
| **Tailwind CSS** | 4.1.18 | 유틸리티 클래스 기반 스타일링 |
| **@tailwindcss/vite** | 4.1.18 | Vite용 Tailwind 플러그인 |
| **Noto Sans KR** | - | 한글 웹폰트 (Google Fonts) |

### 2.4 아이콘

| 기술 | 버전 | 역할 |
|---|---|---|
| **react-icons** | 5.5.0 | HeroIcons, FontAwesome 등 아이콘 라이브러리 |

### 2.5 개발 도구

| 기술 | 버전 | 역할 |
|---|---|---|
| **ESLint** | 9.39.1 | 코드 품질 검사 |
| **eslint-plugin-react-hooks** | 7.0.1 | React Hooks 규칙 검사 |
| **eslint-plugin-react-refresh** | 0.4.24 | HMR 관련 lint |
| **@vitejs/plugin-react** | 5.1.1 | Vite React 플러그인 (Babel 변환) |

---

## 3. 프로젝트 구조

```
REACT-STYLE/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/          # 공통 컴포넌트
│   │   ├── Header.jsx       # 네비게이션 헤더 (sticky, 반응형)
│   │   └── Footer.jsx       # 푸터 (4열 그리드)
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── HomePage.jsx     # 메인 홈 (히어로, 기능 소개, CTA)
│   │   ├── LoginPage.jsx    # 로그인 (이메일/소셜)
│   │   ├── DashboardPage.jsx # 대시보드 (자산 통계, 거래 내역)
│   │   └── ServicesPage.jsx  # 서비스 소개 + 요금제
│   ├── styles/
│   │   └── SharedStyles.js  # 공용 styled-components (애니메이션, 버튼, 카드 등)
│   ├── App.jsx              # 라우터 설정
│   ├── App.css
│   ├── index.css            # Tailwind + 전역 CSS 변수
│   └── main.jsx             # 앱 진입점
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 4. 라우팅 구조

| 경로 | 컴포넌트 | 설명 |
|---|---|---|
| `/` | `HomePage` | 메인 랜딩 페이지 |
| `/login` | `LoginPage` | 로그인 / 회원가입 |
| `/dashboard` | `DashboardPage` | 사용자 대시보드 |
| `/services` | `ServicesPage` | 서비스 소개 및 요금제 |

- **방식**: BrowserRouter (History API 기반)
- **진입점**: `main.jsx`에서 `<BrowserRouter>` 래핑

---

## 5. 스타일링 전략

### CSS-in-JS (styled-components) 우선
컴포넌트별 독립적인 스타일 캡슐화. 동적 props 기반 스타일 분기에 활용.

```js
// props 기반 스타일 분기 예시
const Button = styled.button`
  background: ${props => props.$variant === 'primary'
    ? 'linear-gradient(135deg, #1a56db, #0ea5e9)'
    : 'transparent'};
`
```

### Tailwind CSS 보조 활용
레이아웃 및 간단한 유틸리티 클래스에 활용.

```jsx
<div className="min-h-screen flex flex-col">
```

### 공통 디자인 토큰 (index.css)

```css
--color-primary: #1a56db
--color-secondary: #0ea5e9
--color-accent: #06d6a0
--color-dark: #0f172a
--font-sans: 'Noto Sans KR', ...
```

### 공용 SharedStyles 컴포넌트

| 컴포넌트/애니메이션 | 설명 |
|---|---|
| `fadeInUp` | 아래에서 위로 fade in |
| `fadeIn` | 투명도 fade in |
| `slideInLeft` | 왼쪽에서 슬라이드 |
| `pulse` | scale 박동 효과 |
| `Container` | max-width 1200px 중앙 정렬 |
| `SectionTitle` | 섹션 제목 (2.25rem) |
| `SectionSubtitle` | 섹션 부제목 |
| `GradientText` | 그라데이션 텍스트 |
| `Card` | 기본 카드 (hover 애니메이션 포함) |
| `Button` | primary / outline / ghost 변형 |

---

## 6. 빌드 결과물

| 파일 | 크기 | gzip |
|---|---|---|
| `index.html` | 0.77 kB | 0.47 kB |
| `assets/index.css` | 7.25 kB | 2.09 kB |
| `assets/index.js` | 304.98 kB | 96.83 kB |

---

## 7. 실행 명령어

```bash
# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 프리뷰 (http://localhost:4173)
npm run preview

# 코드 린트
npm run lint
```

---

## 8. 반응형 브레이크포인트

| 브레이크포인트 | 크기 | 적용 |
|---|---|---|
| Desktop | 1024px 이상 | 기본 레이아웃 |
| Tablet | 768px ~ 1024px | 2열 그리드 전환 |
| Mobile | 480px 이하 | 1열 세로 레이아웃 |
