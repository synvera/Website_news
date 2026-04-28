import { BookmarkX } from "lucide-react";
import { useAppStore } from "../store";
import { ArticleCard } from "../components/article/ArticleCard";

export default function BookmarkPage() {
  const { bookmarks } = useAppStore();

  if (bookmarks.length === 0) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center px-4 py-12">
        <BookmarkX className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="text-lg font-semibold text-foreground mb-2">Belum ada bookmark</h2>
        <p className="text-sm text-muted-foreground text-center">
          Simpan artikel favorit Anda untuk dibaca nanti
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-full px-4 py-4">
      <p className="text-sm text-muted-foreground mb-4">
        {bookmarks.length} artikel tersimpan
      </p>
      <div className="space-y-2">
        {bookmarks.map((article) => (
          <ArticleCard key={article.id} article={article} variant="horizontal" />
        ))}
      </div>
    </div>
  );
}
