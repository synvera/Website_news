import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

const pageTitles: Record<string, string> = {
  "/": "Beranda",
  "/discover": "Jelajahi",
  "/bookmark": "Bookmark",
  "/settings": "Pengaturan",
};

export function AppShell() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "NewsApp";

  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-background">
      <Header title={title} />
      <main className="flex-1 overflow-y-auto pb-20 pt-14">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
