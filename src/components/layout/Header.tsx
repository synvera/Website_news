import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAppStore } from "../../store";

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export function Header({ title, showBack }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOnline } = useAppStore();
  
  const isMainPage = ["/", "/discover", "/bookmark", "/settings"].includes(location.pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border max-w-[480px] mx-auto">
      <div className="flex items-center h-14 px-4">
        {(showBack || !isMainPage) && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 mr-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-lg font-semibold text-foreground truncate">{title}</h1>
        {!isOnline && (
          <span className="ml-auto text-xs text-destructive font-medium px-2 py-1 bg-destructive/10 rounded-full">
            Offline
          </span>
        )}
      </div>
    </header>
  );
}
