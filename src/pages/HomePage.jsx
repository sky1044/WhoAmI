import { useNavigate } from "react-router-dom";
import { cn } from "../lib/cn";

export default function HomePage() {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/mypage ");

  return (
    <div className="flex flex-1 flex-col items-stretch py-5">
      <div
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-4 self-center",
          "sm:max-md:text-2xl",
        )}
      >
        <h1 className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-9xl font-extrabold text-transparent">
          WHEREISIT
        </h1>
        <h2 className="text-3xl font-light">어디에 뒀지?</h2>
        <button
          className={cn(
            "w-32 rounded-2xl border-current bg-violet-500/50 py-2 text-lg font-bold text-white transition-colors duration-300",
            "hover:bg-linear-to-r hover:from-pink-500 hover:to-blue-500",
          )}
          onClick={navigateToLogin}
        >
          시작하기
        </button>
        <h3 className="text-2xl font-semibold">정리 한번하고 바로 찾으세요</h3>
      </div>
    </div>
  );
}
