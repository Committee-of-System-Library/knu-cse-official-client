import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="bg-white relative w-full h-20 border-t border-[rgba(0,0,0,0.08)]">
      <div className="box-border content-stretch flex items-center justify-between px-36 py-0 h-full">
        <div className="content-stretch flex flex-col gap-1 items-start leading-0 not-italic relative shrink-0 text-black w-[234px]">
          <div className="relative shrink-0 text-[14px] w-full">
            <p className="leading-[normal]">
              경북대학교 IT대학 컴퓨터학부 학생회
            </p>
          </div>
          <div className="relative shrink-0 text-[11px] w-full">
            <p className="leading-[normal]">대구광역시 북구 대학로 80</p>
          </div>
        </div>

        <div className="box-border text-gray-500 content-stretch flex gap-6 items-center overflow-clip px-0 py-[13px] relative shrink-0">
          <a
            href="#"
            className="relative shrink-0 hover:opacity-70 transition-opacity"
          >
            <IconBrandInstagram size={20} />
          </a>
          <a
            href="#"
            className="relative shrink-0 hover:opacity-70 transition-opacity"
          >
            <IconBrandDiscord size={20} />
          </a>
          <a
            href="https://github.com/Committee-of-System-Library"
            target="_blank"
            className="relative shrink-0 hover:opacity-70 transition-opacity"
          >
            <IconBrandGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
