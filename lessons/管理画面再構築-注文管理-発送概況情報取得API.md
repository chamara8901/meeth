# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7) - M6.1:注文管理 発送概況情報取得API設計書

- [1. 管理画面再構築 - M6.1:注文管理 発送概況情報取得API設計書](#1-管理画面再構築---m61注文管理-発送概況情報取得api設計書)
  - [1.1. 概要](#11-概要)
  - [1.2. リクエストパラメータ(body部分)](#12-リクエストパラメータbody部分)
  - [1.3. レスポンスパラメータ(data部分)](#13-レスポンスパラメータdata部分)

## 1.1. 概要

| NO. | 名称     | 内容                                           |
| --- | -------- | ---------------------------------------------- |
| 1   | API概要  | 発送概況情報を取得し返却する |
| 2   | スキーマ | /api/order/getShippingInfo                  |

## 1.2. リクエストパラメータ(body部分)

なし

## 1.3. レスポンスパラメータ(data部分)

| NO  | パラメータ名 | パラメータ名 | 値(例)          | 説明                                 |
| --- | ------------ | ------------ | --------------- | ------------------------------------ |
| 1  | 今日の総注文数           | today_total_order_count                     | integer(1)      | 今日の総注文数                       |
| 2  | 今日の定期購入注文数     | today_total_subscription_order_count        | integer(1)      | 今日の定期購入注文数                 |
| 3  | 今日の総発送数           | today_total_shipping_count                  | integer(1)      | 今日の総発送数                       |
| 4  | 今日の定期購入発送数     | today_total_subscription_shipping_count     | integer(1)      | 今日の定期購入発送数                 |
| 5  | 昨日の総注文数           | yesterday_total_order_count                 | integer(1)      | 昨日の総注文数                       |
| 6  | 昨日の定期購入注文数     | yesterday_total_subscription_order_count    | integer(1)      | 昨日の定期購入注文数                 |
| 7  | 昨日の総発送数           | yesterday_total_shipping_count              | integer(1)      | 昨日の総発送数                       |
| 8  | 昨日の定期購入発送数     | yesterday_total_subscription_shipping_count | integer(1)      | 昨日の定期購入発送数                 |
| 9  | 注文処理中件数           | order_processing_count                      | integer(1)      | 注文処理中件数                       |
| 10 | 定期購入の注文処理中件数 | subscription_order_processing_count         | integer(1)      | 定期購入の注文処理中件数             |
| 11 | 注文保留中件数           | order_pending_count                         | integer(1)      | 注文保留中件数                       |

- レスポンス例
```json
 "data":{
    "today_total_order_count":1
    "today_total_subscription_order_count":1
    "today_total_shipping_count":"ほげ太郎"
    "today_total_subscription_shipping_count":1
    "yesterday_total_order_count":20000
    "yesterday_total_subscription_order_count":1
    "yesterday_total_shipping_count":1
    "yesterday_total_subscription_shipping_count":"2020/01/01"
    "order_processing_count":"2020/01/01"
    "subscription_order_processing_count":"2020/01/01"
    "order_pending_count":"2020/01/01"
 }
```