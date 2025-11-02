import { getBlogList } from "@/lib/api/blog";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import type { Metadata } from "next";
import BlogListPageClient from "@/components/blog/BlogListPageClient";

export const metadata: Metadata = {
  title: "블로그 - Vvellflo",
  description: "Vvellflo의 블로그 포스트 목록입니다.",
  openGraph: {
    title: "블로그 - Vvellflo",
    description: "Vvellflo의 블로그 포스트 목록입니다.",
  },
};

export default async function BlogListPage() {
  try {
    const initialData = await getBlogList({ limit: 10, sort: "DESC" });

    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-[--background]">
          <BlogListPageClient initialData={initialData} />
        </div>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error("Failed to fetch blog list:", error);

    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-[--background]">
          <BlogListPageClient initialData={null} />
        </div>
      </ErrorBoundary>
    );
  }
}
