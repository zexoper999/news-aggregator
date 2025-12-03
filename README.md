# 📰 News Aggregator

Next.js + TypeScript로 제작한 실시간 뉴스 애그리게이터

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 환경변수 설정
# .env.local 파일 생성 후 NewsAPI 키 추가
NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here

# 개발 서버 실행 (Node.js 20+)
npm run dev
```

## 🛠️ 기술 스택

- **Next.js 16** - React Server Components, App Router
- **React 19** - 최신 React 기능
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 유틸리티 기반 스타일링
- **NewsAPI** - 실시간 뉴스 데이터

## 🎯 주요 기능

### 현재 구현된 기능

1. **실시간 뉴스 표시**

   - NewsAPI를 통한 최신 뉴스 가져오기
   - 국가별 헤드라인 (현재: 미국 뉴스)
   - 1시간 캐싱 (ISR)

2. **반응형 UI**

   - 모바일: 1열 그리드
   - 태블릿: 2열 그리드
   - 데스크톱: 3열 그리드

3. **이미지 최적화**
   - Next.js Image Component 사용
   - 로딩 실패 시 Fallback UI
   - 외부 이미지 소스 지원

## 📝 (TODO)

- [ ] 카테고리 필터링 (비즈니스, 기술, 스포츠 등)
- [ ] 검색 기능
- [ ] 국가 선택 기능
- [ ] 뉴스 상세 페이지
