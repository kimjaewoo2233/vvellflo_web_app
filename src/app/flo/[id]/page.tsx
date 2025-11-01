import { getBlogPost } from "@/lib/api/blog";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import BlogDetailPageClient from "@/components/blog/BlogDetailPageClient";
import type { Metadata } from "next";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const post = await getBlogPost(id);
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        images: post.images?.[0]?.imageUrl ? [post.images[0].imageUrl] : [],
      },
    };
  } catch {
    return {
      title: "블로그",
    };
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = await getBlogPost(id);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[--background]">
        <BlogDetailPageClient post={post} />
      </div>
    </ErrorBoundary>
  );
}
