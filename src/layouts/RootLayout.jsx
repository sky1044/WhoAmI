import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { cn } from "../lib/cn";

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col items-stretch">
      <Header className="h-20" />
      <main
        className={cn(
          "max-h-[calc(100% - 160px)] my-8 shrink-0 grow-1",
          "flex flex-col",
        )}
      >
        <Outlet />
      </main>
      <Footer className="h-20 bg-black" />
    </div>
  );
}
