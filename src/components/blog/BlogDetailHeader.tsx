"use client";

import { motion } from "framer-motion";
import { MdCalendarToday, MdAccessTime, MdVisibility } from "react-icons/md";
import { formatDate, estimateReadTime } from "@/utils/blog";
import type { BlogPost } from "@/types/blog";

interface BlogDetailHeaderProps {
  post: BlogPost;
}

export default function BlogDetailHeader({ post }: BlogDetailHeaderProps) {
  const readTime = estimateReadTime(post.content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 sm:mb-12 lg:mb-16"
    >
      <div className="mb-4 sm:mb-6">
        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#7DD5F3]/10 text-[#7DD5F3] text-xs sm:text-sm font-semibold rounded-full">
          {post.category.name}
        </span>
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {post.title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base text-[--text-secondary]">
        <div className="flex items-center gap-2">
          <MdCalendarToday className="w-4 h-4 sm:w-5 sm:h-5 text-[#7DD5F3]" />
          <time>{formatDate(post.createdAt)}</time>
        </div>
        <div className="flex items-center gap-2">
          <MdAccessTime className="w-4 h-4 sm:w-5 sm:h-5 text-[#7DD5F3]" />
          <span>{readTime}분 읽기</span>
        </div>
        <div className="flex items-center gap-2">
          <MdVisibility className="w-4 h-4 sm:w-5 sm:h-5 text-[#7DD5F3]" />
          <span>{post.viewCount || 0}회 조회</span>
        </div>
      </div>
    </motion.div>
  );
}
