"use client";

import { useRouter } from "next/navigation";

export default function BackToHomeButton() {
  const router = useRouter();

  return (
    <div className="mt-12 flex justify-center">
      <button
        onClick={() => router.push("/")}
        className="px-8 py-3 bg-linear-to-r from-[--primary-from] to-[--primary-to] text-[--background] font-semibold rounded-lg hover:shadow-[0_0_32px_rgba(125,213,243,0.45)] transition-all duration-300 hover:scale-105"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
