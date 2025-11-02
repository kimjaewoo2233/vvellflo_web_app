"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import VvellfloLogo from "@/components/icons/VvellfloLogo";
import loadingAnimation from "@/animations/loading.json";

export default function BlogListLoadingPage() {
  return (
    <div className="min-h-screen bg-[--background] flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* 로고 애니메이션 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <VvellfloLogo width={200} height={44} className="text-white" />
          </motion.div>

          {/* 글로우 효과 */}
          <motion.div
            className="absolute inset-0 blur-xl opacity-30"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <VvellfloLogo width={200} height={44} className="text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Lottie 로딩 애니메이션 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="w-40 h-40"
        >
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* 로딩 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-center"
        >
          <motion.p
            className="text-white/80 text-lg font-medium"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            블로그를 불러오는 중...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
