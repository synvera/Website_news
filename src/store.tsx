import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Article } from "./lib/api";

type Theme = "light" | "dark" | "system";

interface AppState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  preferredCategories: string[];
  setPreferredCategories: (categories: string[]) => void;
  bookmarks: Article[];
  addBookmark: (article: Article) => void;
  removeBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
  isOnline: boolean;
}

const AppContext = createContext<AppState | undefined>(undefined);

const STORAGE_KEYS = {
  THEME: "news-app-theme",
  CATEGORIES: "news-app-categories",
  BOOKMARKS: "news-app-bookmarks",
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [preferredCategories, setPreferredCategoriesState] = useState<string[]>([]);
  const [bookmarks, setBookmarks] = useState<Article[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    
    // Load theme
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }

    // Load preferred categories
    const savedCategories = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    if (savedCategories) {
      setPreferredCategoriesState(JSON.parse(savedCategories));
    }

    // Load bookmarks
    const savedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }

    // Online status
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Apply theme
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.toggle("dark", systemTheme === "dark");
    } else {
      root.classList.toggle("dark", theme === "dark");
    }
    
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setPreferredCategories = (categories: string[]) => {
    setPreferredCategoriesState(categories);
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  };

  const addBookmark = (article: Article) => {
    setBookmarks((prev) => {
      const updated = [...prev, article];
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return updated;
    });
  };

  const removeBookmark = (articleId: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((a) => a.id !== articleId);
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (articleId: string) => {
    return bookmarks.some((a) => a.id === articleId);
  };

  if (!mounted) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        preferredCategories,
        setPreferredCategories,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        isOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppStore must be used within an AppProvider");
  }
  return context;
}
