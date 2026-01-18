import { apiFetch } from "@/lib/api";
import { Article } from "@/domains/article";

type StrapiListResponse<T> = {
  data: T[];
  meta: unknown;
};

type StrapiSingleResponse<T> = {
  data: T;
  meta: unknown;
};

export class ArticleRepository{
  async getAllArticles(){
    const response = await apiFetch<StrapiListResponse<Article>>(
    "/api/articles?populate=*"
  );

  return response.data;
  }

  async getArticleByDocumentId(documentId: string){
    const response = await apiFetch<StrapiSingleResponse<Article>>(
      `/api/articles/${documentId}?populate=*`
    );

    return response.data;
  }
}