[NPM Package Template - v0.1.3](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / APINewsInterface

# Class: APINewsInterface

[internal](../modules/internal.md).APINewsInterface

## Hierarchy

- [`APIInterface`](internal.APIInterface.md)

  ↳ **`APINewsInterface`**

## Table of contents

### Constructors

- [constructor](internal.APINewsInterface.md#constructor)

### Properties

- [\_api](internal.APINewsInterface.md#_api)

### Methods

- [\_fetch](internal.APINewsInterface.md#_fetch)
- [getFeed](internal.APINewsInterface.md#getfeed)

## Constructors

### constructor

• **new APINewsInterface**(`api`): [`APINewsInterface`](internal.APINewsInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`API`](API.md) |

#### Returns

[`APINewsInterface`](internal.APINewsInterface.md)

#### Inherited from

[APIInterface](internal.APIInterface.md).[constructor](internal.APIInterface.md#constructor)

#### Defined in

[lib/APIInterface.ts:99](https://github.com/Viriatto/marketaux-api/blob/ec162d3/src/lib/APIInterface.ts#L99)

## Properties

### \_api

• `Protected` `Readonly` **\_api**: [`API`](API.md)

#### Inherited from

[APIInterface](internal.APIInterface.md).[_api](internal.APIInterface.md#_api)

#### Defined in

[lib/APIInterface.ts:97](https://github.com/Viriatto/marketaux-api/blob/ec162d3/src/lib/APIInterface.ts#L97)

## Methods

### \_fetch

▸ **_fetch**\<`T`\>(`endpoint`, `params?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`APIEndpoints`](../interfaces/APIEndpoints.md)[`T`][``"response"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Feed`](../modules/internal.md#feed) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `T` |
| `params?` | [`APIEndpoints`](../interfaces/APIEndpoints.md)[`T`][``"searchParams"``] |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`APIEndpoints`](../interfaces/APIEndpoints.md)[`T`][``"response"``]\>

#### Inherited from

[APIInterface](internal.APIInterface.md).[_fetch](internal.APIInterface.md#_fetch)

#### Defined in

[lib/APIInterface.ts:103](https://github.com/Viriatto/marketaux-api/blob/ec162d3/src/lib/APIInterface.ts#L103)

___

### getFeed

▸ **getFeed**(`params?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: [`APIArticle`](../interfaces/internal.APIArticle.md)[] ; `meta`: [`ResponseMeta`](../interfaces/ResponseMeta.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`APISearchParams`](../interfaces/APISearchParams.md)\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `data`: [`APIArticle`](../interfaces/internal.APIArticle.md)[] ; `meta`: [`ResponseMeta`](../interfaces/ResponseMeta.md)  }\>

#### Defined in

[interfaces/news/APINewsInterface.ts:27](https://github.com/Viriatto/marketaux-api/blob/ec162d3/src/interfaces/news/APINewsInterface.ts#L27)
