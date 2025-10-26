import { apiClient } from "./axios-instance";
import type { BlogPost, BlogPostListResponse } from "@/types/blog";

/**
 * 블로그 API 엔드포인트
 */
const BLOG_ENDPOINTS = {
  RELATED: (id: number) => `/api/v1/blog/${id}/related`,
} as const;

/**
 * 블로그 API 클래스
 */
export class BlogApi {
  /**
   * 관련 블로그 포스트 조회 (랜덤)
   * @param id - 블로그 포스트 ID
   * @returns 관련 블로그 포스트 목록 (최대 5개)
   */
  static async getRelatedPosts(id: number): Promise<BlogPost[]> {
    const response = await apiClient.get<BlogPostListResponse>(
      BLOG_ENDPOINTS.RELATED(id)
    );
    return response.data.data;
  }
}

/**
 * 관련 블로그 포스트 조회
 */
export const getRelatedBlogPosts = (id: number) => BlogApi.getRelatedPosts(id);
