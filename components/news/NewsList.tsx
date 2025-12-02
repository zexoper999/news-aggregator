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

  const categories: NewsCategory[] = [
    "all",
    "technology",
    "business",
    "sports",
    "entertainment",
    "health",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category === "all" ? "전체" : category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          해당 카테고리의 뉴스가 없습니다.
        </div>
      )}
    </div>
  );
}
