"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { getRelatedBlogPosts } from "@/lib/api";
import type { BlogPost } from "@/types/blog";

export default function BentoGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 임시로 ID 1번의 관련 포스트를 가져옴 (실제로는 featured 포스트 목록 API 필요)
        const data = await getRelatedBlogPosts(97);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[--background]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center text-[--text-secondary]">로딩 중...</div>
        </div>
      </section>
    );
  }

  // 카드 배치 패턴 정의
  const cardVariants: Array<
    "featured" | "hero" | "equal" | "wide" | "side" | "compact" | "tall"
  > = [
    "featured", // 0
    "hero", // 1
    "hero", // 2
    "equal", // 3
    "equal", // 4
    "equal", // 5
    "wide", // 6
    "side", // 7
    "side", // 8
    "compact", // 9
    "compact", // 10
    "tall", // 11
  ];

  console.log(posts);
  return (
    <section className="py-20 bg-[--background]" id="content">
      <div className="max-w-[1400px] mx-auto px-10">
        <ScrollReveal>
          <div className="mb-16 border-b border-[--border] pb-6">
            <div className="text-[10px] font-semibold text-[--text-muted] uppercase tracking-[3px] mb-3">
              Featured Content
            </div>
            <h2
              className="text-5xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              오늘의 추천 루틴
            </h2>
            <p className="text-[--text-secondary] text-[15px]">
              큐레이션된 200+ 웰니스 콘텐츠
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-12 gap-5">
          {posts.slice(0, 12).map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              category={post.category.name}
              thumbnail={post.thumbnail}
              excerpt={index === 0 ? post.content.substring(0, 100) : undefined}
              meta={
                index === 0
                  ? { duration: "5 Min", level: "Beginner" }
                  : undefined
              }
              variant={cardVariants[index] || "equal"}
            />
          ))}
        </div>

        {posts.length === 0 && !loading && (
          <div className="text-center text-[--text-secondary] py-20">
            표시할 콘텐츠가 없습니다.
          </div>
        )}
      </div>
    </section>
  );
}
