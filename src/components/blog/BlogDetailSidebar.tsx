"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MdFavorite, MdCategory, MdCalendarToday } from "react-icons/md";
import type { BlogPost } from "@/types/blog";

interface BlogDetailSidebarProps {
  post: BlogPost;
}

export default function BlogDetailSidebar({ post }: BlogDetailSidebarProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:block"
    >
      <div className="sticky top-24 space-y-6">
        <div className="bg-[--surface] border border-[--border] rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">글 정보</h3>
          <div className="space-y-3 text-sm text-[--text-secondary]">
            <div className="flex items-start gap-3">
              <MdCategory className="w-5 h-5 text-[#7DD5F3] mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[--text-primary] block">
                  카테고리
                </span>
                <p className="mt-1">{post.category.name}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdCalendarToday className="w-5 h-5 text-[#7DD5F3] mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-[--text-primary] block">
                  작성일
                </span>
                <p className="mt-1">
                  {new Date(post.createdAt).toLocaleDateString("ko-KR")}
                </p>
              </div>
            </div>
            {post.likeCount > 0 && (
              <div className="flex items-start gap-3">
                <MdFavorite className="w-5 h-5 text-[#7DD5F3] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[--text-primary] block">
                    좋아요
                  </span>
                  <p className="mt-1">{post.likeCount}명</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[--surface] border border-[--border] rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">목차</h3>
          <nav className="space-y-2 text-sm">
            <Link
              href="#content"
              className="block text-[--text-secondary] hover:text-[#7DD5F3] transition-colors"
            >
              콘텐츠
            </Link>
            <Link
              href="#related"
              className="block text-[--text-secondary] hover:text-[#7DD5F3] transition-colors"
            >
              관련 글
            </Link>
          </nav>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 bg-[#7DD5F3] text-[--background] font-semibold rounded-lg hover:bg-[#5EC8E8] transition-colors flex items-center justify-center gap-2"
        >
          <MdFavorite className="w-5 h-5" />
          <span>좋아요 ({post.likeCount})</span>
        </motion.button>
      </div>
    </motion.aside>
  );
}
