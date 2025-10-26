"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import VvellfloLogo from "@/components/icons/VvellfloLogo";

export default function LandingHeader() {
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 2px 8px rgba(0,0,0,0.3)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(51, 51, 51, 0)", "rgba(51, 51, 51, 0.5)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        borderBottom: `1px solid ${headerBorder}`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VvellfloLogo width={120} height={26} className="h-6 w-auto" />
            </motion.div>
          </Link>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              href="#about"
              className="text-[--text-secondary] hover:text-[--text-primary] transition-colors font-medium"
            >
              소개
            </Link>
            <Link
              href="#content"
              className="text-[--text-secondary] hover:text-[--text-primary] transition-colors font-medium"
            >
              콘텐츠
            </Link>
            <Link
              href="#contact"
              className="text-[--text-secondary] hover:text-[--text-primary] transition-colors font-medium"
            >
              문의
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 bg-gradient-to-r from-[--primary-from] to-[--primary-to] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              블로그 보기
            </Link>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-[--text-secondary] hover:text-[--text-primary]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
