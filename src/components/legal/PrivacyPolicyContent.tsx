export default function PrivacyPolicyContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="bg-[--surface] border border-[--border] rounded-2xl p-8 md:p-12">
        <div className="space-y-8">
          {/* 서문 */}
          <section>
            <p className="text-[--text-secondary] leading-relaxed">
              vvellflo(이하 '본 서비스'라 함)는 「개인정보 보호법」 제30조에
              따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
              원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
              처리방침을 수립·공개합니다.
            </p>
          </section>

          {/* 제1조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제1조 (개인정보의 처리 목적)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              본 서비스는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
              있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
              목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를
              이행할 예정입니다.
            </p>
            <div className="space-y-3 ml-4">
              <div>
                <h3 className="text-lg font-semibold text-[--text-primary] mb-2">
                  1. 서비스 제공 및 개선
                </h3>
                <p className="text-[--text-secondary] leading-relaxed">
                  접속 빈도 파악 또는 이용자의 서비스 이용에 대한 통계 분석,
                  서비스 환경 개선 및 품질 향상을 목적으로 자동 수집 정보를
                  처리합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제2조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제2조 (처리하는 개인정보 항목)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              본 서비스는 다음의 개인정보 항목을 처리하고 있습니다.
            </p>
            <div className="space-y-3 ml-4">
              <div>
                <h3 className="text-lg font-semibold text-[--text-primary] mb-2">
                  1. 서비스 이용과정에서 자동 수집되는 정보
                </h3>
                <p className="text-[--text-secondary] leading-relaxed">
                  서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 브라우저
                  종류, OS 정보 등
                </p>
              </div>
            </div>
          </section>

          {/* 제3조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제3조 (개인정보의 처리 및 보유 기간)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              ① 본 서비스는 법령에 따른 개인정보 보유·이용기간 또는
              정보주체로부터 개인정보를 수집 시에 동의받은 기간 내에서
              개인정보를 처리·보유합니다.
            </p>
            <p className="text-[--text-secondary] leading-relaxed mb-3">
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[--text-secondary]">
              <li>
                <strong>웹사이트 방문 기록 (로그):</strong> 3개월 (근거:
                통신비밀보호법)
              </li>
            </ul>
          </section>

          {/* 제4조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제4조 (개인정보의 제3자 제공에 관한 사항)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              본 서비스는 정보주체의 개인정보를 원칙적으로 외부에 제공하지
              않습니다.
            </p>
          </section>

          {/* 제5조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제5조 (개인정보처리의 위탁에 관한 사항)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              본 서비스는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
              처리업무를 위탁하고 있습니다.
            </p>
            <div className="space-y-3 ml-4">
              <div className="bg-[--background] p-4 rounded-lg border border-[--border]">
                <h3 className="text-lg font-semibold text-[--text-primary] mb-2">
                  웹 호스팅
                </h3>
                <p className="text-[--text-secondary] leading-relaxed">
                  <strong>수탁업체 명:</strong> Vercel Inc., AWS
                  <br />
                  <strong>위탁하는 업무의 내용:</strong> 호스팅 서비스의 시스템
                  제공 및 유지∙보수
                </p>
              </div>
            </div>
          </section>

          {/* 제6조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제6조 (개인정보의 파기절차 및 파기방법)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-3">
              ① 본 서비스는 개인정보 보유기간의 경과, 처리목적 달성 등
              개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
              파기합니다.
            </p>
            <p className="text-[--text-secondary] leading-relaxed">
              ② <strong>파기방법:</strong> 전자적 파일 형태로 기록·저장된
              개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
              삭제합니다.
            </p>
          </section>

          {/* 제7조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제7조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-3">
              ① 정보주체는 본 서비스에 대해 언제든지 개인정보
              열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
            </p>
            <p className="text-[--text-secondary] leading-relaxed">
              ② 권리 행사는 이메일 등을 통하여 하실 수 있으며, 본 서비스는 이에
              대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          {/* 제8조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제8조 (개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              본 서비스는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해
              이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용할 수
              있습니다. 이용자는 웹브라우저 옵션 설정을 통해 쿠키 허용 여부를
              거부할 수 있으나, 거부 시 서비스 이용에 불편이 발생할 수 있습니다.
            </p>
          </section>

          {/* 제9조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제9조 (개인정보의 안전성 확보 조치)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              본 서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
              취하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-[--text-secondary]">
              <li>
                <strong>기술적 조치:</strong> 보안 프로그램 설치, 접근 통제,
                접속 기록의 위·변조 방지
              </li>
              <li>
                <strong>관리적 조치:</strong> 개인정보 취급 최소화 및 교육
              </li>
            </ul>
          </section>

          {/* 제10조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제10조 (개인정보 보호책임자)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              본 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을
              위하여 아래와 같이 개인정보 보호책임자(운영자)를 지정하고
              있습니다.
            </p>
            <div className="bg-[--background] p-4 rounded-lg border border-[--border]">
              <h3 className="text-lg font-semibold text-[--text-primary] mb-3">
                개인정보 보호책임자 (운영자)
              </h3>
              <p className="text-[--text-secondary] leading-relaxed">
                <strong>성명:</strong> 김재우
                <br />
                <strong>연락처 (이메일):</strong> [대표 이메일 주소
                (ta3844@naver.com)]
              </p>
            </div>
          </section>

          {/* 제11조 */}
          <section>
            <h2 className="text-2xl font-bold text-[--text-primary] mb-4">
              제11조 (개인정보 처리방침의 변경)
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-4">
              이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경 내용의 추가, 삭제 및 정정이 있는 경우에는 공지사항을 통하여
              고지할 것입니다.
            </p>
            <div className="pt-4 border-t border-[--border] text-[--text-muted]">
              <p>
                <strong>공고일자:</strong> 2025년 11월 11일
              </p>
              <p>
                <strong>시행일자:</strong> 2025년 11월 11일
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
