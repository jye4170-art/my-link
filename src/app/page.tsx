"use client";

import React, { useState } from "react";

// --- 간결한 SVG 아이콘 ---
function IconGithub({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function IconInstagram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

function IconShare({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
      <polyline points="16 6 12 2 8 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function IconArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast("프로필 주소가 복사되었습니다 ✨");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 심플 링크 목록
  const links = [
    {
      title: "GitHub",
      subtitle: "공부한 코드와 프로젝트 둘러보기",
      url: "https://github.com",
      emoji: "💻",
    },
    {
      title: "공부 블로그 / 노션",
      subtitle: "바이브 코딩 학습 기록 & 정리",
      url: "https://velog.io",
      emoji: "🌱",
    },
    {
      title: "인스타그램",
      subtitle: "일상과 코딩 라이프",
      url: "https://instagram.com",
      emoji: "📷",
    },
    {
      title: "이메일 보내기",
      subtitle: "궁금한 점이나 함께 이야기 나눠요",
      url: "mailto:yaeeun@example.com",
      emoji: "💌",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 flex flex-col items-center justify-center p-6 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* 복사 완료 토스트 알림 */}
      {toast && (
        <div className="fixed top-6 z-50 animate-fade-in transition-all">
          <div className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full shadow-lg">
            <IconCheck className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* 중앙 정렬 심플 컨테이너 */}
      <main className="w-full max-w-sm sm:max-w-md flex flex-col items-center text-center my-auto py-10">
        {/* 상단 프로필 아바타 */}
        <div className="relative mb-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center text-4xl sm:text-5xl shadow-sm border border-neutral-200/60 dark:border-neutral-800 select-none transition-transform hover:scale-105 duration-200">
            👩🏻‍💻
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-neutral-950 rounded-full" />
        </div>

        {/* 이름 */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          정예은
        </h1>

        {/* 심플 소개글 */}
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-xs break-keep">
          코드로 더 나은 사용자 경험을 만드는 개발자입니다.
          <br />
          새로운 도전을 즐기며 배운 것을 꾸준히 기록하고 있습니다.
        </p>

        {/* 소셜 빠른 링크 바 */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-all"
          >
            <IconGithub className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-all"
          >
            <IconInstagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:yaeeun@example.com"
            aria-label="Email"
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-all"
          >
            <IconMail className="w-5 h-5" />
          </a>
          <button
            onClick={handleShare}
            aria-label="프로필 공유하기"
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 transition-all"
            title="프로필 링크 복사"
          >
            {copied ? <IconCheck className="w-5 h-5 text-emerald-500" /> : <IconShare className="w-5 h-5" />}
          </button>
        </div>

        {/* 심플 링크 버튼 리스트 */}
        <div className="w-full flex flex-col gap-3 mt-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5 text-left">
                <span className="text-xl select-none">{link.emoji}</span>
                <div>
                  <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white">
                    {link.title}
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {link.subtitle}
                  </p>
                </div>
              </div>
              <div className="text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                <IconArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* 푸터 */}
        <footer className="mt-12 text-xs text-neutral-400 dark:text-neutral-600">
          © 2026 정예은. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
