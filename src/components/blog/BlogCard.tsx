"use client";

import { MouseEvent, useCallback } from "react";
import Link from "next/link";
import FallbackImage from "@/components/common/FallbackImage";
import { toastInfo } from "@/lib/toast";

interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  excerpt?: string;
  meta?: {
    duration?: string;
    level?: string;
  };
  variant?:
    | "featured"
    | "hero"
    | "equal"
    | "wide"
    | "side"
    | "compact"
    | "tall";
}

export default function BlogCard({
  id,
  title,
  category,
  thumbnail,
  excerpt,
  meta,
  variant = "equal",
}: BlogCardProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      toastInfo("블로그 콘텐츠를 준비 중입니다. 곧 만나요!", {
        autoClose: 2500,
      });
    },
    []
  );

  const getGridClass = () => {
    switch (variant) {
      case "featured":
        return "col-span-12 md:col-span-8 md:row-span-2 min-h-[600px]";
      case "hero":
        return "col-span-12 md:col-span-4";
      case "equal":
        return "col-span-12 md:col-span-4";
      case "wide":
        return "col-span-12 md:col-span-6";
      case "side":
        return "col-span-12 md:col-span-3";
      case "compact":
        return "col-span-12 md:col-span-3";
      case "tall":
        return "col-span-12 md:col-span-6";
      default:
        return "col-span-12 md:col-span-4";
    }
  };

  const getImageWrapperClass = () => {
    switch (variant) {
      case "featured":
        return "h-full aspect-[3/4]";
      case "hero":
        return "aspect-square";
      case "wide":
      case "tall":
        return "aspect-[16/10]";
      default:
        return "aspect-[4/5]";
    }
  };

  const getTitleSize = () => {
    return variant === "featured" ? "text-4xl" : "text-2xl";
  };

  return (
    <article className={`${getGridClass()} min-w-0 min-h-0`}>
      <Link
        href={`/blog/${id}`}
        className="block h-full bg-[--surface] border border-[--border] overflow-hidden cursor-pointer transition-all duration-600 hover:border-[#7DD5F3] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] group"
        onClick={handleClick}
      >
        <div className={`relative overflow-hidden ${getImageWrapperClass()}`}>
          <FallbackImage
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-all duration-1200 brightness-85 group-hover:scale-105 group-hover:brightness-100"
          />
          <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-[rgba(10,10,10,0.95)] to-transparent">
            <div className="text-[10px] tracking-[2px] uppercase text-[#7DD5F3] mb-2.5 font-semibold">
              {category}
            </div>
            <h3
              className={`font-bold mb-2.5 leading-tight ${getTitleSize()}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h3>
            {excerpt && (
              <p className="text-sm text-[--text-secondary] leading-relaxed">
                {excerpt}
              </p>
            )}
            {meta && (
              <div className="flex gap-3.5 text-[11px] text-[--text-muted] mt-2">
                {meta.duration && <span>⏱ {meta.duration}</span>}
                {meta.level && <span>📊 {meta.level}</span>}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
