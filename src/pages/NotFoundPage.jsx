import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { cn } from "../lib/cn";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/", { replace: true });
  const navigateBack = () => navigate(-1, { replace: true });
  return (
    <div className="mx-auto my-auto flex flex-col justify-between gap-4">
      <h1 className="text-5xl">
        앗.. 요청하신 페이지를 찾을 수 없습니다.
        <br />
        <span>불편을 드려 죄송합니다.</span>
      </h1>
      <p>
        존재하지 않는 주소를 입력하셨거나,
        <br />
        요청하신 페이지의 주소가 변경 혹은 삭제되어 페이지를 찾을 수 없습니다.
      </p>
      <div className="flex justify-between">
        <Button
          className={cn(
            "w-32 rounded-2xl border-current bg-violet-500/50 py-2 text-lg font-bold text-white transition-colors duration-300",
            "hover:bg-linear-to-r hover:from-pink-500 hover:to-blue-500",
          )}
          onClick={navigateToHome}
        >
          홈으로 가기
        </Button>
        <Button
          className={cn(
            "w-32 rounded-2xl border-current bg-violet-500/50 py-2 text-lg font-bold text-white transition-colors duration-300",
            "hover:bg-linear-to-r hover:from-pink-500 hover:to-blue-500",
          )}
          onClick={navigateBack}
        >
          이전 페이지
        </Button>
      </div>
    </div>
  );
}
