import { Author } from "./author";
import { Category } from "./category";
import { Tag } from "./tag";

export interface Article{
    id: number;
    documentId: string;
    title: string;
    body: RichTextNode[];
    author: Author;

    categories: Category[];
    tags: Tag[];
    publishedAt: Date;
}

export interface RichTextNode{
    type: string;
    text?: string;
    children?: RichTextNode[];
}