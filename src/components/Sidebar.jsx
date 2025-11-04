import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../lib/cn";

const navMenu = {
  mypage: {
    basePath: "mypage",
    area: { label: "Jihoon's home" },
    filter: [
      { label: "홈", path: "/mypage" },
      { label: "아이템", path: "items" },
      { label: "카테고리", path: "categories" },
      { label: "위치", path: "locations" },
    ],
    userMenu: [
      { label: "최근 활동", path: "recent-activities" },
      { label: "설정", path: "settings" },
      { label: "도움말", path: "supports" },
    ],
  },
  community: {
    basePath: "community",
    area: { label: "Jihoon's home" },
    filter: [
      { label: "홈", path: "/community" },
      { label: "라이브러리", path: "library" },
      { label: "프로필", path: "profile" },
      { label: "위치", path: "locations" },
    ],
    userMenu: [
      { label: "최근 활동", path: "recent-activities" },
      { label: "설정", path: "settings" },
      { label: "도움말", path: "supports" },
    ],
  },
};

export default function Sidebar({ page }) {
  const location = useLocation();
  const currentPage = navMenu[page];

  // ✅ Home active 여부
  const isMyPageActive = currentPage.filter.some(() =>
    location.pathname.endsWith("/mypage"),
  );
  // ✅ filter 그룹 active 여부
  const isFilterActive = currentPage.filter.some((item) =>
    location.pathname.includes(`/mypage/${item.path}`),
  );

  // ✅ userMenu 그룹 active 여부
  const isUserMenuActive = currentPage.userMenu.some((item) =>
    location.pathname.includes(`/mypage/${item.path}`),
  );

  return (
    <div className="flex flex-col items-stretch gap-8 rounded-2xl text-xl">
      <div className="p-4">
        <p className="text-2xl font-semibold">{currentPage.area.label}</p>
      </div>
      <div
        className={cn(
          "p-4 transition-colors duration-400",
          isFilterActive ? "shadow-[0_0_20px_10px_rgba(0,0,0,0.2)]" : "",
          isMyPageActive ? "shadow-[0_0_20px_10px_rgba(0,0,0,0.2)]" : "",
        )}
      >
        {currentPage.filter.map((myPageMenu, i) => (
          <NavLink
            key={i}
            to={
              myPageMenu.path.startsWith("/")
                ? myPageMenu.path
                : `/${currentPage.basePath}/${myPageMenu.path}`
            }
            end={myPageMenu.path === "/mypage"}
            className={({ isActive }) =>
              cn(
                "block w-fit bg-clip-text text-2xl font-semibold transition-colors duration-400 ease-in-out not-last:mb-5",
                isActive
                  ? "bg-linear-to-br from-pink-500 to-blue-500 text-transparent"
                  : "",
              )
            }
          >
            {myPageMenu.label}
          </NavLink>
        ))}
      </div>
      <div
        className={cn(
          "p-4 transition-colors duration-400",
          isUserMenuActive ? "shadow-[0_0_20px_10px_rgba(0,0,0,0.2)]" : "",
        )}
      >
        {currentPage.userMenu.map((myPageMenu, i) => (
          <NavLink
            key={i}
            to={
              myPageMenu.path.startsWith("/")
                ? myPageMenu.path
                : `/${currentPage.basePath}/${myPageMenu.path}`
            }
            className={({ isActive }) =>
              cn(
                "block w-fit bg-clip-text text-2xl font-semibold transition-colors duration-400 ease-in-out not-last:mb-5",
                isActive
                  ? "bg-linear-to-br from-pink-500 to-blue-500 text-transparent"
                  : "",
              )
            }
          >
            {myPageMenu.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
