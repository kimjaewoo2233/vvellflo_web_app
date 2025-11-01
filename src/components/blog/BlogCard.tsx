"use client";

import { MouseEvent, useCallback, useRef } from "react";
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
}: BlogCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    // Link 컴포넌트의 기본 동작 사용
  }, []);

  const getGridClass = () => {
    switch (variant) {
      case "featured":
        return "col-span-12 lg:col-span-8 lg:row-span-2";
      case "hero":
        return "col-span-12 lg:col-span-4";
      case "equal":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      case "wide":
        return "col-span-12 lg:col-span-6";
      case "side":
        return "col-span-6 lg:col-span-3";
      case "compact":
        return "col-span-6 lg:col-span-3";
      case "tall":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      default:
        return "col-span-12 md:col-span-6 lg:col-span-4";
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
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`${getGridClass()} min-w-0`}
    >
      <Link
        href={`/flo/${id}`}
        className="block h-full bg-[--surface] border border-[--border] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:border-[#7DD5F3] hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:scale-[0.98] group"
        onClick={handleClick}
      >
        <div className={`relative overflow-hidden ${getImageWrapperClass()}`}>
          <FallbackImage
            src={images?.[0]?.imageUrl || ""}
            alt={title}
            fill
            className="object-cover transition-all duration-700 ease-out brightness-90 group-hover:scale-110 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.95)] via-[rgba(10,10,10,0.4)] to-transparent" />

          <div
            className={`absolute bottom-0 left-0 right-0 ${getContentPadding()} transform transition-transform duration-500 ease-out group-hover:translate-y-[-4px]`}
          >
            <div className="text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] uppercase text-[#7DD5F3] mb-1.5 sm:mb-2.5 font-semibold transition-colors duration-300 group-hover:text-[#A0E7FF]">
              {category}
            </div>
            <h3
              className={`font-bold mb-2 sm:mb-2.5 leading-tight ${getTitleSize()} line-clamp-2 sm:line-clamp-3`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h3>
            {excerpt && variant === "featured" && (
              <p className="text-xs sm:text-sm text-[--text-secondary] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {excerpt}
              </p>
            )}
            {meta && (
              <div className="flex gap-2 sm:gap-3.5 text-[10px] sm:text-[11px] text-[--text-muted] mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
