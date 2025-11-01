import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "@/lib/api/blog";

export const useBlogPostQuery = (postId: string | number) => {
  return useQuery({
    queryKey: ["blog", "post", postId],
    queryFn: () => getBlogPost(postId),
    enabled: !!postId,
  });
};
