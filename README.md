# 📰 News Aggregator

> Next.js 16과 TypeScript로 구현한 실시간 뉴스 애그리게이터  
> NewsAPI를 활용하여 전 세계 주요 언론사의 최신 뉴스를 한눈에 확인할 수 있습니다.

## 🎯 프로젝트 소개

News Aggregator는 전 세계 주요 뉴스를 실시간으로 수집하고 표시하는 웹 애플리케이션입니다. Next.js 16의 최신 기능인 **React Server Components**와 **App Router**를 활용하여 빠른 초기 로딩과 SEO 최적화를 구현했습니다.

### 프로젝트 목표

- 🚀 **성능 최적화**: Server Components로 초기 로딩 속도 개선
- 🎨 **사용자 경험**: 직관적인 UI/UX와 반응형 디자인
- 🔍 **실시간 검색**: 키워드 기반 뉴스 검색 기능
- 🖼️ **이미지 최적화**: Next.js Image Component를 활용한 자동 최적화

## ✨ 주요 기능

### 1. 📰 실시간 뉴스 피드

- NewsAPI를 통한 전 세계 주요 언론사 뉴스 제공
- 국가별 헤드라인 뉴스 조회
- ISR(Incremental Static Regeneration)을 활용한 1시간 캐싱

### 2. 🔍 뉴스 검색

- 키워드 기반 실시간 검색
- 검색 결과 URL 공유 기능 (쿼리 파라미터 활용)
- 검색어 초기화 및 빈 결과 처리

### 3. 📱 반응형 디자인

- **모바일**: 1열 그리드 레이아웃
- **태블릿**: 2열 그리드 레이아웃
- **데스크톱**: 3열 그리드 레이아웃
- Tailwind CSS를 활용한 모던한 UI

### 4. 🖼️ 스마트 이미지 처리

- Next.js Image Component의 자동 최적화
- 이미지 로딩 실패 시 Fallback UI
- 조건부 `unoptimized` 처리로 호환성 개선
- 외부 도메인 이미지 지원

## 🛠️ 기술 스택

### Frontend

- **Next.js 16** - React Server Components, App Router, ISR
- **React 19** - 최신 React 기능 및 성능 개선
- **TypeScript** - 타입 안정성과 개발 생산성 향상
- **Tailwind CSS 4** - 유틸리티 기반 스타일링

### API & Data

- **NewsAPI** - 실시간 뉴스 데이터 제공
- **Fetch API** - 서버 사이드 데이터 페칭

### Development Tools

- **ESLint** - 코드 품질 관리
- **Git** - 버전 관리

## 🚀 시작하기

### 사전 요구사항

- Node.js 20.9.0 이상
- npm 또는 yarn
- [NewsAPI](https://newsapi.org/) API 키

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/news-aggregator.git
cd news-aggregator

# 2. 의존성 설치
npm install

# 3. 환경변수 설정
# .env.local 파일을 생성하고 아래 내용 추가
echo "NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here" > .env.local

# 4. 개발 서버 실행
npm run dev

# 5. 브라우저에서 확인
# http://localhost:3000
```

### 빌드 및 프로덕션 실행

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
news-aggregator/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 홈 페이지 (Server Component)
├── components/
│   ├── news/
│   │   ├── NewsCard.tsx     # 뉴스 카드 컴포넌트
│   │   ├── NewsList.tsx     # 뉴스 목록 컴포넌트
│   │   └── NewsImage.tsx    # 이미지 컴포넌트 (Client)
│   └── search/
│       └── SearchBar.tsx    # 검색바 컴포넌트 (Client)
├── lib/
│   ├── api.ts               # NewsAPI 연동 로직
│   └── dummyData.ts         # 개발용 더미 데이터
├── types/
│   └── news.ts              # 타입 정의
└── public/                   # 정적 파일

Server Components: app/page.tsx, NewsCard, NewsList
Client Components: SearchBar, NewsImage (상태 관리 필요)
```

## 💡 기술적 도전과 해결

### 1. Server Components vs Client Components

**도전**: Next.js 13+의 Server/Client Component 패러다임 이해

**해결**:

- 데이터 페칭 → Server Component (SEO, 성능)
- 상태 관리 → Client Component (검색, 이미지 에러 처리)

```typescript
// Server Component - API 호출
export default async function Home({ searchParams }: HomeProps) {
  const articles = await fetchTopHeadlines("us");
  return <NewsList articles={articles} />;
}

// Client Component - 상태 관리
("use client");
export default function SearchBar() {
  const [query, setQuery] = useState("");
  // ...
}
```

### 2. 외부 이미지 최적화 이슈

**도전**: 다양한 뉴스 소스의 이미지 hotlinking 제한

**해결**:

- `remotePatterns`로 모든 HTTPS 도메인 허용
- 문제 도메인에 조건부 `unoptimized` 적용
- `onError` 핸들러로 Fallback UI 구현

### 3. URL 기반 검색 상태 관리

**도전**: 검색 상태를 URL과 동기화하여 공유 가능하게 만들기

**해결**:

- Next.js의 `searchParams` 활용
- Server Component에서 쿼리 파라미터 직접 처리
- Client Component에서 `useRouter`로 네비게이션

## 🔮 TODO

- [ ] 카테고리별 필터링 (비즈니스, 기술, 스포츠 등)
- [ ] 국가 선택 기능 (다국적 뉴스 지원)
- [ ] 뉴스 상세 페이지 구현
- [ ] 무한 스크롤 또는 페이지네이션
- [ ] 다크 모드 지원
- [ ] 북마크 기능 (LocalStorage)
