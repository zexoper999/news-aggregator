import NewsList from "@/components/news/NewsList";
import { fetchTopHeadlines } from "@/lib/api";

export default async function Home() {
  const articles = await fetchTopHeadlines("us");
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            📰 News Aggregator
          </h1>
          <p className="text-gray-600 mt-2">최신 뉴스를 한눈에 확인하세요</p>
        </div>
      </header>

      {/* 뉴스 목록 */}
      <NewsList articles={articles} />
    </main>
  );
}
