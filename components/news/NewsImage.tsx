"use client";

import Image from "next/image";
import { useState } from "react";

interface NewsImageProps {
  src: string;
  alt: string;
}

export default function NewsImage({ src, alt }: NewsImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="flex items-center justify-center h-full w-full text-gray-400 bg-gray-100">
        📰 이미지 없음
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
      // 일부 뉴스 사이트의 이미지 최적화 이슈 우회
      unoptimized={
        src.includes("washingtonpost.com") || src.includes("politico.com")
      }
    />
  );
}
