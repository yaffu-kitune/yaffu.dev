import { Button } from "@/components/ui/button";
import React, { useState, useRef, useEffect } from "react";

export function SideMenu({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  const handleToggle = () => {
    if (toggleSidebar) {
      toggleSidebar();
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Function to check if clicked outside the menu
  const handleClickOutside = (event: { target: any; }) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sideMenuRef}>
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
        className={`fixed z-10 inset-y-0 right-0 transform bg-[#a5ede1] dark:bg-[#14394c] text-white w-64 overflow-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full"
        } md:relative`}
      >
        <nav className="px-4 py-6 flex flex-col text-center md:hidden">
          <ul className="space-y-4 mt-5 text-gray-800 dark:text-gray-200">
            <li className="flex items-center space-x-3 hover:bg-gray-100 hover:bg-opacity-20 rounded-xl dark:text-gray-50 hover:text-gray-50 text-gray-900 dark:hover:text-gray-900 ">
              <HomeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <a
                className="text-sm font-medium transition-color  px-2 py-1 rounded-md"
                href="/"
              >
                Home
                <ChevronRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-100 hover:bg-opacity-20 rounded-xl dark:text-gray-50 hover:text-gray-50 text-gray-900 dark:hover:text-gray-900  ">
              <TagsIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <a
                className="text-sm font-medium transition-colors  px-2 py-1 rounded-md "
                href="/blog"
              >
                Blog
                <ChevronRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-100 hover:bg-opacity-20 rounded-xl dark:text-gray-50 hover:text-gray-50 text-gray-900 dark:hover:text-gray-900 ">
              <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <a
                className="text-sm font-medium transition-colors  px-2 py-1 rounded-md "
                href="#"
              >
                About Me
                <ChevronRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="flex-col w-full hidden gap-8 ml-10 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a className="" href="/">
          ホーム
        </a>
        <a className="text-gray-9000 dark:text-gray-400" href="/blog">
          ブログ
        </a>
        <a className="text-gray-9000 dark:text-gray-400 " href="#">
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

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function TagsIcon(props: any) {
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
      <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
      <path d="M6 9.01V9" />
      <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
