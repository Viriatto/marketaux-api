import APIInterface, {
  APIEndpoints,
  APIEntity,
} from "../../lib/APIInterface.js";

export enum APINewsEndpoints {
  Feed = "/news/all",
}

export interface APIArticle {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  relevance_score: number | null;
  entities: APIEntity[];
  similar: unknown[];
}

export default class APINewsInterface extends APIInterface {
  public async getFeed(
    params?: APIEndpoints[APINewsEndpoints.Feed]["searchParams"],
  ) {
    return this._fetch(APINewsEndpoints.Feed, params);
  }
}
