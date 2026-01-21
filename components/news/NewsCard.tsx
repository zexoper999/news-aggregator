import { NewsArticle } from "@/types/news";
import NewsImage from "./NewsImage";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <article>
        <div className="relative h-48 w-full bg-gray-200">
          <NewsImage src={article.imageUrl || ""} alt={article.title} />
        </div>

        {/* 내용 */}
        <div className="p-4">
          {/* 출처 */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span className="font-semibold">{article.source}</span>
          </div>

          {/* 제목 */}
          <h2 className="text-xl font-bold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {article.title}
          </h2>

          {/* 설명 */}
          <p className="text-gray-700 mb-3 line-clamp-3">{article.description}</p>

          {/* 작성자 & 날짜 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{article.author}</span>
            <time>{formatDate(article.publishedAt)}</time>
          </div>
        </div>
      </article>
    </a>
  );
}
