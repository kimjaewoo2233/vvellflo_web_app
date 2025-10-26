import React, { Component, ErrorInfo, ReactNode } from "react";

// 컴포넌트에 전달될 Props 타입
interface ErrorBoundaryProps {
  children: ReactNode;
  // fallback UI를 prop으로 받아 유연하게 대처합니다.
  // 재시도 함수(reset)를 인자로 받을 수 있도록 설계합니다.
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

// 컴포넌트가 가질 State 타입
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// 간단한 기본 폴백 UI
const DefaultFallback = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => (
  <div role="alert" style={fallbackStyles.container}>
    <h2 style={fallbackStyles.title}>Oops! Something went wrong.</h2>
    <p style={fallbackStyles.message}>
      We encountered an error and our team has been notified.
    </p>
    {process.env.NODE_ENV !== "production" && (
      <pre style={fallbackStyles.pre}>{error.message}</pre>
    )}
    <button onClick={reset} style={fallbackStyles.button}>
      Try Again
    </button>
  </div>
);

/**
 * React 16+의 에러 바운더리 구현체입니다.
 * 하위 컴포넌트 트리의 렌더링 에러 및 Suspense의 비동기 에러를 캐치합니다.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // 1. 초기 상태를 정의합니다.
  // 에러가 없는(hasError: false) 상태로 시작합니다.
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  /**
   * 2. (핵심) 하위 컴포넌트에서 에러가 발생했을 때 호출됩니다. (Render Phase)
   * 이 메서드는 오직 state를 업데이트하는 용도로만 사용해야 합니다.
   * @param error - 발생한 에러 객체
   * @returns 새로운 state 객체
   */
  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // state를 업데이트하여 다음 렌더링에서 폴백 UI를 표시하도록 합니다.
    return { hasError: true, error: error };
  }

  /**
   * 3. (핵심) 에러가 발생한 후 호출됩니다. (Commit Phase)
   * 이 메서드는 에러 로깅과 같은 사이드 이펙트를 수행하기에 적합합니다.
   * @param error - 발생한 에러 객체
   * @param errorInfo - 컴포넌트 스택 추적 정보를 포함한 객체
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Sentry, LogRocket, Datadog 등 실제 프로덕션 로깅 서비스에 에러를 전송합니다.
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // ex: logErrorToMyService(error, errorInfo.componentStack);
  }

  /**
   * "Try Again" 버튼이 클릭되었을 때 호출될 리셋 함수입니다.
   * 에러 상태를 초기화하여 하위 컴포넌트를 다시 렌더링하도록 시도합니다.
   */
  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  /**
   * 4. 컴포넌트의 UI를 렌더링합니다.
   */
  public render() {
    // 5. state.hasError가 true이면, 폴백 UI를 렌더링합니다.
    if (this.state.hasError && this.state.error) {
      // 6. Prop으로 커스텀 fallback이 전달되었는지 확인합니다.
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset);
      }

      // 커스텀 fallback이 없으면, 기본으로 내장된 DefaultFallback을 사용합니다.
      return (
        <DefaultFallback error={this.state.error} reset={this.handleReset} />
      );
    }

    // 7. 에러가 없으면, 자식 컴포넌트(children)를 정상적으로 렌더링합니다.
    return this.props.children;
  }
}

export default ErrorBoundary;

// 간단한 인라인 스타일 (CSS-in-JS 라이브러리로 대체 가능)
const fallbackStyles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    padding: "2rem",
    border: "1px solid #ff4d4f",
    borderRadius: "8px",
    backgroundColor: "#fff1f0",
    color: "#a8071a",
    margin: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 600,
    margin: "0 0 0.5rem 0",
  },
  message: {
    margin: "0 0 1rem 0",
  },
  pre: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    background: "#fffbe6",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px dashed #d48806",
  },
  button: {
    cursor: "pointer",
    padding: "0.5rem 1rem",
    border: "1px solid #ff7875",
    backgroundColor: "#ff4d4f",
    color: "white",
    borderRadius: "4px",
    fontWeight: 500,
  },
};
