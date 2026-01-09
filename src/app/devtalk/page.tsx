import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function KedeTalkPage() {
  return (
    <div className="min-h-screen bg-[#f8faff] flex flex-col">
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 px-[145px] py-[54px] overflow-auto">
          <div className="flex flex-col gap-8 max-w-[1074px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <h1 className="font-extrabold text-[24px] text-[rgba(0,0,0,0.75)]">
                  라운지
                </h1>
                <hr className="w-8" />
              </div>
              <button className="font-light text-[14px] text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.8)] transition-colors">
                더보기
              </button>
            </div>

            <div className="grid grid-cols-4 gap-[26px] h-[162px]">
              <div className="bg-white rounded-2xl shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)]" />
              <div className="bg-white rounded-2xl shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)]" />
              <div className="bg-white rounded-2xl shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)]" />
              <div className="bg-white rounded-2xl shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)]" />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
