import { useQuery } from "@tanstack/react-query";
import { getRelatedBlogPosts } from "@/lib/api";

export const useRelatedBlogPostsQuery = (postId: number) => {
  return useQuery({
    queryKey: ["blog", "related", postId],
    queryFn: () => getRelatedBlogPosts(postId),
  });
};
