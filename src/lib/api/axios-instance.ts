import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

/**
 * Axios 인스턴스 설정
 * - 모든 요청에 x-api-key 헤더 자동 추가
 * - 기본 타임아웃 및 에러 핸들링 포함
 */

// 환경변수에서 API 키와 베이스 URL 가져오기
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "test";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/";

// const BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.vvellflo.com/";

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 30초
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 요청 인터셉터
 * - 모든 요청에 x-api-key 헤더 추가
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // x-api-key 헤더 추가
    if (API_KEY) {
      config.headers["x-api-key"] = API_KEY;
    }

    // 개발 환경에서 요청 로깅
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Request] ${config.method?.toUpperCase()} ${config.url}`
      );
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 응답 인터셉터
 * - 에러 핸들링 및 로깅
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // 개발 환경에서 응답 로깅
    if (process.env.NODE_ENV === "development") {
      console.log(`[API Response] ${response.config.url}`, response.status);
    }
    return response;
  },
  (error: AxiosError) => {
    // 에러 로깅
    if (error.response) {
      // 서버가 응답을 반환한 경우 (4xx, 5xx)
      console.error(
        `[API Error] ${error.response.status}:`,
        error.response.data
      );
    } else if (error.request) {
      // 요청이 전송되었지만 응답을 받지 못한 경우
      console.error("[API Error] No response received:", error.message);
    } else {
      // 요청 설정 중 에러가 발생한 경우
      console.error("[API Error] Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);

/**
 * API 클라이언트 함수들
 */
export const apiClient = {
  /**
   * GET 요청
   */
  get: <T = any>(url: string, config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(url, config);
  },

  /**
   * POST 요청
   */
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosInstance.post<T>(url, data, config);
  },

  /**
   * PUT 요청
   */
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosInstance.put<T>(url, data, config);
  },

  /**
   * PATCH 요청
   */
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosInstance.patch<T>(url, data, config);
  },

  /**
   * DELETE 요청
   */
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => {
    return axiosInstance.delete<T>(url, config);
  },
};

/**
 * 커스텀 API 키로 요청하는 인스턴스 생성
 */
export const createApiClient = (customApiKey: string): AxiosInstance => {
  const customInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": customApiKey,
    },
  });

  // 동일한 인터셉터 적용
  customInstance.interceptors.request.use(
    (config) => {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[Custom API Request] ${config.method?.toUpperCase()} ${config.url}`
        );
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  customInstance.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[Custom API Response] ${response.config.url}`,
          response.status
        );
      }
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        console.error(
          `[Custom API Error] ${error.response.status}:`,
          error.response.data
        );
      } else if (error.request) {
        console.error(
          "[Custom API Error] No response received:",
          error.message
        );
      } else {
        console.error("[Custom API Error] Request setup error:", error.message);
      }
      return Promise.reject(error);
    }
  );

  return customInstance;
};

export default axiosInstance;
