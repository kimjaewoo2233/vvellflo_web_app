"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/motion/ScrollReveal";
import VvellfloLogo from "@/components/icons/VvellfloLogo";
import BentoGrid from "@/components/blog/BentoGrid";
import { FiLayers, FiBookOpen, FiZap } from "react-icons/fi";

export default function LandingPage() {
  const router = useRouter();

  const handleExploreClick = useCallback(() => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleLearnMoreClick = useCallback(() => {
    router.push("/flo");
  }, [router]);

  const handleBlogClick = useCallback(() => {
    router.push("/flo");
  }, [router]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-7xl font-bold text-[--text-primary] mb-6">
              건강한 삶을 위한
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex justify-center mb-8 px-2 md:px-0">
              <VvellfloLogo
                width={400}
                height={87}
                className="h-20 md:h-24 md:w-auto w-[16rem]"
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
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[--surface] to-[rgba(125,213,243,0.03)] hover:from-[rgba(125,213,243,0.08)] hover:to-[rgba(255,239,167,0.05)] transition-all duration-500 border border-[--border] hover:border-[--primary-from]/40 hover:shadow-[0_12px_40px_rgba(125,213,243,0.15)] overflow-hidden cursor-pointer transform hover:translate-y-[-4px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[--primary-from]/5 via-transparent to-[--primary-to]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[--primary-from] to-[--primary] rounded-xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FiLayers className="w-7 h-7 text-[--background]" />
                </div>
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  단계별 콘텐츠
                </h3>
                <p className="relative text-[--text-secondary] leading-relaxed">
                  초보자부터 전문가까지, 자신에게 맞는 레벨의 콘텐츠를 선택해
                  즐길 수 있습니다
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[--surface] to-[rgba(189,226,125,0.03)] hover:from-[rgba(189,226,125,0.08)] hover:to-[rgba(125,213,243,0.05)] transition-all duration-500 border border-[--border] hover:border-[--primary]/40 hover:shadow-[0_12px_40px_rgba(189,226,125,0.15)] overflow-hidden cursor-pointer transform hover:translate-y-[-4px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[--primary]/5 via-transparent to-[--primary-from]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[--primary] to-[--primary-to] rounded-xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FiBookOpen className="w-7 h-7 text-[--background]" />
                </div>
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  다양한 주제
                </h3>
                <p className="relative text-[--text-secondary] leading-relaxed">
                  운동, 영양, 정신건강 등 건강한 삶의 모든 측면을 다룹니다
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[--surface] to-[rgba(255,239,167,0.03)] hover:from-[rgba(255,239,167,0.08)] hover:to-[rgba(189,226,125,0.05)] transition-all duration-500 border border-[--border] hover:border-[--primary-to]/40 hover:shadow-[0_12px_40px_rgba(255,239,167,0.15)] overflow-hidden cursor-pointer transform hover:translate-y-[-4px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[--primary-to]/5 via-transparent to-[--primary]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[--primary-to] to-[--primary-from] rounded-xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FiZap className="w-7 h-7 text-[--background]" />
                </div>
                <h3 className="text-2xl font-bold text-[--text-primary] mb-4">
                  실천 가능한 팁
                </h3>
                <p className="relative text-[--text-secondary] leading-relaxed">
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
            <button
              onClick={handleBlogClick}
              className="group relative px-8 py-4 bg-[--background] text-white border-2 border-white/30 hover:border-white rounded-lg overflow-hidden transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10">블로그 보러가기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
