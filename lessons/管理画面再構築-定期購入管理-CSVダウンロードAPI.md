# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7) - M4.1:定期購入管理 CSVダウンロードAPI設計書

- [1. 管理画面再構築 - M4.1:定期購入管理 CSVダウンロードAPI設計書](#1-管理画面再構築---m41定期購入管理-csvダウンロードapi設計書)
  - [1.1. 概要](#11-概要)
  - [1.2. リクエストパラメータ(body部分)](#12-リクエストパラメータbody部分)
  - [1.3. レスポンスパラメータ(data部分)](#13-レスポンスパラメータdata部分)

## 1.1. 概要

| NO. | 名称     | 内容                                           |
| --- | -------- | ---------------------------------------------- |
| 1   | API概要  | 受け取った検索パラメータから検索結果を返却する |
| 2   | スキーマ | /api/subscription/csvDownload                  |

## 1.2. リクエストパラメータ(body部分)
| NO  | パラメータ名             | パラメータ名                              | 値(例)             | 説明                                 |
| --- | ------------------------ | ----------------------------------------- | ------------------ | ------------------------------------ |
| 1   | 定期購入ID               | subscription_id                           | integer(1354151091180146709)  | 定期購入ID                 |
| 2   | 顧客ID                   | customer_id                               | integer(1354151091180146710)  | 顧客ID                     |
| 3   | 購入日(開始)             | purchase_date_start                       | string(yyyy/mm/dd) | 定期購入日の検索期間開始日               |
| 4   | 購入日(終了)             | purchase_date_end                         | string(yyyy/mm/dd) | 定期購入日の検索期間終了日               |
| 5   | 毎月のご注文日           | delivery_plan                             | integer(1)         | 定期購入の注文・お届け予定日  　　　  |
| 6   | 注文回数                 | total_orders_count         　　　　        | integer(2)         | 定期購入回数     　　　　　　　　　　|
| 7   | 注文回数サフィックス     | total_orders_count_suffix         　　　　　| integer(2)         | 定期購入回数の以下・一致・以上選択    |
| 8   | 注文ステータス  　　　　　| order_status                              | integer(2)         | 定期購入の注文ステータス   |                                                                                                                                                                                                                   |

-リクエスト例
```json
{
 "subscription_id":1354151091180146709,
 "customer_id":1354151091180146710,
 "purchase_date_start":"2000/01/01",
 "purchase_date_end":"2000/01/01",
 "delivery_plan":2,
 "total_orders_count":2,
 "total_orders_count_suffix":2,
 "order_status":2,
 "current_page":1
}
```
## 1.3. レスポンスパラメータ(data部分)

なし
