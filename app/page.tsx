import NewsList from "@/components/news/NewsList";
import SearchBar from "@/components/search/SearchBar";
import { fetchTopHeadlines, searchNews } from "@/lib/api";

interface HomeProps {
  searchParams: { q?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const query = searchParams.q;

  // 검색어가 있으면 검색, 없으면 헤드라인
  const articles = query ? await searchNews(query) : await fetchTopHeadlines("us");

  const title = query ? `"${query}" 검색 결과` : "최신 뉴스";
  const resultCount = query ? `${articles.length}개 발견` : "";

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            📰 News Aggregator
          </h1>

          {/* 검색바 추가 */}
          <SearchBar />

          <div className="mt-4 flex items-center gap-2">
            <p className="text-gray-600">{title}</p>
            {resultCount && (
              <span className="text-sm text-blue-600 font-medium">
                {resultCount}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* 뉴스 목록 */}
      {articles.length > 0 ? (
        <NewsList articles={articles} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <p className="text-gray-500 text-lg">
            검색 결과가 없습니다. 다른 키워드로 시도해보세요.
          </p>
        </div>
      )}
    </main>
  );
}
