import { apiClient } from "@/lib/api/axios-instance";
import type { BlogPost, BlogListApiResponse, BlogListQueryParams } from "@/types/blog";

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

/**
 * 블로그 리스트 조회 (커서 페이징)
 */
export const getBlogList = async (
  params: BlogListQueryParams = {}
): Promise<BlogListApiResponse> => {
  try {
    const { limit = 10, sort = "DESC", cursor } = params;
    
    const queryParams = new URLSearchParams();
    queryParams.append("limit", limit.toString());
    queryParams.append("sort", sort);
    if (cursor !== undefined) {
      queryParams.append("cursor", cursor.toString());
    }

    const response = await apiClient.get<BlogListApiResponse>(
      `/api/v1/blog?${queryParams.toString()}`
    );
    
    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to fetch blog list");
    }
    
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to fetch blog list");
  }
};
