[Marketaux API - v0.2.1](../README.md) / [Exports](../modules.md) / API

# Class: API

## Table of contents

### Constructors

- [constructor](API.md#constructor)

### Properties

- [\_baseURL](API.md#_baseurl)
- [\_news](API.md#_news)
- [\_token](API.md#_token)

### Accessors

- [baseURL](API.md#baseurl)
- [news](API.md#news)
- [token](API.md#token)

## Constructors

### constructor

• **new API**(`token`): [`API`](API.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`API`](API.md)

#### Defined in

[api.ts:10](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L10)

## Properties

### \_baseURL

• `Private` `Readonly` **\_baseURL**: ``"https://api.marketaux.com"``

#### Defined in

[api.ts:6](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L6)

___

### \_news

• `Private` `Readonly` **\_news**: [`APINewsInterface`](internal.APINewsInterface.md)

#### Defined in

[api.ts:8](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L8)

___

### \_token

• `Private` `Readonly` **\_token**: `string`

#### Defined in

[api.ts:4](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L4)

## Accessors

### baseURL

• `get` **baseURL**(): `string`

#### Returns

`string`

#### Defined in

[api.ts:18](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L18)

___

### news

• `get` **news**(): [`APINewsInterface`](internal.APINewsInterface.md)

#### Returns

[`APINewsInterface`](internal.APINewsInterface.md)

#### Defined in

[api.ts:14](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L14)

___

### token

• `get` **token**(): `string`

#### Returns

`string`

#### Defined in

[api.ts:22](https://github.com/Viriatto/marketaux-api/blob/27b470f/src/api.ts#L22)
