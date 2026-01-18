import { ArticleCard } from "@/components/article/ArticleCard";
import { ArticleRepository } from "@/repositories/article.repositoy";
import { extractPlainText } from "@/lib/richtext";

export default async function ArticlesPage() {
  const repository = new ArticleRepository();
  const articles = await repository.getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-2">Articles & News</h1>
      <p className="text-gray-400 mb-8">Explore our latest articles and updates</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard
            key={article.documentId}
            title={article.title}
            description={extractPlainText(article.body).slice(0, 150) + "..."}
            documentId={article.documentId}
          />
        ))}
      </div>
    </div>
  );
}
