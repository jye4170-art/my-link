"use client";

import React, { useState } from "react";

// --- Notion Style Clean Glyphs ---

function IconNotionLogo({ className = "w-5 h-5 text-black" }: { className?: string }) {
  return (
    <div className="w-7 h-7 bg-black text-white rounded-[6px] flex items-center justify-center font-serif font-black text-base select-none shadow-sm">
      N
    </div>
  );
}

function IconCheck({ className = "w-4 h-4 text-[#0075de]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast("링크가 클립보드에 복사되었습니다 ✨");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 피처 카드 목록 (컬러 블록 일러스트 스티커 밴드 적용)
  const featureCards = [
    {
      title: "GitHub Repository",
      category: "CODE & REPOS",
      description: "Next.js 16, React 19, TypeScript 소스코드와 컴포넌트 실험실.",
      headerColor: "bg-[#d6b6f6]", // Sticker Purple
      tagColor: "bg-[#391c57] text-[#d6b6f6]",
      emoji: "💻",
      link: "https://github.com",
      actionText: "저장소 열기",
    },
    {
      title: "Velog & Notion Notes",
      category: "DEV BLOG",
      description: "바이브 코딩 일지, 기술적인 고민과 문제 해결 과정을 기록하는 공간.",
      headerColor: "bg-[#2a9d99]", // Sticker Teal
      tagColor: "bg-[#134e4a] text-[#a7f3d0]",
      emoji: "🌱",
      link: "https://velog.io",
      actionText: "글 읽어보기",
    },
    {
      title: "Interactive Showcase",
      category: "PROJECTS",
      description: "직접 기획하고 만든 웹 서비스와 인터랙티브 데모 모음.",
      headerColor: "bg-[#dd5b00]", // Sticker Orange
      tagColor: "bg-[#793400] text-[#fed7aa]",
      emoji: "🚀",
      link: "https://github.com",
      actionText: "프로젝트 보기",
    },
    {
      title: "Instagram Journal",
      category: "LIFESTYLE",
      description: "일상과 커피, 개발자 라이프스타일의 영감을 담은 스냅 기록.",
      headerColor: "bg-[#ff64c8]", // Sticker Pink
      tagColor: "bg-[#831843] text-[#fbcfe8]",
      emoji: "📸",
      link: "https://instagram.com",
      actionText: "일상 둘러보기",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f5f4] text-[#000000] font-[Inter,-apple-system,system-ui,sans-serif] selection:bg-[#0075de] selection:text-white">
      {/* ========================================================= */}
      {/* 1. NOTION TOP NAV BAR                                     */}
      {/* ========================================================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e6e6e6] px-4 sm:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconNotionLogo />
          <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#000000]">
            <span>정예은</span>
            <span className="text-[#a39e98] font-normal">/</span>
            <span className="text-[#615d59] font-normal text-sm">Portfolio Workspace</span>
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-[15px] text-[#31302e]">
          <a href="#about" className="hover:text-[#000000] transition-colors">소개</a>
          <a href="#workspace" className="hover:text-[#000000] transition-colors">워크스페이스</a>
          <a href="#features" className="hover:text-[#000000] transition-colors">프로젝트</a>
          <a href="#contact" className="hover:text-[#000000] transition-colors">커피챗</a>
        </div>

        {/* Right Nav Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="bg-white hover:bg-[#f6f5f4] text-[#31302e] text-[14px] font-medium px-3.5 py-1.5 rounded-[8px] border border-[#e6e6e6] transition-colors cursor-pointer"
          >
            {copied ? "복사됨 ✓" : "공유하기"}
          </button>
          <a
            href="mailto:yaeeun@example.com"
            className="bg-[#0075de] hover:bg-[#005bab] text-white text-[14px] font-medium px-4 py-1.5 rounded-full transition-colors hidden xs:inline-flex"
          >
            이메일 보내기
          </a>
        </div>
      </nav>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-white text-[#000000] text-[14px] font-medium px-5 py-2.5 rounded-full border border-[#e6e6e6] notion-shadow-level-2 flex items-center gap-2">
            <IconCheck className="w-4 h-4 text-[#0075de]" />
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. SIGNATURE HERO BAND: DEEP INDIGO "NIGHT" HERO (#213183) */}
      {/* ========================================================= */}
      <section className="w-full bg-[#213183] text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden notion-constellation">
        <div className="max-w-[1080px] mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Eyebrow Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#62aef0] inline-block animate-pulse" />
            <span>FRONTEND ENGINEER &bull; VIBE CODING</span>
          </div>

          {/* Display-1 Headline (64px / 700 / Tight Tracking) */}
          <h1 className="text-[36px] sm:text-[54px] md:text-[64px] font-bold text-white notion-display-1 max-w-3xl leading-[1.05]">
            Meet the developer behind the ideas.
          </h1>

          {/* Subheading & Developer Bio (개발자 소개글 반영) */}
          <p className="text-[17px] sm:text-[20px] text-white/90 font-normal leading-relaxed mt-5 max-w-2xl break-keep">
            코드로 더 나은 사용자 경험을 만드는 개발자 정예은입니다.
            새로운 도전을 즐기며 배운 것을 꾸준히 기록하고 있습니다.
          </p>

          {/* CTA Pair (button-primary + button-secondary) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0075de] hover:bg-[#005bab] active:bg-[#005bab] text-white text-[16px] font-medium px-7 py-3 rounded-full notion-btn-press transition-all flex items-center gap-2"
            >
              <span>GitHub 둘러보기</span>
              <IconArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleShare}
              className="bg-white hover:bg-[#f6f5f4] text-[#000000] text-[16px] font-medium px-7 py-3 rounded-full notion-shadow-level-1 notion-btn-press transition-all cursor-pointer"
            >
              {copied ? "주소 복사 완료 ✓" : "프로필 링크 복사"}
            </button>
          </div>

          {/* Playful Multi-Colour Sticker Constellation Row */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-12 pt-8 border-t border-white/10 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#d6b6f6]" />
              React 19
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#62aef0]" />
              Next.js 16
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#2a9d99]" />
              TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 hidden sm:inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#dd5b00]" />
              Tailwind CSS
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 hidden sm:inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#ff64c8]" />
              Vibe Coding
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. NOTION DOCUMENT / WORKSPACE SECTION (#f6f5f4 Canvas)   */}
      {/* ========================================================= */}
      <main className="max-w-[1080px] mx-auto px-4 sm:px-8 py-16 sm:py-20 flex flex-col gap-14">
        {/* Notion Document Card */}
        <section id="workspace" className="bg-white rounded-[12px] border border-[#e6e6e6] p-6 sm:p-10 notion-shadow-level-1">
          {/* Notion Page Header: Icon + Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#f6f5f4] rounded-[10px] flex items-center justify-center text-3xl shrink-0 select-none border border-[#e6e6e6]">
              👩🏻‍💻
            </div>
            <div>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#000000] notion-heading-2">
                정예은의 개발자 워크스페이스
              </h2>
              <p className="text-[15px] text-[#615d59] mt-1">
                Last updated just now &bull; 4 projects &bull; Frontend Developer
              </p>
            </div>
          </div>

          {/* Properties Table (Notion Database Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 py-5 border-y border-[#e6e6e6] text-[14px]">
            <div className="flex items-center gap-3">
              <span className="text-[#a39e98] w-24 shrink-0 font-medium">Role</span>
              <span className="text-[#31302e] font-semibold bg-[#f6f5f4] px-2.5 py-0.5 rounded-[4px] border border-[#e6e6e6]">
                Frontend Software Engineer
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#a39e98] w-24 shrink-0 font-medium">Core Stack</span>
              <span className="text-[#31302e] font-semibold bg-[#f6f5f4] px-2.5 py-0.5 rounded-[4px] border border-[#e6e6e6]">
                Next.js 16 &bull; React 19 &bull; TS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#a39e98] w-24 shrink-0 font-medium">Status</span>
              <span className="text-[#1aae39] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1aae39] inline-block animate-ping" />
                협업 및 커피챗 환영 (Open to Talk)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#a39e98] w-24 shrink-0 font-medium">Location</span>
              <span className="text-[#31302e]">Seoul, Republic of Korea</span>
            </div>
          </div>

          {/* Notion Callout Box (Callout with Light Grey Background) */}
          <div id="about" className="bg-[#f6f5f4] border border-[#e6e6e6] rounded-[8px] p-4 sm:p-5 mt-6 flex items-start gap-3.5">
            <span className="text-xl select-none">💡</span>
            <div className="text-[15px] text-[#31302e] leading-relaxed break-keep">
              <p className="font-semibold text-[#000000] mb-1">
                바이브 코딩과 끊임없는 배움의 가치
              </p>
              코드로 일상의 문제를 해결하고 더 나은 사용자 경험을 만드는 개발자입니다.
              새로운 기술에 도전하고 배운 것을 꾸준히 기록하며 함께 성장하는 협업 문화를 중요하게 생각합니다.
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FEATURE CARDS GRID (Sticker Palette Header Bands)      */}
        {/* ========================================================= */}
        <section id="features" className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[#0075de] text-[13px] font-semibold tracking-wide uppercase">
                Featured Directory
              </span>
              <h3 className="text-[28px] sm:text-[32px] font-bold text-[#000000] notion-heading-2 mt-1">
                주요 링크 &amp; 프로젝트 아카이브
              </h3>
            </div>
            <p className="text-[15px] text-[#615d59]">
              작업한 코드와 기술 문서, 일상의 기록을 확인해 보세요.
            </p>
          </div>

          {/* 4 Feature Cards (2-up grid on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featureCards.map((card, idx) => (
              <a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[12px] border border-[#e6e6e6] overflow-hidden notion-shadow-level-1 hover:border-[#0075de] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Color-Blocked Header Band from Sticker Palette */}
                  <div className={`h-16 ${card.headerColor} p-3 flex items-center justify-between`}>
                    <span className="text-2xl select-none">{card.emoji}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.tagColor} tracking-wider`}>
                      {card.category}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6">
                    <h4 className="text-[20px] font-bold text-[#000000] group-hover:text-[#0075de] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-[15px] text-[#615d59] leading-relaxed mt-2">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between border-t border-[#f6f5f4] text-[14px] text-[#0075de] font-medium">
                  <span>{card.actionText}</span>
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. PRICING / CONTACT CARDS (Plan-card style)              */}
        {/* ========================================================= */}
        <section id="contact" className="bg-white rounded-[12px] border border-[#e6e6e6] p-6 sm:p-10 notion-shadow-level-1">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[#0075de] text-[13px] font-semibold tracking-wide uppercase">
              Get in Touch
            </span>
            <h3 className="text-[26px] sm:text-[30px] font-bold text-[#000000] notion-heading-2 mt-1">
              함께 이야기 나눠요
            </h3>
            <p className="text-[15px] text-[#615d59] mt-2">
              궁금한 점이나 프로젝트 제안, 커피챗은 언제든 편하게 연락해 주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Direct Email Card */}
            <div className="border border-[#e6e6e6] rounded-[8px] p-5 flex flex-col justify-between hover:border-[#0075de] transition-colors bg-[#f6f5f4]/50">
              <div>
                <span className="text-xl">✉️</span>
                <h4 className="text-[17px] font-bold text-[#000000] mt-2">이메일 문의</h4>
                <p className="text-[13px] text-[#615d59] mt-1">
                  yaeeun@example.com
                </p>
              </div>
              <a
                href="mailto:yaeeun@example.com"
                className="mt-5 w-full bg-white hover:bg-[#f6f5f4] text-[#0075de] text-[14px] font-medium py-2 rounded-[6px] border border-[#e6e6e6] text-center inline-block transition-colors"
              >
                메일 보내기
              </a>
            </div>

            {/* Coffee Chat Card (Featured Tint) */}
            <div className="border border-[#0075de] rounded-[8px] p-5 flex flex-col justify-between bg-[#f6f5f4] relative">
              <span className="absolute -top-2.5 right-4 bg-[#0075de] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                RECOMMENDED
              </span>
              <div>
                <span className="text-xl">☕️</span>
                <h4 className="text-[17px] font-bold text-[#000000] mt-2">커피챗 신청</h4>
                <p className="text-[13px] text-[#615d59] mt-1">
                  온/오프라인 가벼운 개발 이야기
                </p>
              </div>
              <a
                href="mailto:yaeeun@example.com?subject=Coffee%20Chat%20Request"
                className="mt-5 w-full bg-[#0075de] hover:bg-[#005bab] text-white text-[14px] font-medium py-2 rounded-[6px] text-center inline-block transition-colors"
              >
                신청하기
              </a>
            </div>

            {/* Profile Share Card */}
            <div className="border border-[#e6e6e6] rounded-[8px] p-5 flex flex-col justify-between hover:border-[#0075de] transition-colors bg-[#f6f5f4]/50">
              <div>
                <span className="text-xl">🔗</span>
                <h4 className="text-[17px] font-bold text-[#000000] mt-2">프로필 공유</h4>
                <p className="text-[13px] text-[#615d59] mt-1">
                  링크를 클립보드에 바로 복사
                </p>
              </div>
              <button
                onClick={handleShare}
                className="mt-5 w-full bg-white hover:bg-[#f6f5f4] text-[#31302e] text-[14px] font-medium py-2 rounded-[6px] border border-[#e6e6e6] text-center inline-block transition-colors cursor-pointer"
              >
                {copied ? "복사 완료 ✓" : "링크 복사"}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* 6. NOTION DIRECTORY FOOTER (#f6f5f4 Warm Paper)           */}
      {/* ========================================================= */}
      <footer className="w-full bg-[#f6f5f4] border-t border-[#e6e6e6] py-14 px-4 sm:px-8 text-[#31302e]">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-10 border-b border-[#e6e6e6]">
            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-3">Workspace</h5>
              <ul className="list-none p-0 m-0 space-y-2 text-[14px] text-[#615d59]">
                <li><a href="https://github.com" className="hover:text-[#0075de] transition-colors">GitHub Repository</a></li>
                <li><a href="https://velog.io" className="hover:text-[#0075de] transition-colors">Tech Blog &amp; Velog</a></li>
                <li><a href="https://instagram.com" className="hover:text-[#0075de] transition-colors">Instagram Life</a></li>
                <li><a href="mailto:yaeeun@example.com" className="hover:text-[#0075de] transition-colors">Email Dispatch</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-3">Tech Stack</h5>
              <ul className="list-none p-0 m-0 space-y-2 text-[14px] text-[#615d59]">
                <li>Next.js 16 (App Router)</li>
                <li>React 19 Framework</li>
                <li>Tailwind CSS v4</li>
                <li>TypeScript Strict</li>
              </ul>
            </div>

            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-3">Philosophy</h5>
              <ul className="list-none p-0 m-0 space-y-2 text-[14px] text-[#615d59]">
                <li>Vibe Coding Paradigm</li>
                <li>Document-like Calm</li>
                <li>User-Centric Design</li>
                <li>Continuous Writing</li>
              </ul>
            </div>

            <div>
              <h5 className="text-[14px] font-bold text-[#000000] mb-3">Information</h5>
              <ul className="list-none p-0 m-0 space-y-2 text-[14px] text-[#615d59]">
                <li>Seoul, South Korea</li>
                <li>Timezone: KST (UTC+9)</li>
                <li>Status: Open to Work</li>
                <li><button onClick={handleShare} className="text-[#0075de] hover:underline cursor-pointer">Share Portfolio</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-[#a39e98]">
            <p className="m-0">
              &copy; 2026 Jeong Yae-eun. Designed with Notion Marketing &amp; Workspace Design System.
            </p>
            <div className="flex items-center gap-3">
              <span>NotionInter Typography</span>
              <span>&bull;</span>
              <span>Paper-Soft Daylight</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
