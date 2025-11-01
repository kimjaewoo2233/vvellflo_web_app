"use client";

import { Suspense } from "react";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import type { BlogPost } from "@/types/blog";

interface BlogDetailContentClientProps {
  post: BlogPost;
}

function ContentSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-4 bg-[--surface] rounded animate-pulse" />
      ))}
    </div>
  );
}

export default function BlogDetailContentClient({
  post,
}: BlogDetailContentClientProps) {
  return (
    <Suspense fallback={<ContentSkeleton />}>
      <BlogDetailContent post={post} />
    </Suspense>
  );
}
