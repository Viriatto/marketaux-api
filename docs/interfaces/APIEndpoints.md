[Marketaux API - v0.2.1](../README.md) / [Exports](../modules.md) / APIEndpoints

# Interface: APIEndpoints

## Table of contents

### Properties

- [/news/all](APIEndpoints.md#/news/all)

## Properties

### /news/all

• **/news/all**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `response` | \{ `data`: [`APIArticle`](internal.APIArticle.md)[] ; `meta`: [`ResponseMeta`](ResponseMeta.md)  } |
| `response.data` | [`APIArticle`](internal.APIArticle.md)[] |
| `response.meta` | [`ResponseMeta`](ResponseMeta.md) |
| `searchParams` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`APISearchParams`](APISearchParams.md)\> |

#### Defined in

[lib/APIInterface.ts:80](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/lib/APIInterface.ts#L80)
