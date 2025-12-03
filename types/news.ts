export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string | null;
  source: string;
  url: string;
  imageUrl: string | null;
  publishedAt: string;
  category?: string;
}

export type NewsCategory =
  | "all"
  | "technology"
  | "business"
  | "sports"
  | "entertainment"
  | "health"
  | "science";
