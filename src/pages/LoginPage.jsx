import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import Link from "../components/Link";

export default function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.tartet;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="h-full w-full px-20 py-8">
      <div className="flex flex-none basis-200 flex-row divide-x-2 divide-black">
        <div className="flex flex-1 flex-col items-center border-current bg-blue-500">
          <p>WHEREISIT으로 숨겨진 물건을 찾으세요</p>
          <p>기억에서 사라진 물건을 찾을지도 몰라요</p>
          <p>또 사면 아깝잖아요!!</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 border-current bg-white">
          <h1 className="text-2xl">로그인</h1>
          <form className="flex flex-col items-center">
            <Label className="text-lg" htmlFor="email">
              이메일
            </Label>
            <Input
              id="email"
              className="border"
              name="email"
              type="email"
              placeholder="이메일"
              value={values.email}
              onChange={handleChange}
            />
            <Label className="text-lg" htmlFor="password">
              비밀번호
            </Label>
            <Input
              id="password"
              className="border"
              name="password"
              type="password"
              placeholder="비밀번호"
              value={values.password}
              onChange={handleChange}
            />
            <div className="flex flex-row justify-between text-sm">
              <p>로그인 상태 유지</p>
              <p>비밀번호 찾기</p>
            </div>
            <Button
              className="rounded-2xl border"
              type="button"
              as={Link}
              to="/"
              reloadDocument
            >
              로그인
            </Button>
            <div>
              아직 WHEREISIT 회원이 아니신가요?{" "}
              <Link className="text-blue-600" to="/register">
                이메일로 회원가입
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
