import { useEffect, useState } from "react";
import { getBreakingNews, type Article } from "../../lib/api";
import { ArticleCard } from "../article/ArticleCard";
import { Skeleton } from "../ui/Skeleton";

export function BreakingNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBreakingNews();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch breaking news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="px-4 py-4">
        <h2 className="text-lg font-semibold mb-3 text-foreground">Breaking News</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0 w-72">
              <Skeleton className="aspect-[16/9] rounded-xl" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-4">
      <h2 className="text-lg font-semibold mb-3 text-foreground">Breaking News</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
        {articles.map((article) => (
          <div key={article.id} className="flex-shrink-0 w-72 snap-start">
            <ArticleCard article={article} variant="featured" />
          </div>
        ))}
      </div>
    </section>
  );
}
