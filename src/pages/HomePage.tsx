import { BreakingNews } from "../components/home/BreakingNews";
import { RecommendedArticles } from "../components/home/RecommendedArticles";

export default function HomePage() {
  return (
    <div className="min-h-full">
      <BreakingNews />
      <RecommendedArticles />
    </div>
  );
}
