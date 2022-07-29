# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7) - M6.1:顧客詳細 詳細情報取得API設計書

- [1. 管理画面再構築 - M6.1:顧客詳細 詳細情報取得API設計書](#1-管理画面再構築---m61顧客詳細-詳細情報取得api設計書)
  - [1.1. 概要](#11-概要)
  - [1.2. リクエストパラメータ(body部分)](#12-リクエストパラメータbody部分)
  - [1.3. レスポンスパラメータ(data部分)](#13-レスポンスパラメータdata部分)

## 1.1. 概要

| NO. | 名称     | 内容                            |
| --- | -------- | ------------------------------- |
| 1   | API概要  | 詳細情報を取得するAPI     |
| 2   | スキーマ | /api/customer/getDetail |

## 1.2. リクエストパラメータ(body部分)

| NO  | パラメータ名         | パラメータ名  | 値(例)                                                       | 説明                                                                                                                                                                                                                            |
| --- | -------------------- | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | 顧客ID               | customer_id   | integer(1)                                                   | 顧客ID                                                                                                                                                                                                                          |

-リクエスト例
```json
{
 customer_id:1
}
```

## 1.3. レスポンスパラメータ(data部分)

| NO   | パラメータ名                           | パラメータ名                   | 値(例)                      | 説明                                                                       |
| ---- | -------------------------------------- | ------------------------------ | --------------------------- | -------------------------------------------------------------------------- |
| 1  | 顧客ID                                 | customer_id                    | integer(1)                  | 顧客ID                                                                     |
| 2  | メールアドレス                         | email                          | string(aaa@bbb.com)         | メールアドレス                                                             |
| 3  | DM可否                                 | dm_agreed                      | boolean(true)               | DM可否                                                                     |
| 4  | 名前(姓)                               | family_name                    | string(ほげ)                | 名前(姓)                                                                   |
| 5  | 名前(名)                               | first_name                     | string(太郎)                | 名前(名)                                                                   |
| 6  | 誕生日                                 | birthday                       | string(2020/01/01)          | 誕生日                                                                     |
| 7  | 年齢                                   | age                            | integer(21)                 | 年齢                                                                       |
| 8  | 総購入回数                             | total_order_count              | integer(1)                  | 総購入回数                                                                 |
| 9  | 総定期購入回数                         | total_subscription_order_count | integer(1)                  | 総定期購入回数                                                             |
| 10 | 総購入金額                             | total_amount                   | integer(1)                  | 総購入金額                                                                 |
| 11 | 総定期購入金額                         | total_subscription_amount      | integer(1)                  | 総定期購入金額                                                             |
| 12 | 顧客ステータス                         | customer_status                | integer(1)                  | 顧客ステータス                                                             |
| 13 | 初回購入日                             | first_order_date               | string(2020/01/01)          | 初回購入日                                                                 |
| 14 | 最終購入日                             | last_order_date                | string(2020/01/01)          | 最終購入日                                                                 |
| 15 | アカウント作成日時                     | customer_create_at             | string(2020/01/01 12:00:00) | アカウント作成日時                                                         |

- レスポンス例
```json
{
 "data":{
    "customer_id":1
    "email":"aaa@bbb.com"
    "dm_agreed":true
    "family_name":"ほげ"
    "first_name":"太郎"
    "birthday":"2020/01/01"
    "age":21
    "total_order_count":1
    "total_subscription_order_count":1
    "total_amount":10000
    "total_subscription_amount":5000
    "customer_status":1
    "first_order_date":"2020/01/01"
    "last_order_date":"2020/01/01"
    "customer_create_at":"2020/01/01 12:00:00"
 }
}
```