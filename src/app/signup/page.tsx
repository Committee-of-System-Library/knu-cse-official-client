"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cseLogo from "@/assets/logo.jpg";
import { useState } from "react";


export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentID, setStudentID] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {     // TODO: API 연동
      const response = await fetch("api주소/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          studentID: studentID
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("회원가입이 완료되었습니다!");
        router.push("/login");
      } else {
        // 400번대 or 500번대 에러가 났을 때
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      //서버가 꺼져있거나 인터넷 연결이 안 될 때
      console.error("연결 에러:", error);
      alert("서버와 통신 중 에러가 발생했습니다.");
    }
  };
  //console.log("Login attempt:", { email, password });
  //alert("회원가입이 완료되었습니다!");
  //router.push("/login");

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
            회원가입
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-[14px] text-[#535353]"
              >
                이름
              </label>
              <input
                id="name"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.15)] rounded-lg text-[14px] focus:outline-none focus:border-[#615fff] focus:ring-1 focus:ring-[#615fff] transition-colors"
                required
              />
            </div>

            {/* StudentID Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="studentID"
                className="font-semibold text-[14px] text-[#535353]"
              >
                학번
              </label>
              <input
                id="studentID"
                type="studentID"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 border border-[rgba(0,0,0,0.15)] rounded-lg text-[14px] focus:outline-none focus:border-[#615fff] focus:ring-1 focus:ring-[#615fff] transition-colors"
                required
              />
            </div>

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



            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#615fff] text-white font-semibold text-[15px] py-3.5 rounded-lg hover:bg-[#5146e6] transition-colors mt-4"
            >
              회원가입
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
              <Link
                href="/login"
                className="font-semibold text-[#615fff] hover:text-[#5146e6] transition-colors"
              >
                로그인
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
