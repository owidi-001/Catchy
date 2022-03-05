import { Source } from "./source";

export class News {
    source!: Source;
    author?:string | null;
    title!: string;
    description!: string;
    url!: string;
    urlToImage!: string;
    publishedAt!: string;
    content!: string;

    
}
