"use client";

import Link from "next/link";
import Image from "next/image";
import cseLogo from "@/assets/logo.jpg";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] flex items-center justify-center px-4">
      <div className="w-full max-w-[440px]">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="flex flex-col items-center gap-3">
            <div className="relative size-20">
              <Image
                alt="CSE Logo"
                className="absolute inset-0 object-cover rounded-full"
                src={cseLogo}
              />
            </div>
            <div className="text-center">
              <p className="font-light text-[14px] text-[rgba(0,0,0,0.6)]">
                IT대학 컴퓨터학부
              </p>
              <p className="font-bold text-[22px] text-black">학생회</p>
            </div>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-[0px_4px_28px_3px_rgba(0,0,0,0.06)] p-10">
          <h1 className="font-extrabold text-[24px] text-[rgba(0,0,0,0.75)] mb-8 text-center">
            로그인
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-[14px] text-[#535353]"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@knu.ac.kr"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.15)] rounded-lg text-[14px] focus:outline-none focus:border-[#615fff] focus:ring-1 focus:ring-[#615fff] transition-colors"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-semibold text-[14px] text-[#535353]"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.15)] rounded-lg text-[14px] focus:outline-none focus:border-[#615fff] focus:ring-1 focus:ring-[#615fff] transition-colors"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[rgba(0,0,0,0.15)] text-[#615fff] focus:ring-[#615fff]"
                />
                <span className="text-[13px] text-[#535353]">
                  로그인 상태 유지
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[13px] text-[#535353] hover:text-black transition-colors"
              >
                비밀번호 찾기
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#615fff] text-white font-semibold text-[15px] py-3.5 rounded-lg hover:bg-[#5146e6] transition-colors mt-4"
            >
              로그인
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <hr className="flex-1 border-[rgba(0,0,0,0.1)]" />
            <span className="text-[13px] text-[rgba(0,0,0,0.4)]">또는</span>
            <hr className="flex-1 border-[rgba(0,0,0,0.1)]" />
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-[14px] text-[#535353]">
              계정이 없으신가요?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#615fff] hover:text-[#5146e6] transition-colors"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-[12px] text-[rgba(0,0,0,0.4)]">
            문의사항이 있으시면{" "}
            <Link
              href="/contact"
              className="text-[#615fff] hover:text-[#5146e6] transition-colors"
            >
              고객센터
            </Link>
            로 연락주세요
          </p>
        </div>
      </div>
    </div>
  );
}
