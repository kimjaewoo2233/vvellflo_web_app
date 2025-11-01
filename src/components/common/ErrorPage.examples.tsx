import {
  MdOutlineArticle,
  MdErrorOutline,
  MdWarning,
  MdLock,
  MdBuildCircle,
  MdSignalCellularAlt,
  MdSchedule,
} from "react-icons/md";
import type { ErrorPageConfig } from "./ErrorPage";

export const errorPageExamples = {
  notFound: {
    icon: <MdOutlineArticle className="w-full h-full" />,
    title: "페이지를 찾을 수 없습니다",
    description: "요청하신 페이지가 존재하지 않거나 삭제되었습니다.",
    color: "from-orange-500/20 to-red-500/20",
    actions: {
      secondary: {
        label: "홈으로",
        href: "/",
      },
    },
  } as ErrorPageConfig,

  unauthorized: {
    icon: <MdLock className="w-full h-full" />,
    title: "접근 권한이 없습니다",
    description: "이 페이지에 접근할 권한이 없습니다. 로그인 후 다시 시도해주세요.",
    color: "from-yellow-500/20 to-orange-500/20",
    actions: {
      secondary: {
        label: "로그인",
        href: "/login",
      },
    },
  } as ErrorPageConfig,

  serverError: {
    icon: <MdWarning className="w-full h-full" />,
    title: "서버 오류가 발생했습니다",
    description: "일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    color: "from-red-500/20 to-pink-500/20",
    actions: {
      secondary: {
        label: "홈으로",
        href: "/",
      },
    },
  } as ErrorPageConfig,

  maintenance: {
    icon: <MdBuildCircle className="w-full h-full" />,
    title: "점검 중입니다",
    description: "더 나은 서비스를 제공하기 위해 점검 중입니다. 잠시 후 다시 방문해주세요.",
    color: "from-blue-500/20 to-cyan-500/20",
    actions: {
      secondary: {
        label: "홈으로",
        href: "/",
      },
    },
  } as ErrorPageConfig,

  networkError: {
    icon: <MdSignalCellularAlt className="w-full h-full" />,
    title: "네트워크 연결 오류",
    description: "인터넷 연결을 확인하고 다시 시도해주세요.",
    color: "from-purple-500/20 to-pink-500/20",
    actions: {
      secondary: {
        label: "다시 시도",
        href: "/",
      },
    },
  } as ErrorPageConfig,

  timeout: {
    icon: <MdSchedule className="w-full h-full" />,
    title: "요청 시간 초과",
    description: "요청 처리 시간이 초과되었습니다. 잠시 후 다시 시도해주세요.",
    color: "from-indigo-500/20 to-blue-500/20",
    actions: {
      secondary: {
        label: "다시 시도",
        href: "/",
      },
    },
  } as ErrorPageConfig,
};
