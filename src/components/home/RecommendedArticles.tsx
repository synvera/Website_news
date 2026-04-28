import { useEffect, useState } from "react";
import { getRecommendedArticles, type Article } from "../../lib/api";
import { useAppStore } from "../../store";
import { ArticleCard } from "../article/ArticleCard";
import { Skeleton } from "../ui/Skeleton";

export function RecommendedArticles() {
  const { preferredCategories } = useAppStore();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRecommendedArticles(preferredCategories);
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch recommended articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [preferredCategories]);

  if (loading) {
    return (
      <section className="px-4 py-4">
        <h2 className="text-lg font-semibold mb-3 text-foreground">Rekomendasi</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
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
      </section>
    );
  }

  return (
    <section className="px-4 py-4">
      <h2 className="text-lg font-semibold mb-3 text-foreground">Rekomendasi</h2>
      <div className="space-y-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} variant="horizontal" />
        ))}
      </div>
    </section>
  );
}
