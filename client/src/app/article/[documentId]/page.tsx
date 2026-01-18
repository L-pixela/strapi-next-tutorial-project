import { ArticleRepository } from "@/repositories/article.repositoy";
import { extractPlainText } from "@/lib/richtext";
import { notFound } from "next/navigation";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  const repository = new ArticleRepository();
  const article = await repository.getArticleByDocumentId(documentId);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Article Header */}
      <article className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-400">
        <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
        
        {/* Article Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-800">
          {article.author && (
            <div className="flex items-center gap-2">
              <span className="text-green-400">By:</span>
              <span>{article.author.name}</span>
            </div>
          )}
          
          {article.publishedAt && (
            <div className="flex items-center gap-2">
              <span className="text-green-400">Published:</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Categories */}
        {article.categories && article.categories.length > 0 && (
          <div className="mb-6">
            <h3 className="text-green-400 text-sm font-semibold mb-2">Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {article.categories.map((category) => (
                <span
                  key={category.id}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-green-600"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-green-400 text-sm font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-800 text-green-400 px-3 py-1 rounded text-xs border border-gray-700"
                >
                  #{tag.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {extractPlainText(article.body)}
          </div>
        </div>
      </article>

      {/* Back Button */}
      <div className="mt-8">
        <a
          href="/article"
          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white rounded border-2 border-green-600 hover:bg-green-600 transition-colors"
        >
          <span>← Back to Articles</span>
        </a>
      </div>
    </div>
  );
}
