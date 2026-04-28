import { useEffect, useState } from "react";
import { Sun, Moon, Monitor, Wifi, WifiOff, Check } from "lucide-react";
import { useAppStore } from "../store";
import { getCategories, type Category } from "../lib/api";
import { cn } from "../lib/utils";

type Theme = "light" | "dark" | "system";

const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Terang", icon: Sun },
  { value: "dark", label: "Gelap", icon: Moon },
  { value: "system", label: "Sistem", icon: Monitor },
];

export default function SettingsPage() {
  const { theme, setTheme, preferredCategories, setPreferredCategories, isOnline } = useAppStore();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const toggleCategory = (categoryName: string) => {
    if (preferredCategories.includes(categoryName)) {
      setPreferredCategories(preferredCategories.filter((c) => c !== categoryName));
    } else {
      setPreferredCategories([...preferredCategories, categoryName]);
    }
  };

  return (
    <div className="min-h-full px-4 py-4">
      {/* Connection Status */}
      <section className="mb-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-3">Status Koneksi</h2>
        <div className={cn(
          "flex items-center gap-3 p-4 rounded-xl",
          isOnline ? "bg-green-500/10" : "bg-destructive/10"
        )}>
          {isOnline ? (
            <>
              <Wifi className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium text-foreground">Online</p>
                <p className="text-sm text-muted-foreground">Terhubung ke internet</p>
              </div>
            </>
          ) : (
            <>
              <WifiOff className="w-5 h-5 text-destructive" />
              <div>
                <p className="font-medium text-foreground">Offline</p>
                <p className="text-sm text-muted-foreground">Tidak terhubung ke internet</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Theme Settings */}
      <section className="mb-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-3">Tema Aplikasi</h2>
        <div className="grid grid-cols-3 gap-2">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors",
                theme === option.value
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:bg-muted/50"
              )}
              aria-label={`Tema ${option.label}`}
            >
              <option.icon className={cn(
                "w-6 h-6",
                theme === option.value ? "text-primary" : "text-muted-foreground"
              )} />
              <span className={cn(
                "text-sm font-medium",
                theme === option.value ? "text-primary" : "text-foreground"
              )}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Category Preferences */}
      <section className="mb-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">Preferensi Kategori</h2>
        <p className="text-xs text-muted-foreground mb-3">
          Pilih kategori yang ingin ditampilkan di beranda
        </p>
        <div className="space-y-2">
          {categories.map((category) => {
            const isSelected = preferredCategories.includes(category.name);
            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.name)}
                className={cn(
                  "flex items-center justify-between w-full p-4 rounded-xl border transition-colors",
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:bg-muted/50"
                )}
                aria-label={`${isSelected ? "Hapus" : "Tambah"} kategori ${category.name}`}
              >
                <span className={cn(
                  "font-medium",
                  isSelected ? "text-primary" : "text-foreground"
                )}>
                  {category.name}
                </span>
                {isSelected && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            );
          })}
        </div>
        {preferredCategories.length === 0 && (
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Tidak ada kategori dipilih. Semua berita akan ditampilkan.
          </p>
        )}
      </section>

      {/* App Info */}
      <section className="text-center py-4">
        <p className="text-xs text-muted-foreground">NewsApp v1.0.0</p>
        <p className="text-xs text-muted-foreground">LKS Kota Tangerang Selatan 2026</p>
      </section>
    </div>
  );
}
