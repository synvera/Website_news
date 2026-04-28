import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, Eye } from "lucide-react";
import { cn } from "../../lib/utils";
import { formatDistanceToNow } from "../../lib/date-utils";
import { useAppStore } from "../../store";
import type { Article } from "../../lib/api";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal" | "featured";
}

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useAppStore();
  const bookmarked = isBookmarked(article.id);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(article.id);
    } else {
      addBookmark(article);
    }
  };

  if (variant === "featured") {
    return (
      <Link
        to={`/article/${article.id}`}
        className="relative block rounded-xl overflow-hidden group"
      >
        <div className="aspect-[16/9] w-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-primary text-primary-foreground rounded">
            {article.category}
          </span>
          <h3 className="text-white font-semibold text-base leading-tight line-clamp-2 mb-2">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 text-white/70 text-xs">
            <span>{formatDistanceToNow(article.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {article.views.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
        <button
          onClick={handleBookmark}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
          aria-label={bookmarked ? "Hapus bookmark" : "Tambah bookmark"}
        >
          {bookmarked ? (
            <BookmarkCheck className="w-5 h-5 text-primary" />
          ) : (
            <Bookmark className="w-5 h-5 text-white" />
          )}
        </button>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        to={`/article/${article.id}`}
        className="flex gap-3 p-3 rounded-xl bg-card hover:bg-muted/50 transition-colors"
      >
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <span className="text-xs font-medium text-primary mb-1">
            {article.category}
          </span>
          <h3 className="font-medium text-sm leading-tight line-clamp-2 mb-auto text-foreground">
            {article.title}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(article.publishedAt)}
            </span>
            <button
              onClick={handleBookmark}
              className="p-1 rounded hover:bg-muted transition-colors"
              aria-label={bookmarked ? "Hapus bookmark" : "Tambah bookmark"}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-primary" />
              ) : (
                <Bookmark className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/article/${article.id}`}
      className="block rounded-xl overflow-hidden bg-card hover:bg-muted/50 transition-colors"
    >
      <div className="aspect-video w-full">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary">
            {article.category}
          </span>
          <button
            onClick={handleBookmark}
            className="p-1 rounded hover:bg-muted transition-colors"
            aria-label={bookmarked ? "Hapus bookmark" : "Tambah bookmark"}
          >
            {bookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-primary" />
            ) : (
              <Bookmark className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
        <h3 className="font-medium text-sm leading-tight line-clamp-2 mb-2 text-foreground">
          {article.title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{formatDistanceToNow(article.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {article.views.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </Link>
  );
}
