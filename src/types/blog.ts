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

/**
 * 커서 페이징 메타 정보
 */
export interface CursorPaginationMeta {
  count: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextCursor: number | null;
  prevCursor: number | null;
  currentCursor: number | null;
  sortDirection: "ASC" | "DESC";
}

/**
 * 페이지네이션 메타 정보
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

/**
 * 블로그 리스트 API 응답 메타
 */
export interface BlogListResponseMeta {
  timestamp: string;
  pagination: PaginationMeta;
  cursorPagination: CursorPaginationMeta;
}

/**
 * 블로그 리스트 API 응답
 */
export interface BlogListApiResponse {
  success: boolean;
  message: string;
  data: BlogPost[];
  meta: BlogListResponseMeta;
}

/**
 * 블로그 리스트 조회 파라미터
 */
export interface BlogListQueryParams {
  limit?: number;
  sort?: "ASC" | "DESC";
  cursor?: number;
}
