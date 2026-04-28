import { useEffect, useState, useCallback, useRef } from "react";
import { Search, X } from "lucide-react";
import { getArticles, getCategories, type Article, type Category } from "../lib/api";
import { useDebounce } from "../hooks/useDebounce";
import { ArticleCard } from "../components/article/ArticleCard";
import { Skeleton } from "../components/ui/Skeleton";
import { cn } from "../lib/utils";

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  
  const debouncedSearch = useDebounce(searchQuery, 300);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  // Fetch articles when search or category changes
  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      setPage(1);
      try {
        const result = await getArticles(
          1,
          5,
          selectedCategory === "all" ? undefined : selectedCategory,
          debouncedSearch || undefined
        );
        setArticles(result.articles);
        setHasMore(result.hasMore);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [debouncedSearch, selectedCategory]);

  // Load more articles
  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const result = await getArticles(
        nextPage,
        5,
        selectedCategory === "all" ? undefined : selectedCategory,
        debouncedSearch || undefined
      );
      setArticles((prev) => [...prev, ...result.articles]);
      setHasMore(result.hasMore);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to load more articles:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [page, selectedCategory, debouncedSearch, loadingMore, hasMore]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loading, loadingMore, loadMore]);

  return (
    <div className="min-h-full">
      {/* Search Bar */}
      <div className="px-4 py-3 sticky top-14 bg-background z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berita..."
            className="w-full h-11 pl-10 pr-10 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Cari berita"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-background"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            Semua
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="px-4 py-4">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="w-24 h-24 rounded-lg flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Tidak ada artikel ditemukan</p>
          </div>
        ) : (
          <div className="space-y-2">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>
        )}

        {/* Load More Trigger */}
        {hasMore && !loading && (
          <div ref={loadMoreRef} className="py-4">
            {loadingMore && (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
