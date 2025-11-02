"use client";

import { MouseEvent, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import FallbackImage from "@/components/common/FallbackImage";
import { toastInfo } from "@/lib/toast";

interface BlogImage {
  imageUrl: string;
  id: number;
  postId: number;
  sortOrder: number;
  caption: string;
  createdAt: string;
}

interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  images: BlogImage[];
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
  animationDelay?: number;
  className?: string;
}

export default function BlogCard({
  id,
  title,
  category,
  images,
  excerpt,
  meta,
  variant = "equal",
  animationDelay = 0,
  className,
}: BlogCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    // Link 컴포넌트의 기본 동작 사용
  }, []);

  const getGridClass = () => {
    // 부모 그리드에서 반응형 처리하므로 여기서는 기본값만 반환
    switch (variant) {
      case "featured":
      case "hero":
      case "equal":
      case "tall":
      case "side":
      case "compact":
      case "wide":
      default:
        return "w-full";
    }
  };

  const getImageWrapperClass = () => {
    switch (variant) {
      case "featured":
        return "h-[400px] sm:h-[500px] lg:h-[600px]";
      case "hero":
        return "h-[300px] lg:h-[290px]";
      case "wide":
        return "h-[250px] sm:h-[300px]";
      case "tall":
        return "h-[350px] sm:h-[400px]";
      case "compact":
        return "h-[200px] sm:h-[250px]";
      default:
        return "h-[280px] sm:h-[320px]";
    }
  };

  const getTitleSize = () => {
    switch (variant) {
      case "featured":
        return "text-2xl sm:text-3xl lg:text-4xl";
      case "hero":
        return "text-xl sm:text-2xl";
      case "compact":
        return "text-base sm:text-lg";
      default:
        return "text-lg sm:text-xl lg:text-2xl";
    }
  };

  const getContentPadding = () => {
    switch (variant) {
      case "featured":
        return "p-5 sm:p-6 lg:p-7";
      case "compact":
        return "p-3 sm:p-4";
      default:
        return "p-4 sm:p-5 lg:p-6";
    }
  };

  return (
    <article ref={ref} className={className || "w-full min-w-0 min-h-0"}>
      <Link
        href={`/flo/${id}`}
        className="flex flex-col min-w-0 h-full min-h-[400px] bg-gray-900 border border-gray-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:border-[#7DD5F3] hover:shadow-[0_20px_60px_rgba(125,213,243,0.2)] active:scale-[0.98] group"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 이미지 영역 */}
        <div className={`relative overflow-hidden w-full h-full`}>
          <FallbackImage
            src={images?.[0]?.imageUrl || ""}
            alt={title}
            fill
            className="object-cover transition-all duration-700 ease-out brightness-90 group-hover:scale-110 group-hover:brightness-100"
          />

          {/* 그라디언트 오버레이 */}
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.3)] to-transparent pointer-events-none" />

          {/* 배지 */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#7DD5F3]/20 backdrop-blur-md border border-[#7DD5F3]/50 rounded-full">
            <div className="text-[9px] sm:text-[10px] font-bold text-[#7DD5F3] uppercase tracking-wider">
              {category}
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-4 pb-4 sm:pb-5 transform transition-all duration-500 ease-out group-hover:translate-y-[-4px] flex flex-col`}
          >
            <motion.h3
              className={`font-bold mb-2 leading-tight text-white ${getTitleSize()} line-clamp-2 transition-all duration-300`}
              style={{ fontFamily: "var(--font-display)" }}
              animate={{
                letterSpacing: isHovered ? "0.5px" : "0px",
              }}
            >
              {title}
            </motion.h3>

            {/* 요약 텍스트 */}
            {excerpt && (
              <motion.p
                className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2 mb-2 transition-opacity duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3 }}
              >
                {excerpt}
              </motion.p>
            )}

            {/* 메타 정보 */}
            {meta && (
              <motion.div
                className="flex gap-2 sm:gap-3.5 text-[10px] sm:text-[11px] text-gray-400 mt-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  y: isHovered ? 0 : 4,
                }}
              >
                {meta.duration && (
                  <span className="flex items-center gap-1">
                    ⏱ {meta.duration}
                  </span>
                )}
                {meta.level && (
                  <span className="flex items-center gap-1">
                    📊 {meta.level}
                  </span>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
