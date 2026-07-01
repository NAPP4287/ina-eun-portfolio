# ina-eun-portfolio

프론트엔드 개발자 **이나은** 개인 포트폴리오 웹사이트.
경력·프로젝트·기술 스택을 한 페이지 스크롤 형태로 소개하는 SPA입니다.

> 🎨 라이트 테마 + 핑크레드(`#FA2256`) 액센트 컬러 기반 디자인

---

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| **Core** | React 19, TypeScript, Vite 8 |
| **Styling** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Animation** | Framer Motion 12 |
| **Routing** | React Router DOM 7 |
| **Quality** | ESLint 10, typescript-eslint |
| **Package Manager** | pnpm |

---

## 시작하기

### 요구 사항
- Node.js 18+ (권장: 20+)
- pnpm

### 설치 & 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (기본 http://localhost:3000, 자동 오픈)
pnpm dev

# 프로덕션 빌드 (tsc 타입 체크 + vite build)
pnpm build

# 빌드 결과 미리보기
pnpm preview

# 린트
pnpm lint
```

> 포트는 `PORT` 환경 변수로 변경할 수 있습니다. (기본값 `3000`)

---

## 프로젝트 구조

```
ina-eun-portfolio/
├── index.html
├── vite.config.ts          # Vite 설정 (@ alias, 청크 분할, dev 포트)
├── tailwind.config.js      # 컬러·폰트·애니메이션 테마 정의
├── public/                 # favicon, 아이콘 등 정적 파일
└── src/
    ├── App.tsx             # 루트 — 섹션 조립 + 스크롤 진행 바
    ├── main.tsx            # 엔트리 포인트
    ├── index.css           # 전역 스타일
    ├── assets/             # 이미지 (hero 등)
    ├── components/
    │   ├── layout/         # Header, Footer
    │   ├── sections/       # Hero, About, Skills, Experience,
    │   │                   #   Projects, SideProjects, Contact
    │   └── ui/             # ProjectCard, SkillTag, ExperienceItem,
    │                       #   ScrollToTop 등 재사용 컴포넌트
    ├── data/               # 콘텐츠 데이터 (아래 참고)
    │   ├── projects.ts     # 주요 프로젝트 + 핵심 성과 지표
    │   ├── experience.ts   # 경력 이력
    │   └── skills.ts       # 기술 스택 · 사이드 프로젝트
    ├── hooks/
    │   ├── useTypingAnimation.ts
    │   ├── useScrollAnimation.ts
    │   └── useActiveSection.ts   # 현재 보이는 섹션 추적 (네비 하이라이트)
    └── types/index.ts      # 공통 타입 정의
```

### 콘텐츠 수정 방법
페이지에 표시되는 내용은 **`src/data/`** 의 데이터 파일만 수정하면 됩니다.
컴포넌트는 이 데이터를 렌더링하는 구조라 문구·프로젝트·경력 추가는 데이터 파일에서 처리합니다.

- `projects.ts` — 주요 프로젝트(`projects`)와 상단 핵심 지표(`keyAchievements`)
- `experience.ts` — 회사별 경력(`experiences`)
- `skills.ts` — 기술 스택(`skillCategories`)과 사이드 프로젝트(`sideProjects`)

---

## 주요 특징

- **단일 페이지 스크롤 구성** — Hero → About → Skills → Experience → Projects → SideProjects → Contact
- **스크롤 진행 바** — 페이지 상단에 Framer Motion 기반 진행 인디케이터 표시
- **데이터 주도 렌더링** — 콘텐츠를 `src/data`로 분리해 유지보수 용이
- **경로 별칭** — `@/*` → `src/*` (import 경로 단순화)
- **빌드 청크 분할** — `framer-motion`은 `animation`, 나머지 의존성은 `vendor` 청크로 분리

---

## 디자인 시스템

`tailwind.config.js` 에 정의된 테마 토큰:

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `accent` | `#FA2256` | 핵심 액센트 (핑크레드) |
| `bg.primary` | `#fafafa` | 페이지 배경 |
| `bg.card` | `#ffffff` | 카드 배경 |
| `text-primary` | `#0f0f0f` | 기본 텍스트 |
| Font (sans) | Pretendard | 본문 |
| Font (mono) | JetBrains Mono | 코드·라벨 |

---

## 배포

`pnpm build` 결과물은 `dist/` 에 생성되는 정적 파일입니다.
Vercel · Netlify · GitHub Pages 등 정적 호스팅에 그대로 배포할 수 있습니다.
