"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContentWithImages } from "@/hooks/useContentWithImages";
import type { BlogPost, BlogImage } from "@/types/blog";

interface BlogDetailContentProps {
  post: BlogPost;
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const parts = useContentWithImages(post.content, post.images);

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
    >
      {parts.map((part) => {
        if (part.type === "image") {
          const image = part.content as BlogImage;
          return (
            <motion.div
              key={`image-${image.id}`}
              variants={itemVariants}
              className="my-6 sm:my-8 lg:my-10 rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96">
                <Image
                  src={image.imageUrl}
                  alt={image.caption || "블로그 이미지"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                />
              </div>
              {image.caption && (
                <p className="text-xs sm:text-sm text-[--text-secondary] mt-2 text-center italic">
                  {image.caption}
                </p>
              )}
            </motion.div>
          );
        }

        const text = part.content as string;
        return (
          <motion.div
            key={`text-${part.content}`}
            variants={itemVariants}
            className="whitespace-pre-wrap text-[--text-primary] leading-relaxed text-md sm:text-md lg:text-lg"
          >
            {text.split("\n").map((line, lineIndex) => (
              <div key={lineIndex} className="mb-3 sm:mb-4">
                {line}
              </div>
            ))}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
