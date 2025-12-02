import Image from "next/image";
import { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
            {article.category}
          </span>
          <span>{article.source}</span>
        </div>

        <h2 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h2>

        <p className="text-gray-700 mb-3 line-clamp-3">{article.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.author}</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
      </div>
    </article>
  );
}
