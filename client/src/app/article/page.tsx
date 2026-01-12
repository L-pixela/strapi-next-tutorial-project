import { ArticleCard } from "@/components/ui/Card";
import { ArticleRepository } from "@/repositories/article.repositoy";
import { extractPlainText } from "@/lib/richtext";

export default async function ArticlesPage() {
  const articles = await ArticleRepository();

  return (
    <div className="flex flex-wrap">
      {articles.map(article => (
        <ArticleCard
          key={article.documentId}
          title={article.title}
          description={extractPlainText(article.body).slice(0, 150) + "..."}
        />
      ))}
    </div>
  );
}
