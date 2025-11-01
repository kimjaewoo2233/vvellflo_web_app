import type { BlogImage } from "@/types/blog";

export const parseContentWithImages = (
  content: string,
  images: BlogImage[]
): (string | BlogImage)[] => {
  if (!images || images.length === 0) {
    return [content];
  }

  const parts: (string | BlogImage)[] = [];
  const contentLength = content.length;
  const chunkSize = Math.floor(contentLength / (images.length + 1));

  let currentIndex = 0;

  for (let i = 0; i <= images.length; i++) {
    const endIndex = i === images.length ? contentLength : (i + 1) * chunkSize;
    const textPart = content.substring(currentIndex, endIndex).trim();

    if (textPart) {
      parts.push(textPart);
    }

    if (i < images.length) {
      parts.push(images[i]);
    }

    currentIndex = endIndex;
  }

  return parts;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const estimateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};
