"use client";

import { IconUser } from "@tabler/icons-react";

const executiveMembers = [
  { id: 1, role: "학생회장", name: "김서준", dept: "22학번" },
  { id: 2, role: "부학생회장", name: "이상민", dept: "23학번" },
];
const teamMembers = [
  { id: 3, role: "복학생협의회장", name: "진동현", dept: "22학번" },
  { id: 4, role: "여학생협의회장", name: "김일여", dept: "24학번" },
  { id: 5, role: "동아리연합의장", name: "유석현", dept: "25학번" },
  { id: 6, role: "시스템도서위원장", name: "서형철", dept: "23학번" },
];
const departmentMembers = [
  { id: 7, role: "기획부장", name: "박솔", dept: "25학번" },
  { id: 8, role: "재정부장", name: "심현수", dept: "25학번" },
  { id: 9, role: "집행부장", name: "홍서호", dept: "25학번" },
  { id: 10, role: "문체부장", name: "유다경", dept: "25학번" },
  { id: 11, role: "홍보부장", name: "장예은", dept: "25학번" },
  { id: 12, role: "환경부장", name: "노수린", dept: "25학번" },
];
const representativeMembers = [
  { id: 13, role: "플솝1과대", name: "name", dept: "26학번" },
  { id: 14, role: "플솝2과대", name: "name", dept: "25학번" },
  { id: 15, role: "플솝3과대", name: "최연우", dept: "24학번" },
  { id: 16, role: "심컴4과대", name: "권대호", dept: "22학번" },
  { id: 17, role: "글솝1과대", name: "name", dept: "26학번" },
  { id: 18, role: "글솝2과대", name: "name", dept: "25학번" },
  { id: 19, role: "글솝3과대", name: "강영한", dept: "24학번" },
  { id: 20, role: "글솝4과대", name: "정구현", dept: "23학번" },
  { id: 21, role: "인컴1과대", name: "name", dept: "26학번" },
  { id: 22, role: "인컴2과대", name: "name", dept: "25학번" },
  { id: 23, role: "인컴3과대", name: "김세원", dept: "24학번" },
  { id: 24, role: "인컴4과대", name: "노은서", dept: "23학번" },
];

function MemberCard({ member }: { member: any }) {
  return (
    <div className="w-[180px] h-[260px] bg-white rounded-[24px] overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:-translate-y-2 hover:shadow-lg flex flex-col group">

      <div className="w-full h-[160px] bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* 나중에 <img src={member.image} ... /> 로 수정 */}
        <IconUser size={60} className="text-gray-300" />
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col justify-center gap-1 text-center">
        <div className="text-[12px] font-bold text-[#615fff]/80 uppercase">
          {member.role}
        </div>
        <div className="text-black font-bold text-lg leading-tight">
          {member.name}
        </div>
        <div className="text-gray-400 text-[11px] tracking-tight">
          {member.dept}
        </div>
      </div>
    </div>
  );
}

const ConnectorLine = () => (
  <div className="w-[2px] h-16 border-l-2 border-dashed border-gray-200 my-4" />
);


function ConnectedMemberCard({ member, showTopLine = true }: { member: any, showTopLine?: boolean }) {
  return (
    <div className="flex flex-col items-center relative">
      {/* 💡 카드 위로 뻗은 작은 세로 점선 */}
      {showTopLine && (
        <div className="w-[2px] h-8 border-l-2 border-dashed border-gray-200" />
      )}

      <div className="w-[160px] h-[240px] bg-white rounded-[24px] overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col transition-all hover:-translate-y-2 relative z-10">
        <div className="w-full h-[140px] bg-gray-100 flex items-center justify-center">
          <IconUser size={50} className="text-gray-300" />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center gap-1 text-center">
          <div className="text-[10px] font-bold text-[#615fff]/80 uppercase">{member.role}</div>
          <div className="text-black font-bold text-[16px] leading-tight">{member.name}</div>
          <div className="text-gray-400 text-[10px]">{member.dept}</div>
        </div>
      </div>
    </div>
  );
}

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-[#f8faff] pt-48 pb-32 px-10 flex flex-col items-center">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">조직도</h1>
        <p className="text-gray-300 text-xs tracking-[0.3em]">ORGANIZATION</p>
      </div>

      {/* 계층 1: 회장단 */}
      <div className="flex flex-col items-center">
        <div className="flex gap-20">
          {executiveMembers.map(m => <ConnectedMemberCard key={m.id} member={m} showTopLine={false} />)}
        </div>
        {/* 회장단 아래로 내려가는 중심 선 */}
        <div className="w-[2px] h-12 border-l-2 border-dashed border-gray-200" />
      </div>

      {/* 계층 2: 협의회장 */}
      <div className="flex flex-col items-center w-full">
        {/* 좌우를 잇는 긴 가로 점선 */}
        <div className="w-[600px] h-[2px] border-t-2 border-dashed border-gray-200" />
        <div className="flex justify-center gap-10">
          {teamMembers.map(m => <ConnectedMemberCard key={m.id} member={m} />)}
        </div>
        <div className="w-[2px] h-12 border-l-2 border-dashed border-gray-200" />
      </div>

      {/* 계층 3: 부서장 */}
      <div className="flex flex-col items-center w-full">
        {/* 부서장들을 모두 포괄하는 긴 가로 점선 */}
        <div className="w-[920px] h-[2px] border-t-2 border-dashed border-gray-200" />
        <div className="flex justify-center gap-6">
          {departmentMembers.map(m => <ConnectedMemberCard key={m.id} member={m} />)}
        </div>
        <div className="w-[2px] h-12 border-l-2 border-dashed border-gray-200" />
      </div>

      {/* 계층 4: 학년별 과대 */}
      <div className="flex flex-col items-center w-full">
        <div className="w-[555px] h-[4px] border-t-2 border-dashed border-gray-200" />
        <div className="grid grid-cols-4 gap-x-6 gap-y-1.5">
          {representativeMembers.map(m => <ConnectedMemberCard key={m.id} member={m} />)}
        </div>
      </div>
    </div>
  );
}