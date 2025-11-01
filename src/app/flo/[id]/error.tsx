"use client";

import { useEffect } from "react";
import { MdOutlineArticle, MdErrorOutline, MdWarning } from "react-icons/md";
import ErrorPage, { type ErrorPageConfig } from "@/components/common/ErrorPage";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogDetailError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Blog detail error:", error);
  }, [error]);

  const isNotFound =
    error.message.includes("404") || error.message.includes("찾을 수 없습니다");
  const isServerError =
    error.message.includes("500") || error.message.includes("서버");

  const errorConfigs: Record<string, ErrorPageConfig> = {
    notFound: {
      icon: <MdOutlineArticle className="w-full h-full" />,
      title: "글을 찾을 수 없습니다",
      description: "요청하신 블로그 글이 존재하지 않거나 삭제되었습니다.",
      color: "from-orange-500/20 to-red-500/20",
      errorId: error.digest,
      actions: {
        primary: {
          label: "다시 시도",
          onClick: reset,
        },
        secondary: {
          label: "홈으로",
          href: "/",
        },
        tertiary: {
          label: "← 다른 글 보기",
          href: "/",
        },
      },
    },
    serverError: {
      icon: <MdWarning className="w-full h-full" />,
      title: "서버 오류가 발생했습니다",
      description: "일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
      color: "from-red-500/20 to-pink-500/20",
      errorId: error.digest,
      actions: {
        primary: {
          label: "다시 시도",
          onClick: reset,
        },
        secondary: {
          label: "홈으로",
          href: "/",
        },
      },
    },
    default: {
      icon: <MdErrorOutline className="w-full h-full" />,
      title: "문제가 발생했습니다",
      description: "예상치 못한 오류가 발생했습니다.",
      color: "from-blue-500/20 to-cyan-500/20",
      errorId: error.digest,
      actions: {
        primary: {
          label: "다시 시도",
          onClick: reset,
        },
        secondary: {
          label: "홈으로",
          href: "/",
        },
      },
    },
  };

  const config = isNotFound
    ? errorConfigs.notFound
    : isServerError
    ? errorConfigs.serverError
    : errorConfigs.default;

  return <ErrorPage config={config} />;
}
