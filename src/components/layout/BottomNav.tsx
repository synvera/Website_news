import { NavLink } from "react-router-dom";
import { Home, Compass, Bookmark, Settings } from "lucide-react";
import { cn } from "../../lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/discover", icon: Compass, label: "Discover" },
  { path: "/bookmark", icon: Bookmark, label: "Bookmark" },
  { path: "/settings", icon: Settings, label: "Setting" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border max-w-[480px] mx-auto pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
            aria-label={item.label}
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={cn("w-5 h-5", isActive && "fill-current")}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
