import type { KeyAchievement, Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'live-editor',
    title: '라이브 방송 소개 에디터 (WYSIWYG)',
    description: '텍스트로만 노출되던 소개 섹션을 에디터 기반 구성 방식(WYSIWYG)으로 전환',
    detail:
      'tiptap + Mantine 기반 리치 텍스트 에디터 위에 도메인 요구사항을 직접 구현. 티웨이항공·푸마·아디다스 등 대형 브랜드 라이브의 소개 섹션 구성에 사용.',
    techStack: ['Next.js', 'TypeScript', 'tiptap', 'Mantine', 'TanStack Query', 'Zustand'],
    category: 'product',
    company: '모비두',
    period: '2024.11 ~ 현재',
    highlights: [
      '툴바 업로드만 허용(붙여넣기·드래그 차단), 확장자·Content-Type·용량(1MB) 검증 후 S3 업로드 → CloudFront URL 본문 삽입',
      'onUpdate에서 HTML 바이트를 계산해 한도 초과 입력을 자동 undo, 한도 진입 시 토스트 1회 발화 (ref 미러링으로 클로저 최신값 문제 해결)',
      'CDN JSON/inline 데이터 hydration 시 onUpdate↔hydration 무한 루프를 1회 주입으로 제어',
    ],
    isHighlight: true,
  },
  {
    id: 'staff-permission',
    title: '스탭 권한 경계 보안 — 상품 등록 플로우 (단독)',
    description: '권한 검증이 누락된 접근 경로를 발견·차단하고, 권한 경계를 지키는 등록 플로우를 재설계',
    detail:
      '스탭(방송 단위 일회성 외부 운영자)이 권한 없이 상품 관리 페이지에 진입 가능했고 서버 API에도 검증이 없던 접근 제어 취약점을 발견. 문제 발견부터 대안 설계·프론트 구현까지 단독 수행.',
    techStack: ['Next.js', 'TypeScript', '권한/보안 설계'],
    category: 'security',
    company: '모비두',
    period: '2024.11 ~ 현재',
    metrics: '접근 제어 취약점 단독 해결',
    highlights: [
      '토큰 권한 정보와 실제 라우팅 동작을 비교해 검증 누락 접근 경로 규명',
      '프론트에서 비인가 진입을 긴급 차단(완화), 서버 인가 보강은 백엔드와 공유 — 최종 경계는 서버임을 전제',
      '방송 페이지를 벗어나지 않고 상품을 등록하는 전용 모달 플로우 설계, 기존 등록 폼 재사용으로 리소스 최소화',
    ],
    isHighlight: true,
  },
  {
    id: 'slate-image-policy',
    title: '라이브 송출 장애 추적 — 이미지 입력 정책 개선',
    description: 'jpg 허용으로 발생한 채널 생성 실패 장애의 잠재 위험을 추적해 입력 정책을 일원화',
    detail:
      '송출 파이프라인 슬레이트 이미지 제약(jpg 불가)으로 채널 생성이 실패하는 장애 발생. 1차안(PNG 변환)의 용량 증가 위험을 직접 테스트로 검증해 상시 장애 가능성을 규명.',
    techStack: ['Next.js', 'TypeScript'],
    category: 'security',
    company: '모비두',
    period: '2024.11 ~ 현재',
    highlights: [
      'PNG 변환 시 용량 증가 → 2MB 초과 시 송출 장애가 발생함을 직접 테스트·확인',
      '업로드 단계에서 PNG만 허용 + 용량(2MB 이하)을 검증하는 입력 정책을 제안·구현',
      'PM·백엔드·본부 등 관련 직군에 리스크를 직접 공유·설득해 최종 합의 도출',
    ],
  },
  {
    id: 'monitoring',
    title: 'Datadog 활용 운영 이슈 선제 대응',
    description: 'Datadog 에러 모니터링을 활용해 VOC 발생 이전에 운영 이슈를 감지·해소',
    detail:
      'Datadog 에러 모니터링을 활용해 고객 문의(VOC)로 이슈가 접수되기 전에 운영 단계 오류를 선제적으로 추적·해소. 어드민 마이그레이션 등 변경 리스크가 큰 구간에서 오류를 빠르게 파악해 운영 안정성을 확보.',
    techStack: ['Datadog', 'Next.js', 'TypeScript'],
    category: 'security',
    company: '모비두',
    period: '2024.11 ~ 현재',
    highlights: [
      'Datadog 에러 모니터링으로 VOC 이전 운영 이슈 선제 감지·해소',
    ],
  },
  {
    id: 'showroom',
    title: '쇼룸 B2B 전시 솔루션',
    description: '고객사 맞춤형 라이브커머스 전시 페이지 — 삼성닷컴 등 적용',
    detail:
      '고객사마다 브랜드 톤과 전시 방식이 달라 하나의 고정된 전시 페이지로는 대응 불가. 고객사가 자사 스타일에 맞게 커스텀하는 B2B 임베드형 쇼룸 서비스를 개발.',
    techStack: ['Next.js', 'TypeScript', 'iframe postMessage', '@hello-pangea/dnd'],
    category: 'product',
    company: '모비두',
    period: '2024.11 ~ 현재',
    metrics: '10개 파트너사 사용 중',
    highlights: [
      'postMessage 브릿지로 콘텐츠·테마 변경을 iframe 미리보기에 실시간 반영 (크로스 프레임 통신)',
      '배너 그룹 드래그 순서 변경, 공개상태(대기/공개/비공개)에 따른 삭제·정렬 제약 등 운영 규칙 반영',
      '삼성전자 공식몰(삼성닷컴) 등 고객사 전시 페이지 적용, 현재 10개 파트너사가 사용 중',
    ],
  },
  {
    id: 'engagekit',
    title: 'EngageKit Engagement 고도화',
    description: '퀴즈·구매인증·쿠폰 어드민 — 삼성 S26 참여 1.1만 명',
    detail:
      '삼성 갤럭시 S26 시리즈 사전구매 라이브에서 EngageKit 참여자 1.1만 명, 구매인증 참여 8,140명(단일 방송 기준 최다 참여 기록) 달성. 운영자가 이벤트를 설정·운영하는 어드민/콘솔 전반 담당.',
    techStack: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand'],
    category: 'product',
    company: '모비두',
    period: '2026.01 ~ 2026.03',
    metrics: '참여 1.1만 명 · 구매인증 8,140명',
    highlights: [
      '퀴즈·구매인증·쿠폰 3종 어드민 전체 설계·개발',
      '비회원 참여 시 전화번호·이메일 수집 등 참여 조건 처리',
      '세 이벤트 유형에 걸친 참여자 관리·파일 다운로드 흐름 일관 구성',
    ],
    isHighlight: true,
  },
  {
    id: 'affiliate',
    title: '소스링크 어필리에이트',
    description: '크리에이터 제휴 마케팅 — 링크·캠페인 비대칭 귀속 구조를 어드민·크리에이터 양면 구현',
    detail:
      '크리에이터가 제휴 상품을 추천하고 전환에 따라 커미션을 얻는 어필리에이트 서비스. 같은 "링크"가 1:1 직접 귀속(링크 방식)과 1:N 오픈형(캠페인 방식) 두 경로로 생성되는 비대칭 귀속 구조를 어드민·크리에이터 양면으로 구현.',
    techStack: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand'],
    category: 'product',
    company: '모비두',
    period: '2024.11 ~ 현재',
    metrics: '누적 링크 832개',
    highlights: [
      '링크 방식(1:1 직접 귀속)·캠페인 방식(1:N 오픈형) 두 생성 경로 일관 처리',
      '어드민(상품·크리에이터·캠페인 등록)·크리에이터(캠페인 탐색·링크 생성) 양면 구현',
      '전환 추적·정산이 전제된 커머스 도메인을 비대칭 귀속 모델로 UI에 구현',
    ],
  },
  {
    id: 'ai-convention',
    title: 'AI 기반 컨벤션 자동 점검 체계',
    description: '규칙 17개 → 56개 전수 자동화, 컨벤션 점검 3단 자동화 파이프라인',
    detail:
      '팀 컨벤션 준수를 개인 기억·코드 리뷰에 의존하던 문제를 해결. 규칙 정의 → 자동 검증(커밋) → AI 셀프 리뷰(PR) 3단으로 자동화. 단일 SKILL을 오케스트레이터로 재설계하고 의미추론 단계만 Claude Code sub-agent로 격리.',
    techStack: ['Claude Code', 'ESLint Custom Rules', 'Git Hooks', 'TypeScript'],
    category: 'devex',
    company: '모비두',
    period: '2025.01 ~ 현재',
    metrics: '규칙 17 → 56개 (+229%)',
    highlights: [
      '"정형 가능한 규칙은 ESLint, 맥락 판단은 AI"로 역할 분리',
      'pre-commit·commit-msg·pre-push 훅으로 lint·타입 체크·커밋 포맷 자동 강제',
      'fixture 기반 모델별 검출 정확도·비용 실측, 비용 42% 절감 모델 도입',
    ],
    isHighlight: true,
  },
  {
    id: 'clip-player',
    title: '클립 플레이어 기능 개발·성능 최적화',
    description: '댓글 기능 전 과정 단독 출시·MMP 연동·WebP 이미지 최적화',
    detail:
      'Vite · React Router 기반 클립 플레이어. 댓글 기능 전 과정 단독 출시(어드민 Config 기반 on/off 안전장치), Airbridge·Appsflyer 2개사 MMP 연동, 상품 목록 99개 썸네일 성능 최적화.',
    techStack: ['Vite', 'React', 'React Router', 'TypeScript', 'TanStack Query', 'Zustand', 'Airbridge', 'Appsflyer'],
    category: 'product',
    company: '모비두',
    period: '2024.12 ~ 2025.02',
    highlights: [
      '댓글 기능 전 과정 단독 출시 — 어드민 Config 기반 온/오프로 장애 시 코드 배포 없이 차단 가능',
      'CDN 변환 쿼리(f=webp, 품질·리사이즈 파라미터)를 적용한 이미지 전송 최적화로 초기 로딩 부하 완화',
      'React.lazy() + Suspense 기반 컴포넌트 코드 스플리팅 + TanStack Query enabled 조건부 API 호출 제어',
    ],
  },
  {
    id: 'migration',
    title: 'Vue → Next.js 어드민 마이그레이션',
    description: 'QA 이슈 0건 · 운영 중단 없는 전환 · TanStack Query 최초 도입',
    detail:
      'Vue 기반 어드민을 Next.js로 점진적 마이그레이션. 레거시·변경 화면을 동시에 접근 가능하도록 환경 직접 구성. TanStack Query 프로덕트 최초 도입으로 데이터 패칭·에러 처리 기준 일원화.',
    techStack: ['Next.js', 'TypeScript', 'TanStack Query', 'Vue'],
    category: 'devex',
    company: '모비두',
    period: '2024.11 ~ 2025.01',
    metrics: 'QA 0건 릴리즈',
    highlights: [
      'PM·PO 온보딩 직접 진행 — 권한 체계 포함 어드민 도메인 지식 전달',
      '페이지 이동 규칙을 PO 본부 협의 거쳐 조직 공통 규칙으로 표준화',
    ],
  },
  {
    id: 'boilerplate',
    title: 'Next.js 공용 보일러플레이트',
    description: '팀 공용 보일러플레이트 설계 — FE 개발 기간 30일 → 15일 단축',
    detail:
      '매 프로젝트마다 반복되는 초기 세팅·컨벤션 관리 문제 해결. fetch + new Proxy 기반 토큰 자동 갱신, API 요청 공통 함수, Atomic 컴포넌트 체계 표준화. 협업 기준 문서까지 포함.',
    techStack: ['Next.js', 'TypeScript', 'ESLint', 'Husky'],
    category: 'devex',
    company: 'NEXACODE',
    period: '2024.03 ~ 2024.06',
    metrics: '개발 기간 50% 단축',
    highlights: [
      'SSR/CSR 렌더링 전략을 페이지 특성에 따라 판단해 적용',
      'git 커밋·브랜치 컨벤션, 이미지 네이밍 규칙, env 분리, API 응답 포맷 사전 정의',
      '메타데이터·구조화 데이터(Structured Data) 기반 SEO 세팅으로 검색엔진 노출 기반 개선 — 운세나라·나우스윙 어드민·셀노크 등 적용',
    ],
    isHighlight: true,
  },
  {
    id: 'parenting-app',
    title: '위대한 육아 RN 앱',
    description: 'React Native Android · iOS 단독 런칭',
    detail:
      '기능 정의서·API 명세(요청/응답·메소드)를 비개발 직군도 이해할 수 있는 형태로 직접 작성해 협업 기준 수립. 회원·결제·콘텐츠·커뮤니티·육아툰·심리검사 전 도메인 담당.',
    techStack: ['React Native', 'TypeScript', 'Recoil'],
    category: 'product',
    company: 'NEXACODE',
    period: '2024.08 ~ 2024.10',
    highlights: [
      'Android · iOS 동시 단독 런칭 및 앱 스토어 심사 대응',
      '공통 스타일링 컴포넌트 설계로 플랫폼 간 코드 재사용성 향상',
      '기능 정의서·API 명세 직접 작성으로 클라이언트·백엔드 협업 기준 수립',
    ],
  },
  {
    id: 'security',
    title: '앱 보안 취약점 대응',
    description: '금융보안원 전 항목 100% 양호 — RSA·E2E 암호화 적용',
    detail:
      '금융보안원 취약점 점검을 앞두고 RSA_ENC·E2E 암호화를 적용해 중요 정보를 보호하고 전송 구간 보안을 강화. IKARUS·Zoner Antivirus 테스트 완료.',
    techStack: ['React Native', 'TypeScript', 'RSA 암호화', 'E2E 암호화'],
    category: 'security',
    company: 'PAYHADA',
    period: '2023.06 ~ 2023.09',
    metrics: '금융보안원 100% 양호',
    highlights: [
      'RSA_ENC·E2E 암호화로 중요 정보 보호 및 전송 구간 보안 강화',
      'IKARUS·Zoner Antivirus 테스트 전 항목 통과',
      '글로벌 앱 런칭 및 어드민 리뉴얼(재사용 컴포넌트 60%↑)',
    ],
    isHighlight: true,
  },
]

export const keyAchievements: KeyAchievement[] = [
  {
    id: 'samsung-engage',
    number: '1.1만',
    unit: '라이브 참여',
    description: 'EngageKit 운영 어드민 담당 — 구매인증 8,140명 (단일 방송 최다)',
    icon: 'users',
  },
  {
    id: 'convention',
    number: '56개',
    unit: '컨벤션 자동 점검',
    description: '17→56개 확대 — ESLint 22 + AI 34로 역할 분리',
    icon: 'sparkles',
  },
  {
    id: 'dev-speed',
    number: '50%',
    unit: '개발 기간 단축',
    description: '공용 Next.js 보일러플레이트, 30일 → 15일 단축',
    icon: 'zap',
  },
  {
    id: 'security',
    number: '100%',
    unit: '보안 양호',
    description: '금융보안원 보안 점검 전 항목 통과',
    icon: 'shield',
  },
]
