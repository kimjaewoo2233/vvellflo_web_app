"use client";

import BlogCard from "./BlogCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useRelatedBlogPostsQuery } from "@/hooks/queries/useRelatedBlogPostsQuery";
import clsx from "clsx";

export default function BentoGrid() {
  // 임시로 ID 97번의 관련 포스트를 가져옴 (실제로는 featured 포스트 목록 API 필요)
  const {
    data: posts = [],
    isLoading: loading,
    error,
  } = useRelatedBlogPostsQuery(97);

  if (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  if (loading) {
    return (
      <section className="py-20 bg-[--background]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-16 border-b border-[--border] pb-6">
            <div className="h-3 w-32 bg-[--surface] animate-pulse rounded mb-3" />
            <div className="h-12 w-64 bg-[--surface] animate-pulse rounded mb-3" />
            <div className="h-5 w-48 bg-[--surface] animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`${
                  i === 0
                    ? "col-span-12 lg:col-span-8 h-[400px] lg:h-[600px]"
                    : i <= 2
                    ? "col-span-12 lg:col-span-4 h-[300px] lg:h-[290px]"
                    : i <= 5
                    ? "col-span-12 md:col-span-6 lg:col-span-4 h-[300px]"
                    : i <= 7
                    ? "col-span-12 lg:col-span-6 h-[300px]"
                    : "col-span-6 lg:col-span-3 h-[250px]"
                } bg-[--surface] animate-pulse rounded-lg`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 카드 배치 패턴 정의 (반응형 최적화)
  const cardVariants: Array<
    "featured" | "hero" | "equal" | "wide" | "side" | "compact" | "tall"
  > = [
    "featured", // 0: 메인 피처드 (col-span-12 lg:col-span-8)
    "hero", // 1: 서브 히어로 (col-span-12 lg:col-span-4)
    "hero", // 2: 서브 히어로 (col-span-12 lg:col-span-4)
    "equal", // 3: 동일 크기 (col-span-12 md:col-span-6 lg:col-span-4)
    "equal", // 4: 동일 크기
    "equal", // 5: 동일 크기
    "wide", // 6: 와이드 (col-span-12 lg:col-span-6)
    "wide", // 7: 와이드 (col-span-12 lg:col-span-6)
    "compact", // 8: 컴팩트 (col-span-6 lg:col-span-3)
    "compact", // 9: 컴팩트
    "compact", // 10: 컴팩트
    "compact", // 11: 컴팩트
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[--background]" id="content">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-8 sm:mb-12 lg:mb-16 border-b border-[--border] pb-4 sm:pb-6">
            <div className="text-[9px] sm:text-[10px] font-semibold text-[--text-muted] uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3">
              Featured Content
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              오늘의 추천 루틴
            </h2>
            <p className="text-[--text-secondary] text-sm sm:text-[15px]">
              큐레이션된 200+ 웰니스 콘텐츠
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {posts.slice(0, 4).map((post, index) => {
            // 첫 번째 행: 2:1 비율 (col-span-2, col-span-1)
            // 두 번째 행: 1:2 비율 (col-span-1, col-span-2)
            const colSpan =
              index === 0
                ? "col-span-2"
                : index === 1
                ? "col-span-1"
                : index === 2
                ? "col-span-1"
                : "col-span-2";

            return (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                category={post.category.name}
                images={post.images ?? []}
                excerpt={index === 0 ? post.summary : undefined}
                variant="equal"
                animationDelay={index * 0.05}
                className={clsx(
                  "min-w-0 min-h-0 h-full w-full relative",
                  colSpan
                )}
              />
            );
          })}
        </div>

        {posts.length === 0 && !loading && (
          <ScrollReveal>
            <div className="text-center text-[--text-secondary] py-12 sm:py-16 lg:py-20">
              <div className="text-4xl sm:text-5xl mb-4">📭</div>
              <p className="text-base sm:text-lg">표시할 콘텐츠가 없습니다.</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
