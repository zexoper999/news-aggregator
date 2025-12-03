import { NewsArticle } from "@/types/news";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function fetchTopHeadlines(
  country: string = "kr",
  category?: string
): Promise<NewsArticle[]> {
  try {
    // API URL 구성
    let url = `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`;

    if (category && category !== "all") {
      url += `&category=${category}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1시간 캐싱
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ API Error Response:", errorData);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API Response:", {
      status: data.status,
      totalResults: data.totalResults,
      articlesCount: data.articles?.length || 0,
    });
    // console.log("Response:", JSON.stringify(data, null, 2));

    // NewsAPI 응답을 우리 타입으로 변환
    return data.articles.map((article: any, index: number) => ({
      id: `${article.publishedAt}-${index}`,
      title: article.title,
      description: article.description || "설명이 없습니다.",
      content: article.content || article.description || "",
      author: article.author || "알 수 없음",
      source: article.source.name,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
      category: category !== "all" ? category : undefined,
    }));
  } catch (error) {
    console.error("❌ Failed to fetch news:", error);
    return [];
  }
}

export async function searchNews(query: string): Promise<NewsArticle[]> {
  try {
    const url = `${BASE_URL}/everything?q=${encodeURIComponent(
      query
    )}&apiKey=${API_KEY}&language=ko`;

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return data.articles.map((article: any, index: number) => ({
      id: `${article.publishedAt}-${index}`,
      title: article.title,
      description: article.description || "설명이 없습니다.",
      content: article.content || article.description || "",
      author: article.author || "알 수 없음",
      source: article.source.name,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
    }));
  } catch (error) {
    console.error("Failed to search news:", error);
    return [];
  }
}
