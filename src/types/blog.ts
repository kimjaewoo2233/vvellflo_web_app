/**
 * 블로그 카테고리 타입
 */
export interface BlogCategory {
  id: number;
  name: string;
}

/**
 * 작성자 정보 타입
 */
export interface Writer {
  id: number;
  nickname: string;
}

export interface BlogImage {
  id: number;
  imageUrl: string;
  postId: number;
  sortOrder: number;
  caption: string;
  createdAt: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  summary: string;
  orderNo: number;
  createdAt: string;
  updatedAt: string;
  category: BlogCategory;
  images: BlogImage[];
  isHot: boolean;
  isLike: boolean;
  likeCount: number;
  viewCount: number;
  imageUrl?: string;
  thumbnail?: string;
  writer?: Writer;
  isLiked?: boolean;
}

/**
 * 블로그 포스트 목록 응답 타입
 */
export interface BlogPostListResponse {
  data: BlogPost[];
  message: string;
  success: boolean;
}

/**
 * 블로그 포스트 상세 응답 타입
 */
export interface BlogPostDetailResponse {
  data: BlogPost;
  message: string;
  success: boolean;
}

/**
 * 블로그 포스트 생성/수정 요청 타입
 */
export interface BlogPostRequest {
  title: string;
  content: string;
  thumbnail?: string;
  categoryId: number;
}

/**
 * 블로그 목록 조회 쿼리 파라미터
 */
export interface BlogListParams {
  page?: number;
  limit?: number;
  categoryId?: number;
  search?: string;
  sortBy?: "latest" | "popular" | "views";
}
