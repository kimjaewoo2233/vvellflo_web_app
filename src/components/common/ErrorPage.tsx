"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ErrorPageConfig {
  icon: string | ReactNode;
  title: string;
  description: string;
  color: string;
  errorId?: string;
  actions?: {
    primary?: {
      label: string;
      onClick: () => void;
    };
    secondary?: {
      label: string;
      href: string;
    };
    tertiary?: {
      label: string;
      href: string;
    };
  };
}

interface ErrorPageProps {
  config: ErrorPageConfig;
}

const defaultConfig: ErrorPageConfig = {
  icon: "🔧",
  title: "문제가 발생했습니다",
  description: "예상치 못한 오류가 발생했습니다.",
  color: "from-blue-500/20 to-cyan-500/20",
  actions: {
    secondary: {
      label: "홈으로",
      href: "/",
    },
  },
};

export default function ErrorPage({ config = defaultConfig }: ErrorPageProps) {
  const finalConfig = { ...defaultConfig, ...config };

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

  return (
    <div className="min-h-screen bg-[--background] flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full"
      >
        <div
          className={`bg-linear-to-br ${finalConfig.color} rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-[--border]`}
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="mb-6 flex items-center justify-center">
              {typeof finalConfig.icon === "string" ? (
                <span className="text-6xl sm:text-7xl">{finalConfig.icon}</span>
              ) : (
                <div className="w-24 h-24 text-[#7DD5F3] flex items-center justify-center">
                  {finalConfig.icon}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              {finalConfig.title}
            </h1>
            <p className="text-[--text-secondary] text-sm sm:text-base leading-relaxed">
              {finalConfig.description}
            </p>
          </motion.div>

          {finalConfig.errorId && (
            <motion.div
              variants={itemVariants}
              className="mb-6 p-3 bg-[--surface] rounded-lg border border-[--border]"
            >
              <p className="text-xs text-[--text-muted] font-mono break-all">
                Error ID: {finalConfig.errorId}
              </p>
            </motion.div>
          )}

          {finalConfig.actions && (
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              {finalConfig.actions.primary && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={finalConfig.actions.primary.onClick}
                  className="w-full py-3 px-4 bg-[#7DD5F3] text-[--background] font-semibold rounded-lg hover:bg-[#5EC8E8] transition-colors"
                >
                  {finalConfig.actions.primary.label}
                </motion.button>
              )}

              {finalConfig.actions.secondary && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={finalConfig.actions.secondary.href}
                    className="block py-3 px-4 text-center border border-[--border] rounded-lg text-[--text-primary] hover:bg-[--surface] transition-colors font-semibold"
                  >
                    {finalConfig.actions.secondary.label}
                  </Link>
                </motion.div>
              )}

              {finalConfig.actions.tertiary && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={finalConfig.actions.tertiary.href}
                    className="block text-center text-sm text-[--text-secondary] hover:text-[#7DD5F3] transition-colors py-2"
                  >
                    {finalConfig.actions.tertiary.label}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 text-center text-xs text-[--text-muted]"
        ></motion.div>
      </motion.div>
    </div>
  );
}
