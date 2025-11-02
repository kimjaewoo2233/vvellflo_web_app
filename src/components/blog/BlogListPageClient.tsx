"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import BlogCard from "./BlogCard";
import { getBlogList } from "@/lib/api/blog";
import type { BlogListApiResponse, BlogPost } from "@/types/blog";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface BlogListPageClientProps {
  initialData: BlogListApiResponse | null;
}

export default function BlogListPageClient({
  initialData,
}: BlogListPageClientProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialData?.data || []);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(
    initialData?.meta.cursorPagination.hasNext || false
  );
  const [nextCursor, setNextCursor] = useState<number | null>(
    initialData?.meta.cursorPagination.nextCursor || null
  );
  const [error, setError] = useState<string | null>(null);
  const [initialLoadCount] = useState(initialData?.data.length || 0);

  // 필터링
  const filteredPosts = useMemo(() => {
    return posts;
  }, [posts]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasNextPage || !nextCursor) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await getBlogList({
        limit: 10,
        sort: "DESC",
        cursor: nextCursor,
      });

      setPosts((prev) => [...prev, ...response.data]);
      setHasNextPage(response.meta.cursorPagination.hasNext);
      setNextCursor(response.meta.cursorPagination.nextCursor);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "블로그 목록을 불러올 수 없습니다."
      );
      console.error("Failed to load more posts:", err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasNextPage, nextCursor]);

  // Intersection Observer를 이용한 무한 스크롤
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = document.getElementById("load-more-sentinel");
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [hasNextPage, isLoading, loadMore]);

  if (!initialData && posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl sm:text-5xl mb-4">⚠️</div>
          <p className="text-[--text-secondary] text-base sm:text-lg">
            블로그 목록을 불러올 수 없습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[--background]">
      {/* 헤더 섹션 - 고정 */}
      <section className="sticky top-0 h-screen flex items-center justify-center border-b border-[--border] overflow-hidden">
        {/* 배경 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7DD5F3]/5 via-transparent to-transparent pointer-events-none" />

        {/* 플로팅 요소들 */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-[#7DD5F3]/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-[#7DD5F3]/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              {/* 상단 배지 */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#7DD5F3]/10 backdrop-blur-sm border border-[#7DD5F3]/30 rounded-full mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <HiSparkles className="w-5 h-5 text-[#7DD5F3]" />
                </motion.div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#7DD5F3] uppercase tracking-wider">
                  Vvellflo Blog
                </span>
              </motion.div>

              {/* 메인 타이틀 */}
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
                style={{ fontFamily: "'GMarketSans', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="bg-gradient-to-r from-white via-[#7DD5F3] to-white bg-clip-text text-transparent">
                  VVellflo
                </span>
              </motion.h1>

              {/* 설명 */}
              <motion.p
                className="text-[--text-secondary] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
                style={{ fontFamily: "'GMarketSans', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                건강한 삶을 위한 인사이트와 실천 가능한 팁,
                <br className="hidden sm:block" />
                웰플로의 콘텐츠로 더 나은 내일을 만들어가세요.
              </motion.p>

              {/* 통계 정보 */}
              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7DD5F3] mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  >
                    {posts.length}+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[--text-muted]">
                    포스트
                  </div>
                </div>

                <div className="text-center border-x border-[--border]">
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7DD5F3] mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  >
                    {new Set(posts.map((p) => p.category?.name)).size}+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[--text-muted]">
                    카테고리
                  </div>
                </div>

                <div className="text-center">
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7DD5F3] mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ∞
                    </motion.span>
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[--text-muted]">
                    인사이트
                  </div>
                </div>
              </motion.div>

              {/* 스크롤 인디케이터 */}
              <motion.div
                className="fixed bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-2 text-[--text-muted] cursor-pointer hover:text-[#7DD5F3] transition-colors"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  onClick={() => {
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  <span className="text-xs font-medium">Scroll Down</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#7DD5F3]"
                  >
                    <path
                      d="M12 5V19M12 19L6 13M12 19L18 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 블로그 목록 섹션 */}
      <section className="relative bg-black z-10 py-12 sm:py-16 lg:py-20 bg-[--background]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {filteredPosts.length > 0 ? (
            <>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.05,
                    },
                  },
                }}
              >
                {filteredPosts.map((post, index) => {
                  // 초기 로드된 아이템인지 확인
                  const isInitialItem = index < initialLoadCount;

                  return (
                    <motion.div
                      key={`${post.id}-${index}`}
                      variants={
                        isInitialItem
                          ? {
                              hidden: {
                                opacity: 0,
                                y: 30,
                                scale: 0.95,
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                  duration: 0.5,
                                  ease: [0.25, 0.4, 0.25, 1],
                                },
                              },
                            }
                          : undefined
                      }
                      initial={
                        isInitialItem
                          ? "hidden"
                          : { opacity: 0, y: 30, scale: 0.95 }
                      }
                      animate={
                        isInitialItem
                          ? "visible"
                          : { opacity: 1, y: 0, scale: 1 }
                      }
                      transition={
                        isInitialItem
                          ? undefined
                          : {
                              duration: 0.5,
                              ease: [0.25, 0.4, 0.25, 1],
                            }
                      }
                      whileHover={{
                        y: -8,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                      className="flex"
                    >
                      <BlogCard
                        id={post.id}
                        title={post.title}
                        category={post.category?.name || "미분류"}
                        images={post.images ?? []}
                        excerpt={post.summary}
                        variant="equal"
                        animationDelay={0}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* 무한 스크롤 센티널 */}
              {hasNextPage && (
                <div
                  id="load-more-sentinel"
                  className="py-8 sm:py-12 flex justify-center"
                >
                  {isLoading && (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-8 h-8 border-2 border-[#7DD5F3] border-t-transparent rounded-full"
                      />
                      <span className="text-sm text-[--text-secondary]">
                        더 불러오는 중...
                      </span>
                    </motion.div>
                  )}
                </div>
              )}

              {/* 더 이상 포스트가 없을 때 */}
              {!hasNextPage && posts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12 sm:py-16"
                >
                  <p className="text-[--text-secondary] text-sm sm:text-base">
                    모든 포스트를 불러왔습니다.
                  </p>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center text-[--text-secondary] py-12 sm:py-16 lg:py-20"
            >
              <div className="text-4xl sm:text-5xl mb-4">📭</div>
              <p className="text-base sm:text-lg">
                표시할 블로그 포스트가 없습니다.
              </p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
            >
              {error}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
