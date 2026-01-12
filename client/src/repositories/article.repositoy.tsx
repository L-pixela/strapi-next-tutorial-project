import { apiFetch } from "@/lib/api";
import { Article } from "@/domains/article";

type StrapiResponse<T> = {
  data: T[];
  meta: unknown;
};

export class ArticleRepository{
  async getAllArticles(){
    const response = await apiFetch<StrapiResponse<Article>>(
    "articles?populate=*"
  );

  return response.data;
  }
}