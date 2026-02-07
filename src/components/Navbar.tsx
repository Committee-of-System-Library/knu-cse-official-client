"use client";

import Link from "next/link";
import cseLogo from "@/assets/logo.jpg";
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuData: MenuSection[] = [
  {
    title: "학생회",
    items: [
      { label: "학생회 조직도", href: "/organization" },
      { label: "학생회 공지사항", href: "/notices" },
    ],
  },
  {
    title: "인증 & 조회",
    items: [
      { label: "야식마차 인증", href: "#", isExternal: true },
      { label: "사물함 조회", href: "#", isExternal: true },
      { label: "학생회비 조회", href: "/fee/check" },
    ],
  },
  {
    title: "커뮤니티",
    items: [
      { label: "공지사항", href: "/community/notices" },
      { label: "케테톡", href: "/devtalk" },
    ],
  },
];

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <div
      className="fixed top-0 bg-white w-full z-50"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      {/* Main Navbar */}
      <div className="border-b border-[rgba(0,0,0,0.15)] box-border content-stretch flex items-center justify-between px-36 py-3 w-full relative z-10">
        <Link
          href="/"
          className="content-stretch flex gap-[13px] items-center relative shrink-0"
        >
          <div className="relative shrink-0 size-12">
            <Image
              alt="CSE Logo"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={cseLogo}
            />
          </div>
          <div className="flex flex-col justify-center leading-[normal] not-italic relative shrink-0 text-[0px] text-black text-nowrap whitespace-pre">
            <p className="font-light mb-0 text-[14px]">IT대학 컴퓨터학부</p>
            <p className="font-semibold text-[19px]">학생회</p>
          </div>
        </Link>

        <div className="box-border content-stretch flex gap-12 items-center justify-end overflow-clip p-2.5 relative shrink-0">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="flex flex-col font-semibold justify-center leading-0 not-italic relative shrink-0 text-[#535353] text-[13px] text-nowrap cursor-pointer hover:text-black"
              onMouseEnter={() => setHoveredMenu(index)}
            >
              <p className="leading-[normal] whitespace-pre">{menu.title}</p>
            </div>
          ))}
          <Link
            href="/login"
            className="bg-[#615fff] box-border content-stretch flex gap-2.5 h-7 items-center justify-center overflow-clip px-3.5 py-2 relative rounded-lg shrink-0 hover:bg-[#5146e6] transition-colors cursor-pointer"
          >
            <div className="flex flex-col justify-center leading-0 not-italic relative shrink-0 text-[13px] text-nowrap text-white">
              <p className="leading-[normal] whitespace-pre">로그인</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Expanded Menu */}
      <div
        className={`absolute left-0 w-full bg-white border-b border-[rgba(0,0,0,0.15)] px-36 pt-8 pb-10 -z-10 transition-all duration-200 ${hoveredMenu !== null
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="flex gap-10 items-start">
          {menuData.map((section, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col gap-2.5 items-start min-w-0"
            >
              <div className="flex flex-col font-semibold justify-center leading-[normal] text-[18px] text-black w-full">
                <p>{section.title}</p>
              </div>
              <div className="flex flex-col gap-3 items-start py-2 w-full">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="flex items-center gap-1 group"
                  >
                    <span className="text-[13px] text-[#535353] group-hover:text-black transition-colors">
                      {item.label}
                    </span>
                    {item.isExternal && (
                      <IconExternalLink
                        size={14}
                        className="text-[#535353] group-hover:text-black transition-colors"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
