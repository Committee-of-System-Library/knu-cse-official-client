import { IconPlus } from "@tabler/icons-react";

function NoticesSection() {
  const articles = [
    "학생회 공지사항 글",
    "학생회 공지사항 글",
    "학생회 공지사항 글",
    "학생회 공지사항 글",
    "학생회 공지사항 글",
    "학생회 공지사항 글",
  ];

  return (
    <div className="bg-white flex flex-col gap-[18px] px-[27px] py-[23px] rounded-[18px] shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)]">
      <div className="flex gap-2 items-start">
        <div className="flex flex-col gap-2 flex-1">
          <div className="font-bold text-[14px] text-[rgba(0,0,0,0.55)]">
            학생회 공지사항
          </div>
          <hr className="w-10 border-gray-400" />
        </div>
        <button className="size-4 hover:opacity-70 transition-opacity">
          <IconPlus size={16} />
        </button>
      </div>
      <div className="flex flex-col gap-2.5 flex-1 overflow-hidden">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative border-b border-[rgba(0,0,0,0.2)] last:border-b-0"
          >
            <div className="flex items-center justify-between pb-2.5 text-[rgba(0,0,0,0.8)]">
              <div className="flex-1 overflow-ellipsis overflow-hidden text-nowrap text-[16px]">
                {article}
              </div>
              <div className="text-[12px] text-nowrap">1일 전</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DevChatsSection() {
  const articles = [
    "기술면접 토론 글",
    "기술면접 토론 글",
    "기술면접 토론 글",
    "기술면접 토론 글",
    "기술면접 토론 글",
    "기술면접 토론 글",
  ];

  return (
    <div className="bg-white flex flex-col gap-[18px] px-[27px] py-[23px] rounded-[18px] shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)]">
      <div className="flex gap-2 items-start">
        <div className="flex flex-col gap-2 flex-1">
          <div className="font-bold text-[14px] text-[rgba(0,0,0,0.55)]">
            최근 기술면접 토론
          </div>
          <hr className="w-10 border-gray-400" />
        </div>
        <button className="size-4 hover:opacity-70 transition-opacity">
          <IconPlus size={16} />
        </button>
      </div>
      <div className="flex flex-col gap-2.5 flex-1 overflow-hidden">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative border-b border-[rgba(0,0,0,0.2)] last:border-b-0"
          >
            <div className="flex items-center justify-between pb-2.5 text-[rgba(0,0,0,0.8)]">
              <div className="flex-1 overflow-ellipsis overflow-hidden text-nowrap text-[16px]">
                {article}
              </div>
              <div className="text-[12px] text-nowrap">1일 전</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8faff] flex flex-col">
      {/* Header Section */}
      <div className="bg-[rgba(6,6,6,0.03)] h-[480px] border-b border-[rgba(0,0,0,0.1)] relative">
        <div className="flex items-center h-full px-36 py-2.5">
          <div className="flex flex-col">
            <p className="text-[28px] mb-0">lorem ipsum</p>
            <p className="font-extrabold text-[40px]">
              경북대학교 IT대학 컴퓨터학부
            </p>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-[24px] text-[rgba(0,0,0,0.25)] text-center">
              배너 이미지
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-36 py-20">
        <div className="grid grid-cols-2 gap-12 h-[500px]">
          <NoticesSection />
          <DevChatsSection />
        </div>
      </main>
    </div>
  );
}
