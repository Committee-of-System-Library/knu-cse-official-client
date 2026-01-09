"use client";

import {
  IconHome,
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpandFilled,
  IconMessage,
  IconStar,
} from "@tabler/icons-react";
import { useState } from "react";

const imgLineContainer =
  "http://localhost:3845/assets/a17cd1158cd3e7cd6bedbe9c76f950a5d17f437d.svg";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (isExpanded) {
    return (
      <div className="bg-[#f8faff] h-full w-[254px] border-r border-[rgba(0,0,0,0.15)] transition-all duration-300">
        <div className="box-border content-stretch flex flex-col gap-4 items-start px-6 py-[18px] h-full">
          <div className="content-stretch flex gap-3.5 items-center relative shrink-0">
            <button
              onClick={toggleExpanded}
              className="block cursor-pointer relative shrink-0 hover:opacity-70 transition-opacity"
            >
              <IconLayoutSidebarLeftCollapseFilled size={28} />
            </button>
            <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-nowrap">
              <p className="leading-[normal] whitespace-pre">
                KNUTechTalkArena
              </p>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.75px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgLineContainer}
              />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start overflow-clip relative shrink-0">
            <button className="content-stretch flex gap-3.5 items-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity">
              <div className="relative shrink-0">
                <IconHome size={28} />
              </div>
              <div className="flex flex-col font-black justify-center leading-0 not-italic relative shrink-0 text-[16px] text-black text-nowrap">
                <p className="leading-[normal] whitespace-pre">라운지</p>
              </div>
            </button>
            <button className="content-stretch flex gap-3.5 items-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity">
              <div className="relative shrink-0">
                <IconMessage size={28} />
              </div>
              <div className="flex flex-col justify-center leading-0 not-italic relative shrink-0 text-[16px] text-black text-nowrap">
                <p className="leading-[normal] whitespace-pre">내 테크톡</p>
              </div>
            </button>
            <button className="content-stretch flex gap-3.5 items-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity">
              <div className="relative shrink-0">
                <IconStar size={28} />
              </div>
              <div className="flex flex-col justify-center leading-0 not-italic relative shrink-0 text-[16px] text-black text-nowrap">
                <p className="leading-[normal] whitespace-pre">평가</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white h-full w-[76px] border-r border-[rgba(0,0,0,0.2)] transition-all duration-300">
      <div className="box-border content-stretch flex flex-col gap-4 items-center px-6 py-[18px] h-full">
        <button
          onClick={toggleExpanded}
          className="block cursor-pointer relative shrink-0 hover:opacity-70 transition-opacity"
        >
          <IconLayoutSidebarLeftExpandFilled size={28} />
        </button>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-0.75px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgLineContainer}
            />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0">
          <button className="relative shrink-0 hover:opacity-70 transition-opacity">
            <IconHome size={28} />
          </button>
          <button className="relative shrink-0 hover:opacity-70 transition-opacity">
            <IconMessage size={28} />
          </button>
          <button className="relative shrink-0 hover:opacity-70 transition-opacity">
            <IconStar size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
