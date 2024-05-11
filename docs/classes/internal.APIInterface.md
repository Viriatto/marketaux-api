[Marketaux API - v0.2.1](../README.md) / [Exports](../modules.md) / [internal](../modules/internal.md) / APIInterface

# Class: APIInterface

[internal](../modules/internal.md).APIInterface

## Hierarchy

- **`APIInterface`**

  ↳ [`APINewsInterface`](internal.APINewsInterface.md)

## Table of contents

### Constructors

- [constructor](internal.APIInterface.md#constructor)

### Properties

- [\_api](internal.APIInterface.md#_api)

### Methods

- [\_fetch](internal.APIInterface.md#_fetch)

## Constructors

### constructor

• **new APIInterface**(`api`): [`APIInterface`](internal.APIInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`API`](API.md) |

#### Returns

[`APIInterface`](internal.APIInterface.md)

#### Defined in

[lib/APIInterface.ts:99](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/lib/APIInterface.ts#L99)

## Properties

### \_api

• `Protected` `Readonly` **\_api**: [`API`](API.md)

#### Defined in

[lib/APIInterface.ts:97](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/lib/APIInterface.ts#L97)

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

#### Defined in

[lib/APIInterface.ts:103](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/lib/APIInterface.ts#L103)
