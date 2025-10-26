"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface FallbackImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined;
}

export default function FallbackImage({
  src,
  alt,
  ...props
}: FallbackImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // src가 falsy하거나 에러가 발생한 경우
  const shouldShowFallback = !src || error;

  if (shouldShowFallback) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[--surface]">
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto mb-2 text-[--text-muted]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs text-[--text-muted]">
            이미지를 불러올 수 없습니다
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[--surface]">
          <div className="w-8 h-8 border-2 border-[--border] border-t-[--primary] rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </>
  );
}
