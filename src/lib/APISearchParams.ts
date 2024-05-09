interface BaseAPISearchParams {
  api_token: string;
}

export default class APISearchParams extends URLSearchParams {
  constructor(params: BaseAPISearchParams) {
    super({
      ...params,
    });
  }
}
