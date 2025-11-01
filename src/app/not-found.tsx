"use client";

import VvellfloLogo from "@/components/icons/VvellfloLogo";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdHome, MdArrowBack, MdSearch } from "react-icons/md";

export default function NotFoundPage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div className="min-h-screen bg-[--background] flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#7DD5F3]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Link href="/" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#7DD5F3] to-[#5EC8E8] bg-clip-text text-transparent"
            >
              <VvellfloLogo
                width={350}
                height={87}
                className="h-20 md:h-24 w-auto"
              />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div animate={floatingAnimation} className="mb-8">
          <motion.div
            variants={itemVariants}
            className="text-[120px] sm:text-[180px] font-bold leading-none"
          >
            <span className="bg-gradient-to-r from-[#7DD5F3] to-[#5EC8E8] bg-clip-text text-transparent">
              404
            </span>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-lg text-[--text-secondary] leading-relaxed">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 다시 확인해주세요.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(125, 213, 243, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="w-full sm:w-auto px-8 py-4 bg-[--surface] border border-[--border] rounded-lg font-semibold hover:border-[#7DD5F3] transition-colors flex items-center justify-center gap-2"
          >
            <MdArrowBack className="w-5 h-5" />
            <span>이전 페이지</span>
          </motion.button>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(125, 213, 243, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/"
              className="block px-8 py-4 bg-[#7DD5F3] text-[--background] rounded-lg font-semibold hover:bg-[#5EC8E8] transition-colors flex items-center justify-center gap-2"
            >
              <MdHome className="w-5 h-5" />
              <span>홈으로</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-sm text-[--text-muted] mb-4">자주 찾는 페이지</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "블로그", href: "/" },
              { label: "소개", href: "/about" },
              { label: "문의", href: "/contact" },
            ].map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 bg-[--surface] border border-[--border] rounded-full text-sm hover:border-[#7DD5F3] hover:text-[#7DD5F3] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-[--border]"
        >
          <div className="flex items-center justify-center gap-2 text-[--text-muted] text-sm">
            <MdSearch className="w-4 h-4" />
            <p>도움이 필요하신가요? 검색을 이용해보세요.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
