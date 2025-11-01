"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogDetailHeader from "@/components/blog/BlogDetailHeader";
import BlogDetailContentClient from "@/components/blog/BlogDetailContentClient";
import BlogDetailSidebarClient from "@/components/blog/BlogDetailSidebarClient";
import type { BlogPost } from "@/types/blog";

interface BlogDetailPageClientProps {
  post: BlogPost;
}

function HeaderSkeleton() {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16 space-y-4">
      <div className="h-8 w-24 bg-[--surface] rounded animate-pulse" />
      <div className="h-12 w-3/4 bg-[--surface] rounded animate-pulse" />
      <div className="flex gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-5 w-20 bg-[--surface] rounded animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

export default function BlogDetailPageClient({
  post,
}: BlogDetailPageClientProps) {
  const backgroundImage = post.images?.[0]?.imageUrl;

  return (
    <>
      {backgroundImage && (
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] -mt-8 sm:-mt-12 lg:-mt-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 50%, var(--background) 100%)'
            }}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[--text-secondary] hover:text-[#7DD5F3] transition-colors mb-8 sm:mb-12"
        >
          <span>←</span>
          <span>돌아가기</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Suspense fallback={<HeaderSkeleton />}>
              <BlogDetailHeader post={post} />
            </Suspense>

            <div id="content" className="mb-12 sm:mb-16 lg:mb-20">
              <BlogDetailContentClient post={post} />
            </div>
          </div>

          <BlogDetailSidebarClient post={post} />
        </div>
      </motion.div>
    </>
  );
}
