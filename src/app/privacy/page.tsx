import type { Metadata } from "next";
import PrivacyPolicyHeader from "@/components/legal/PrivacyPolicyHeader";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import BackToHomeButton from "@/components/legal/BackToHomeButton";

export const metadata: Metadata = {
  title: "개인정보 처리방침 - vvellflo",
  description: "vvellflo의 개인정보 처리방침을 확인하세요.",
  openGraph: {
    title: "개인정보 처리방침 - vvellflo",
    description: "vvellflo의 개인정보 처리방침을 확인하세요.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[--background]">
      <PrivacyPolicyHeader />

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

            {/* Content */}
            <PrivacyPolicyContent />

            {/* Back Button */}
            <BackToHomeButton />
          </div>
        </div>
      </main>
    </div>
  );
}
