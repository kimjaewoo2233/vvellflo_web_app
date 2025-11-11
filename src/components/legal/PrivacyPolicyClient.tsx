"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function PrivacyPolicyClient() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[--background]">
      {/* Header */}
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

      {/* Main Content */}
      <main className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[--text-primary] mb-4">
                개인정보 처리방침
              </h1>
              <p className="text-lg text-[--text-secondary]">
                vvellflo는 이용자의 개인정보를 소중히 다루며, 관련 법령을
                준수합니다.
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-[--surface] border border-[--border] rounded-2xl p-8 md:p-12">
                <div className="space-y-8">
                  {/* Placeholder Section */}
                  <section>
                    <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
                      개인정보 처리방침 내용
                    </h2>
                    <p className="text-[--text-secondary] leading-relaxed">
                      개인정보 처리방침의 구체적인 내용은 다음 요청에서 제공될
                      예정입니다.
                    </p>
                  </section>

                  {/* Placeholder for future content */}
                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      1. 수집하는 개인정보 항목
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      2. 개인정보의 수집 및 이용 목적
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      3. 개인정보의 보유 및 이용 기간
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      4. 개인정보의 제3자 제공
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      5. 개인정보 처리의 위탁
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      6. 이용자의 권리와 의무
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      7. 개인정보의 파기
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      8. 개인정보 보호책임자
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[--text-primary] mb-3">
                      9. 개인정보 처리방침의 변경
                    </h3>
                    <p className="text-[--text-secondary] leading-relaxed mb-4">
                      내용이 추가될 예정입니다.
                    </p>
                  </section>

                  {/* Last Updated */}
                  <div className="pt-8 border-t border-[--border]">
                    <p className="text-sm text-[--text-muted]">
                      최종 수정일: {new Date().toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => router.push("/")}
                className="px-8 py-3 bg-linear-to-r from-[--primary-from] to-[--primary-to] text-[--background] font-semibold rounded-lg hover:shadow-[0_0_32px_rgba(125,213,243,0.45)] transition-all duration-300 hover:scale-105"
              >
                홈으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
