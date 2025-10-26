"use client";

import { useCallback } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import VvellfloLogo from "@/components/icons/VvellfloLogo";
import BentoGrid from "@/components/blog/BentoGrid";
import { toastInfo, toastSuccess } from "@/lib/toast";

export default function LandingPage() {
  const handleExploreClick = useCallback(() => {
    toastSuccess("콘텐츠 큐레이션을 준비하고 있어요! 곧 만나보세요 ✨", {
      autoClose: 2600,
    });
  }, []);

  const handleLearnMoreClick = useCallback(() => {
    toastInfo("vvellflo의 여정을 소개하는 페이지를 준비 중입니다.", {
      autoClose: 2600,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-[--text-primary] mb-6">
              건강한 삶을 위한
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex justify-center mb-8">
              <VvellfloLogo
                width={400}
                height={87}
                className="h-20 md:h-24 w-auto"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-xl md:text-2xl font-semibold text-[--text-secondary] mb-8 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
              style={{ fontFamily: "'GMarketSans', sans-serif" }}
            >
              건강, 운동, 영양, 웰빙에 관한 전문적이고 신뢰할 수 있는 콘텐츠를
              만나보세요
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExploreClick}
                className="group relative cursor-pointer px-8 py-4 rounded-lg overflow-hidden text-lg font-semibold text-[--background] bg-gradient-to-r from-[--primary-from] to-[--primary-to] transition-all duration-300 transform-gpu hover:shadow-[0_0_32px_rgba(125,213,243,0.45)] hover:brightness-105 group-hover:translate-y-[-3px] group-hover:scale-[1.02] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-from] before:absolute before:inset-[-40%] before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-70 after:absolute after:inset-y-0 after:left-[-120%] after:w-[120%] after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent after:opacity-70 after:transition-transform after:duration-500 group-hover:after:translate-x-[120%]"
              >
                <span className="relative z-10">콘텐츠 둘러보기</span>
              </button>
              <button
                onClick={handleLearnMoreClick}
                className="group relative cursor-pointer px-8 py-4 text-lg font-semibold text-[--text-primary] border-2 border-[--primary-from] rounded-lg overflow-hidden transition-all duration-300 transform-gpu bg-transparent hover:border-[--primary-to] hover:text-[--background] hover:shadow-[0_0_22px_rgba(125,213,243,0.25)] group-hover:translate-y-[-2px] group-hover:scale-[1.01] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-from] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[--primary-from]/0 before:via-[--primary-from]/18 before:to-[--primary-to]/0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,rgba(255,239,167,0.15),transparent_60%)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100"
              >
                <span className="relative z-10">더 알아보기</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-[--background]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[--text-primary] mb-16">
              왜 vvellflo인가요?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[--surface] hover:bg-[--surface-hover] transition-colors border border-[--border]">
                <div className="w-12 h-12 bg-gradient-to-r from-[--primary-from] to-[--primary-to] rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  단계별 콘텐츠
                </h3>
                <p className="text-[--text-secondary]">
                  초보자부터 전문가까지, 자신에게 맞는 레벨의 콘텐츠를 선택해
                  즐길 수 있습니다
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-[--surface] hover:bg-[--surface-hover] transition-colors border border-[--border]">
                <div className="w-12 h-12 bg-gradient-to-r from-[--primary-from] to-[--primary-to] rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  다양한 주제
                </h3>
                <p className="text-[--text-secondary]">
                  운동, 영양, 정신건강 등 건강한 삶의 모든 측면을 다룹니다
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-[--surface] hover:bg-[--surface-hover] transition-colors border border-[--border]">
                <div className="w-12 h-12 bg-gradient-to-r from-[--primary-from] to-[--primary-to] rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  실천 가능한 팁
                </h3>
                <p className="text-[--text-secondary]">
                  일상에서 바로 적용할 수 있는 실용적인 건강 관리 방법을
                  제공합니다
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[--primary-from] to-[--primary-to] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              지금 바로 시작하세요
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/90 mb-8">
              건강한 삶을 위한 첫 걸음, vvellflo와 함께하세요
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <button className="px-8 py-4 bg-white text-[--primary] rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium shadow-lg">
              블로그 보러가기
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
