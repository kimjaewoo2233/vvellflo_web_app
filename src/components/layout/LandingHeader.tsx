"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import VvellfloLogo from "@/components/icons/VvellfloLogo";
import { FiMenu, FiX } from "react-icons/fi";

export default function LandingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            {/* <Link
              href="/blog"
              className="px-4 py-2 bg-gradient-to-r from-[--primary-from] to-[--primary-to] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              블로그 보기
            </Link> */}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[--text-secondary] hover:text-[--text-primary] transition-colors relative"
            style={{ zIndex: 9999 }}
            whileTap={{ scale: 0.95 }}
            aria-label="메뉴 토글"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md md:hidden"
              style={{ zIndex: 9997 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[--surface] border-l border-[--border] md:hidden shadow-2xl"
              style={{ zIndex: 9998 }}
            >
              <div className="flex flex-col h-screen pt-24 px-6 pb-8 bg-black">
                <nav className="flex flex-col space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="#about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center space-x-3 text-[--text-secondary] hover:text-[--text-primary] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-[--surface-hover]"
                    >
                      <span className="w-1 h-6 bg-gradient-to-b from-[--primary-from] to-[--primary] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>소개</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Link
                      href="#content"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center space-x-3 text-[--text-secondary] hover:text-[--text-primary] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-[--surface-hover]"
                    >
                      <span className="w-1 h-6 bg-gradient-to-b from-[--primary] to-[--primary-to] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>콘텐츠</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center space-x-3 text-[--text-secondary] hover:text-[--text-primary] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-[--surface-hover]"
                    >
                      <span className="w-1 h-6 bg-gradient-to-b from-[--primary-to] to-[--primary-from] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>문의</span>
                    </Link>
                  </motion.div>
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pt-6 border-t border-[--border]"
                >
                  <p className="text-xs text-[--text-muted] text-center">
                    © 2025 vvellflo. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
