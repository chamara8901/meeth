# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7) - M5.1:商品・在庫管理 キャンペーン名称API設計書

- [1. 管理画面再構築 - M5.1:商品・在庫管理 キャンペーン名称API設計書](#1-管理画面再構築---m51商品・在庫管理-キャンペーン名称api設計書)
  - [1.1. 概要](#11-概要)
  - [1.2. リクエストパラメータ(body部分)](#12-リクエストパラメータbody部分)
  - [1.3. レスポンスパラメータ(data部分)](#13-レスポンスパラメータdata部分)

## 1.1. 概要

| NO. | 名称     | 内容                                           |
| --- | -------- | ---------------------------------------------- |
| 1   | API概要  | 受け取ったパラメータでキャンペーン名称を更新する |
| 2   | スキーマ | /api/settings/campaign                  |

## 1.2. リクエストパラメータ(body部分)
| NO  | パラメータ名             | パラメータ名                              | 値(例)             | 説明                                 |
| --- | ------------------------ | ----------------------------------------- | ------------------ | ------------------------------------ |
| 1   | キャンペーン名称キー       | key               　　　　　　　　　　　　 | string(CAMPAIGN_TITLE)  |  キーであるため値は決め打ち       |
| 2   | キャンペーン名称キー（日本語）| japanese_key               　　　　　 | string(CAMPAIGN_TITLE_JAPANESE)  |  キーであるため値は決め打ち  |
| 3   | キャンペーン名称           | value                                   | string(CAMPAIGN_TITLE) | CAMPAIGN PRODUCTS               |
| 4   | キャンペーン名称（日本語）  | japanese_value                       　| string(キャンペーン) |    キャンペーン商品            |
| 5   | カテゴリ          　　　　　 | category                             | string(CAMPAIGN)   | 値は決め打ち  　　　  |

-リクエスト例
```json
{
 "key":"CAMPAIGN_TITLE",
 "japanese_key":"CAMPAIGN_TITLE_JAPANESE",
 "value":"CAMPAIGN_TITLE",
 "japanese_value":"キャンペーン",
 "category":"CAMPAIGN"
}
```

## 1.3. レスポンスパラメータ(data部分)

- レスポンス例
```json
{
 "data":{
   "value":"CAMPAIGN_TITLE",
   "japanese_value":"キャンペーン"
 }
}
```
