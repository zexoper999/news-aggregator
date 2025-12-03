"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import { NewsArticle, NewsCategory } from "@/types/news";

interface NewsListProps {
  articles: NewsArticle[];
}

export default function NewsList({ articles }: NewsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("all");

  // 카테고리 필터링
  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const categories: { value: NewsCategory; label: string }[] = [
    { value: "all", label: "전체" },
    { value: "technology", label: "기술" },
    { value: "business", label: "비즈니스" },
    { value: "sports", label: "스포츠" },
    { value: "entertainment", label: "엔터테인먼트" },
    { value: "health", label: "건강" },
    { value: "science", label: "과학" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 카테고리 필터 */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === category.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 뉴스 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {/* 결과 없을 때 */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          뉴스를 불러올 수 없습니다.
        </div>
      )}
    </div>
  );
}
