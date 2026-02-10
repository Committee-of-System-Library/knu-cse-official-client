"use client";

import { useState } from "react";
import { IconSearch, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

// TODO - API 연동(임시로 작성)
const notices = [
  { id: 1, title: "2026학년도 학생회비 납부 안내", date: "2026.02.01", author: "학생회" },
  { id: 2, title: "IT대학x예술대학 새내기 배움터 공지", date: "2026.01.28", author: "과사" },
  { id: 3, title: "[필독] 사물함 신청 기간 및 방법 안내", date: "2026.01.20", author: "학생회" },
  { id: 4, title: "제 17대 학생회 조직도 안내", date: "2026.01.15", author: "학생회" },
];

export default function NoticesPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotices, setFilteredNotices] = useState(notices);

  const categories = ["전체", "일반공지", "학사", "심컴", "글솦", "인컴"]

  const handleSearch = () => {
    const results = notices.filter((notice) =>
      notice.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNotices(results);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f8faff] pt-32 pb-20 px-36">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-black mb-2">학생회 공지사항</h1>
        <p className="text-gray-500">컴퓨터학부 학생회의 새로운 소식을 확인하세요.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex items-center gap-3 border border-gray-100">
        <IconSearch size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="flex-1 outline-none text-[15px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-[#615fff] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#514e6] transition-colors"
        >
          검색
        </button>
      </div>

      {/* Category tab */}
      <div className="flex gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all ${activeCategory === cat
              ? "bg-[#615fff] text-white shadow-md"
              : "bg-white text-gray-500 hover:bg-gray-100 border-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[1fr_120px_120px] px-8 py-4 bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
          <div>제목</div>
          <div className="text-center">작성자</div>
          <div className="text-center">날짜</div>
        </div>

        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="grid grid-cols-[1fr_120px_150px] px-7 py-5 border-b border-gray-50 last:border-none hover:bg-gray-50 cursor-pointer transition-colors items-center"
            >
              <div className="flex items-center gap-2">
                <span className="text-black font-medium">{notice.title}</span>
                <IconChevronRight size={16} className="text-gray-300" />
              </div>
              <div className="text-center text-gray-500 text-sm">{notice.author}</div>
              <div className="text-center text-gray-400 text-sm">{notice.date}</div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-gray-500">검색 결과가 없습니다.</div>
        )}
      </div>

      {/* 페이지네이션 (숫자 버튼) */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="p-2 rounded-lg bg-white border border-gary-200 text-gray-400 hover:text-black"
        >
          <IconChevronLeft size={20} />
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`size-10 rounded-lg font-bold transition-all ${currentPage === num
              ? "bg-[#615fff] text-white shadow-md"
              : "bg-white text-gray-400 hover:text-black border border-gray-200"
              }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="p-2 rouned-lg bg-white border border-gray-200 text-gray-400 hover:text-black"
        >
          <IconChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
