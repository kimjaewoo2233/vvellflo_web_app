"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by boundary:", error);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error!, this.reset);
      }

      return (
        <div className="min-h-screen bg-[--background] flex flex-col items-center justify-center gap-4">
          <div className="text-5xl">⚠️</div>
          <p className="text-[--text-secondary]">문제가 발생했습니다.</p>
          <p className="text-sm text-[--text-muted]">
            {this.state.error?.message}
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={this.reset}
              className="px-6 py-2 bg-[#7DD5F3] text-[--background] rounded-lg hover:bg-[#5EC8E8] transition-colors"
            >
              다시 시도
            </button>
            <Link
              href="/"
              className="px-6 py-2 border border-[--border] rounded-lg hover:bg-[--surface] transition-colors"
            >
              홈으로
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
