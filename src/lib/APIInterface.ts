import API from "../api.js";
import {
  APIArticle,
  APINewsEndpoints,
} from "../interfaces/news/APINewsInterface.js";
import { Utils } from "./Utils.js";

enum APISort {
  PublishedOn = "published_on",
  EntityMatchScore = "entity_match_score",
  EntitySentimentScore = "entity_sentiment_score",
  RelevanceScore = "relevance_score",
}

enum APISortOrder {
  Ascending = "asc",
  Descending = "desc",
}

export enum APIEntityType {
  Index = "index",
  Equity = "equity",
  ETF = "etf",
  MutualFund = "mutualfund",
  Currency = "currency",
  Cryptocurrency = "cryptocurrency",
}

export interface APISearchParams {
  symbols: string | string[];
  entity_types: APIEntityType | APIEntityType[];
  industries: string | string[];
  countries: string | string[];
  sentiment_gte: number;
  sentiment_lte: number;
  min_match_score: number;
  filter_entities: boolean;
  must_have_entities: boolean;
  group_similar: boolean;
  search: string;
  domains: string | string[];
  exclude_domains: string | string[];
  source_ids: string | string[];
  exclude_source_ids: string | string[];
  language: string | string[];
  published_before: Date;
  published_after: Date;
  published_on: Date;
  sort: APISort;
  sort_order: APISortOrder;
  limit: number;
  page: number;
}

enum APIEntityHighlightedIn {
  Title = "title",
  MainText = "main_text",
}

export interface APIEntity {
  symbol: string;
  name: string;
  exchange: null | string;
  exchange_long: null;
  country: string;
  type: APIEntity;
  industry: string;
  match_score: number;
  sentiment_score: number;
  highligths: APIEntityHighlight[];
}

export interface APIEntityHighlight {
  highlight: string;
  sentiment: number;
  highlighted_in: APIEntityHighlightedIn;
}

export interface APIEndpoints {
  [APINewsEndpoints.Feed]: {
    searchParams: Partial<APISearchParams>;
    response: {
      meta: ResponseMeta;
      data: APIArticle[];
    };
  };
}

export interface ResponseMeta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export default abstract class APIInterface {
  protected readonly _api: API;

  constructor(api: API) {
    this._api = api;
  }

  protected async _fetch<T extends keyof APIEndpoints>(
    endpoint: T,
    params?: APIEndpoints[T]["searchParams"],
  ) {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      const value = params[key];
      if (value === undefined) continue;

      switch (typeof value) {
        case "number":
          searchParams.set(key, `${value}`);
          break;
        case "boolean":
          searchParams.append(key, value ? "true" : "false");
          break;
        case "string":
          searchParams.append(key, value);
          break;
        default:
          if (value instanceof Date)
            searchParams.append(key, Utils.toAPIDate(value));
          else if (Utils.isStringArray(value))
            searchParams.append(key, value.join(","));
          else throw new Error("Invalid search parameter value type.");
      }
    }

    searchParams.append("api_token", this._api.token);

    const resourceURL = new URL(this._api.baseURL);
    resourceURL.pathname = `/v1/${endpoint}`;
    resourceURL.search = searchParams.toString();

    const response = await (await fetch(resourceURL)).json();

    if (!response || typeof response !== "object")
      throw new Error("Response is not a non-null object.");

    if (Utils.isAPIError(response)) {
      throw new Error(`${response.code} - ${response.message}`);
    }

    return <Promise<APIEndpoints[T]["response"]>>response;
  }
}
