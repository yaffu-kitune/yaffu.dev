import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export function SideMenu({
    isSidebarOpen,
    toggleSidebar,
  }: {
    isSidebarOpen?: boolean;
    toggleSidebar?: () => void;
  }) {
    const handleToggle = () => {
      if (toggleSidebar) {
        // 外部から渡されたトグル関数がある場合
        toggleSidebar();
      } else {
        // デフォルトのトグル動作
        setIsMenuOpen(!isMenuOpen);
      }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Button
        className="md:hidden"
        size="icon"
        variant="ghost"
        onClick={handleToggle}
      >
        <MenuIcon className="w-6 h-6" />
        <span className="sr-only">メニュー</span>
      </Button>
      <div
        className={`fixed z-10 inset-y-0 left-0 transform bg-[#2c3e50] text-white w-64  overflow-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative`}
      >
        <nav className="flex flex-col gap-3 mt-10 mb-6 text-center md:hidden">
          <button onClick={handleToggle} className="text-white mb-3">
            閉じる
          </button>
          <a href="/">ホーム</a>
          <a href="/blog">ブログ</a>
          <a href="#">未定</a>
        </nav>
      </div>
      <nav className="flex-col w-full hidden gap-8 ml-10 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a className="" href="/">
          ホーム
        </a>
        <a
          className="text-gray-500 dark:text-gray-400"
          href="/blog"
        >
          ブログ
        </a>
        <a className="text-gray-500 dark:text-gray-400 " href="#">
          未定
        </a>
      </nav>
    </div>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
