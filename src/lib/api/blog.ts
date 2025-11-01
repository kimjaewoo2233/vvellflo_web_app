import { apiClient } from "@/lib/api/axios-instance";
import type { BlogPost } from "@/types/blog";

interface BlogPostResponse {
  success: boolean;
  message: string;
  data: BlogPost;
  meta: {
    timestamp: string;
  };
}

export const getBlogPost = async (postId: string | number): Promise<BlogPost> => {
  try {
    const response = await apiClient.get<BlogPostResponse>(
      `/api/v1/blog/${postId}`
    );
    
    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to fetch blog post");
    }
    
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Failed to fetch blog post: ${postId}`);
  }
};
