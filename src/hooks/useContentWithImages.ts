import { useMemo } from "react";
import type { BlogImage } from "@/types/blog";

interface ContentPart {
  type: "text" | "image";
  content: string | BlogImage;
}

export const useContentWithImages = (
  content: string,
  images: BlogImage[]
): ContentPart[] => {
  return useMemo(() => {
    return [{ type: "text", content }];
  }, [content, images]);
};
