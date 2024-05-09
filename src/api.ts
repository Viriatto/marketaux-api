import APINewsInterface from "./interfaces/news/APINewsInterface.js";

export default class API {
  private readonly _token: string;

  private readonly _baseURL = "https://api.marketaux.com";

  private readonly _news = new APINewsInterface(this);

  constructor(token: string) {
    this._token = token;
  }

  public get news() {
    return this._news;
  }

  public get baseURL() {
    return this._baseURL;
  }

  public get token() {
    return this._token;
  }
}
