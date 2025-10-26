# API Client 사용 가이드

## 설정

`.env.local` 파일에 다음 환경변수를 추가하세요:

```env
NEXT_PUBLIC_API_KEY=your-api-key-here
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

## 기본 사용법

### 1. 기본 API 클라이언트 사용

```typescript
import { apiClient } from "@/lib/api/axios-instance";

// GET 요청
const getUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

// POST 요청
const createUser = async (userData: any) => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

// PUT 요청
const updateUser = async (userId: string, userData: any) => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
};

// DELETE 요청
const deleteUser = async (userId: string) => {
  try {
    const response = await apiClient.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};
```

### 2. TypeScript 타입 지정

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = async (userId: string): Promise<User> => {
  const response = await apiClient.get<User>(`/users/${userId}`);
  return response.data;
};
```

### 3. 커스텀 API 키 사용

특정 요청에만 다른 API 키를 사용해야 하는 경우:

```typescript
import { createApiClient } from "@/lib/api/axios-instance";

const customClient = createApiClient("custom-api-key-here");

const response = await customClient.get("/special-endpoint");
```

### 4. React Query와 함께 사용

```typescript
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/axios-instance";

// GET 요청
const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await apiClient.get("/users");
      return response.data;
    },
  });
};

// POST 요청
const useCreateUser = () => {
  return useMutation({
    mutationFn: async (userData: any) => {
      const response = await apiClient.post("/users", userData);
      return response.data;
    },
  });
};
```

## 주요 기능

### 자동 헤더 추가

- 모든 요청에 `x-api-key` 헤더가 자동으로 추가됩니다
- `Content-Type: application/json`이 기본으로 설정됩니다

### 에러 핸들링

- 네트워크 에러, 서버 에러 등이 자동으로 로깅됩니다
- 개발 환경에서는 콘솔에 상세한 로그가 출력됩니다

### 타임아웃

- 기본 타임아웃은 30초로 설정되어 있습니다
- 필요시 개별 요청에서 변경 가능합니다

```typescript
const response = await apiClient.get("/slow-endpoint", {
  timeout: 60000, // 60초
});
```

## 참고사항

- API 키는 반드시 환경변수로 관리하세요
- `.env.local` 파일은 절대 git에 커밋하지 마세요
- 프로덕션 환경에서는 적절한 에러 처리를 구현하세요
