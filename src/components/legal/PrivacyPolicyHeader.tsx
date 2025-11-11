"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function PrivacyPolicyHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-[--surface]/80 backdrop-blur-lg border-b border-[--border]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[--text-secondary] hover:text-[--primary] transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>뒤로가기</span>
          </button>
        </div>
      </div>
    </header>
  );
}
