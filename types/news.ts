export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  source: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}

export type NewsCategory =
  | "all"
  | "technology"
  | "business"
  | "sports"
  | "entertainment"
  | "health";
