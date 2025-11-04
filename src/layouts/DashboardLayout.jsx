import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { cn } from "../lib/cn";
import { useSidebar } from "../contexts/SidebarContext";
import useCurrentPageGroup from "../hooks/useCurrentPageGroup";

export default function DashboardLayout() {
  const { isSidebarOpen } = useSidebar();
  const currentPage = useCurrentPageGroup();

  return (
    <div className="flex flex-1 px-8">
      <div className="mx-auto flex max-w-[1536px] flex-1 flex-col items-stretch gap-8 transition-all duration-400 ease-in-out lg:flex-row">
        {/* Sidebar */}
        <nav
          className={cn(
            "before:glass-card-before glass-card flex-none rounded-2xl py-4 shadow transition-all duration-400 ease-in-out",
            "w-[280px] translate-x-0", // 기본
            !isSidebarOpen && "-translate-x-[312px]", // 숨김 상태일 때 왼쪽으로 밀기
          )}
        >
          <Sidebar page={currentPage} />
        </nav>

        {/* Main */}
        <main
          className={cn(
            "before:glass-card-before glass-card rounded-2xl px-2 py-4 transition-all duration-400 ease-in-out",
            "max-w-[calc(100vw-64px)] shrink-1 grow-1 basis-[870px]",
            isSidebarOpen ? "ml-0" : "-ml-[312px]", // 살짝 왼쪽으로 당겨지는 효과
          )}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
