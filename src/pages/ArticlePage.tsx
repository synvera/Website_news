import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Bookmark, BookmarkCheck, Eye, Calendar, User } from "lucide-react";
import { getArticleById, getRelatedArticles, type Article } from "../lib/api";
import { formatDate } from "../lib/date-utils";
import { useAppStore } from "../store";
import { Skeleton } from "../components/ui/Skeleton";
import { cn } from "../lib/utils";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isBookmarked, addBookmark, removeBookmark, isOnline } = useAppStore();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      
      setLoading(true);
      try {
        const articleData = await getArticleById(id);
        if (articleData) {
          setArticle(articleData);
          const related = await getRelatedArticles(id, articleData.category);
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleBookmark = () => {
    if (!article) return;
    if (isBookmarked(article.id)) {
      removeBookmark(article.id);
    } else {
      addBookmark(article);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen max-w-[480px] mx-auto bg-background">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border max-w-[480px] mx-auto">
          <div className="flex items-center justify-between h-14 px-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </header>
        <main className="pt-14 pb-8">
          <Skeleton className="aspect-video w-full" />
          <div className="px-4 py-4 space-y-3">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen max-w-[480px] mx-auto bg-background flex flex-col items-center justify-center px-4">
        <h1 className="text-xl font-semibold mb-2 text-foreground">Artikel tidak ditemukan</h1>
        <p className="text-muted-foreground mb-4">Artikel yang Anda cari tidak tersedia</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const bookmarked = isBookmarked(article.id);

  return (
    <div className="min-h-screen max-w-[480px] mx-auto bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border max-w-[480px] mx-auto">
        <div className="flex items-center justify-between h-14 px-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          {!isOnline && (
            <span className="text-xs text-destructive font-medium px-2 py-1 bg-destructive/10 rounded-full">
              Offline
            </span>
          )}
          <button
            onClick={handleBookmark}
            className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors"
            aria-label={bookmarked ? "Hapus bookmark" : "Tambah bookmark"}
          >
            {bookmarked ? (
              <BookmarkCheck className="w-5 h-5 text-primary" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-14 pb-8">
        {/* Featured Image */}
        <div className="aspect-video w-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="px-4 py-4">
          {/* Category */}
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-xl font-bold leading-tight mb-4 text-foreground text-balance">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span>{article.views.toLocaleString("id-ID")} views</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-sm max-w-none text-foreground prose-p:text-foreground prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="px-4 py-6 border-t border-border">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Artikel Terkait</h2>
            <div className="space-y-3">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.id}`}
                  className="flex gap-3 p-3 rounded-xl bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-primary">
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-medium text-sm leading-tight line-clamp-2 mt-1 text-foreground">
                      {relatedArticle.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
