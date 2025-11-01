"use client";

import { Suspense } from "react";
import BlogDetailSidebar from "@/components/blog/BlogDetailSidebar";
import type { BlogPost } from "@/types/blog";

interface BlogDetailSidebarClientProps {
  post: BlogPost;
}

function SidebarSkeleton() {
  return (
    <div className="hidden lg:block space-y-6">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-[--surface] border border-[--border] rounded-lg p-6 h-40 animate-pulse"
        />
      ))}
    </div>
  );
}

export default function BlogDetailSidebarClient({
  post,
}: BlogDetailSidebarClientProps) {
  return (
    <Suspense fallback={<SidebarSkeleton />}>
      <BlogDetailSidebar post={post} />
    </Suspense>
  );
}
