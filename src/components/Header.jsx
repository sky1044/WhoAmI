import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/cn";
import Button from "./Button";
import { useState } from "react";
import { useSidebar } from "../contexts/SidebarContext";

export default function Header({ className }) {
  const location = useLocation();
  const path = location.pathname;
  const [buttonStatus, setButtonStatus] = useState("origin");
  const { toggleSidebar } = useSidebar();

  const handleChange = () => {
    setButtonStatus((prev) => (prev === "origin" ? "change" : "origin"));
    toggleSidebar();
  };

  /** 공통 네비게이션 링크 스타일 */
  const linkStyle = cn(
    "bg-clip-text text-lg font-semibold text-white cursor-pointer",
    "transition-colors duration-400 ease-in-out",
    "hover:bg-linear-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent",
  );

  const isMyPage = path.startsWith("/mypage");
  const isCommunity = path.startsWith("/community");
  const isHome = path === "/";

  /** 라우트별 네비게이션 표시 규칙 */
  const navLinks = [
    { show: isHome || isMyPage, to: "/community", label: "커뮤니티" },
    { show: isCommunity, to: "/mypage", label: "MYPAGE" },
    { show: true, to: "#", label: "AboutUs" },
  ];

  return (
    <header
      className={cn("flex items-center justify-between px-10 py-5", className)}
    >
      {/* 좌측: 로고 + 햄버거 */}
      <div className="flex items-center gap-8">
        {/* 홈("/")에서는 햄버거 버튼 숨김 */}
        {!isHome && (
          <Button
            type="button"
            className="group cursor-pointer appearance-none transition-all duration-400 ease-in-out"
            onClick={handleChange}
            status={buttonStatus}
          >
            {/* 햄버거 선 3개 */}
            {[0, 1, 2].map((i) => {
              const barBase =
                "my-1.5 h-[5px] w-[35px] bg-zinc-900 transition-all duration-400 ease-in-out group-hover:animate-spin";
              const barTransform =
                i === 0
                  ? buttonStatus === "change" && "translate-y-[11px] -rotate-45"
                  : i === 1
                    ? buttonStatus === "change" && "opacity-0"
                    : buttonStatus === "change" &&
                      "-translate-y-[11px] rotate-45";

              return <div key={i} className={cn(barBase, barTransform)} />;
            })}
          </Button>
        )}

        {/* 로고 */}
        <Link
          to="/"
          className={cn(
            "bg-clip-text text-3xl font-bold transition-all duration-700 ease-in-out",
            "hover:bg-linear-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent",
          )}
        >
          WHEREISIT
        </Link>
      </div>

      {/* 우측: 네비게이션 메뉴 */}
      <ul className="flex flex-row gap-7">
        {navLinks
          .filter((link) => link.show)
          .map((link, i) => (
            <li key={i}>
              <Link to={link.to} className={linkStyle}>
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </header>
  );
}
